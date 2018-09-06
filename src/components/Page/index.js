import React from 'react';
import PropTypes from 'prop-types';
import { pick, merge } from '@utils';
import {
  GRAPH_MOUSE_EVENTS,
  GRAPH_OTHER_EVENTS,
  PAGE_EVENTS,
  GRAPH_MOUSE_REACT_EVENTS,
  GRAPH_OTHER_REACT_EVENTS,
  PAGE_REACT_EVENTS,
} from '@common/constants';
import BaseComponent from '@components/Base/BaseComponent';

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
    const { data: newData } = props;
    const { data: oldData } = this.props;
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

  get graph() {
    return this.page.getGraph();
  }

  initPage() {}

  readData() {
    const { data } = this.config;

    if (data) {
      this.page.read(data);
    }
  }

  addListener = (target, eventName, handler) => {
    if (typeof handler === 'function') target.on(eventName, handler);
  }

  init() {
    merge(this.config, this.props, {
      graph: {
        container: this.pageId,
      },
    });

    this.initPage();
    this.readData();
  }

  bindEvent() {
    const { addListener } = this;

    GRAPH_MOUSE_EVENTS.forEach((event) => {
      const eventName = GRAPH_MOUSE_REACT_EVENTS[event];
      addListener(this.graph, `node:${event}`, this.props[`onNode${eventName}`]);
      addListener(this.graph, `edge:${event}`, this.props[`onEdge${eventName}`]);
    });

    GRAPH_OTHER_EVENTS.forEach((event) => {
      addListener(this.graph, [event], this.props[GRAPH_OTHER_REACT_EVENTS[event]]);
    });

    PAGE_EVENTS.forEach((event) => {
      addListener(this.page, [event], this.props[PAGE_REACT_EVENTS[event]]);
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
