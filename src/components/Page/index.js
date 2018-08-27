import React from 'react';
import PropTypes from 'prop-types';
import { pick, merge, upperFirst } from '@utils';
import { GRAPH_MOUSE_EVENTS, GRAPH_OTHER_EVENTS, PAGE_EVENTS } from '@common/constants';
import BaseComponent from '@components/Base';

class Page extends BaseComponent {
  static childContextTypes = {
    page: PropTypes.object,
    pageId: PropTypes.number,
    config: PropTypes.object,
  }

  page;

  pageId;

  config = {};

  getChildContext() {
    const { page, pageId, config } = this;

    return {
      page,
      pageId,
      config,
    };
  }

  componentDidMount() {
    this.init();
    this.bindEvent();
    this.forceUpdate();
  }

  shouldComponentUpdate(props) {
    const { defaultData: newData } = props;
    const { defaultData: oldData } = this.props;
    const { mode: newMode } = (props.graph || {});
    const { mode: oldMode } = (this.props.graph || {});

    if (newMode !== oldMode) {
      this.page.changeMode(newMode);
    }

    if (newData !== oldData) {
      this.page.read(newData);

      return true;
    }

    return false;
  }

  init() {
    this.mixConfig();
  }

  mixConfig() {
    merge(this.config, this.props, {
      graph: {
        container: this.pageId,
      },
    });
  }
  get graph() {
    return this.page.getGraph();
  }

  addListener = (target, eventName, handler) => {
    if (typeof handler === 'function') target.on(eventName, handler);
  }

  bindEvent() {
    GRAPH_MOUSE_EVENTS.forEach((event) => {
      this.addListener(this.graph, `node:${event}`, this.props[`onNode${upperFirst(event)}`]);
      this.addListener(this.graph, `edge:${event}`, this.props[`onEdge${upperFirst(event)}`]);
    });

    GRAPH_OTHER_EVENTS.forEach((event) => {
      this.addListener(this.graph, [event], this.props[`on${upperFirst(event)}`]);
    });

    PAGE_EVENTS.forEach((event) => {
      this.addListener(this.page, [event], this.props[`on${upperFirst(event)}`]);
    });
  }

  render() {
    const { page, pageId } = this;
    const { children } = this.props;

    return (
      <div id={pageId} {...pick(this.props, ['style', 'className'])}>
        {
          page ? children : null
        }
      </div>
    );
  }
}

export default Page;
