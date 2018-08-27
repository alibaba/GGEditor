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

  bindEvent() {
    const graph = this.page.getGraph();

    GRAPH_MOUSE_EVENTS.forEach((event) => {
      const handleNodeEvent = this.props[`onNode${upperFirst(event)}`];
      const handleEdgeEvent = this.props[`onEdge${upperFirst(event)}`];

      if (handleNodeEvent) {
        graph.on(`node:${event}`, handleNodeEvent);
      }

      if (handleEdgeEvent) {
        graph.on(`edge:${event}`, handleEdgeEvent);
      }
    });

    GRAPH_OTHER_EVENTS.forEach((event) => {
      const handleEvent = this.props[(`on${upperFirst(event)}`)];

      if (handleEvent) {
        graph.on([event], handleEvent);
      }
    });

    PAGE_EVENTS.forEach((event) => {
      const handleEvent = this.props[(`on${upperFirst(event)}`)];

      if (handleEvent) {
        this.page.on([event], handleEvent);
      }
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
