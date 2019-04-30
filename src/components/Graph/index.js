import React from 'react';
import pick from 'lodash/pick';
import {
  GRAPH_COMMON_EVENTS,
  GRAPH_ITEM_CHANGE_EVENTS,
} from '@common/constants';
import withEditorContext from '@common/EditorContext/withEditorContext';

import './command';
import './behavior';

class Graph extends React.Component {
  componentDidMount() {
    this.initGraph();
    this.bindEvent();
  }

  addListener = (target, eventName, handler) => {
    if (typeof handler === 'function') target.on(eventName, handler);
  };

  initGraph() {
    const { containerId, parseData, initGraph, editor } = this.props;
    const { clientWidth, clientHeight } = document.getElementById(containerId);

    // Parse data
    const data = { ...this.props.data };

    parseData({ data });

    // Init Graph
    this.graph = initGraph({
      width: clientWidth,
      height: clientHeight,
    });

    this.graph.data(data);
    this.graph.render();
    this.graph.fitView();

    editor.setGraph({
      graph: this.graph,
    });
  }

  bindEvent() {
    const { addListener } = this;

    Object.keys(GRAPH_COMMON_EVENTS).forEach((event) => {
      const eventName = GRAPH_COMMON_EVENTS[event];

      addListener(this.graph, `${event}`, this.props[`on${eventName}`]);
      addListener(this.graph, `node:${event}`, this.props[`onNode${eventName}`]);
      addListener(this.graph, `edge:${event}`, this.props[`onEdge${eventName}`]);
      addListener(this.graph, `canvas:${event}`, this.props[`onCanvas${eventName}`]);
    });

    Object.keys(GRAPH_ITEM_CHANGE_EVENTS).forEach((event) => {
      addListener(this.graph, [event], this.props[GRAPH_ITEM_CHANGE_EVENTS[event]]);
    });
  }

  render() {
    const { containerId, children } = this.props;

    return (
      <div id={containerId} {...pick(this.props, ['className', 'style'])}>
        {children}
      </div>
    );
  }
}

export default withEditorContext(Graph);
