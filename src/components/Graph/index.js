import React from 'react';
import pick from 'lodash/pick';
import {
  ITEM_TYPE_NODE,
  ITEM_STATE_SELECTED,
  GRAPH_STATUS_NODE_SELECTED,
  GRAPH_STATUS_NODE_MULTI_SELECTED,
  GRAPH_STATUS_CANVAS_SELECTED,
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

    editor.setGraph(this.graph);
  }

  bindEvent() {
    const { graph, props, addListener } = this;

    Object.keys(GRAPH_COMMON_EVENTS).forEach((event) => {
      const eventName = GRAPH_COMMON_EVENTS[event];

      addListener(graph, `${event}`, props[`on${eventName}`]);
      addListener(graph, `node:${event}`, props[`onNode${eventName}`]);
      addListener(graph, `edge:${event}`, props[`onEdge${eventName}`]);
      addListener(graph, `canvas:${event}`, props[`onCanvas${eventName}`]);
    });

    Object.keys(GRAPH_ITEM_CHANGE_EVENTS).forEach((event) => {
      addListener(graph, [event], props[GRAPH_ITEM_CHANGE_EVENTS[event]]);
    });

    // Add listener for the selected status of the graph
    const { editor } = this.props;

    addListener(graph, 'afteritemstatechange', ({ state }) => {
      if (state !== ITEM_STATE_SELECTED) {
        return;
      }

      const selectedNodes = graph.findAllByState(ITEM_TYPE_NODE, ITEM_STATE_SELECTED);

      let status = '';

      switch (selectedNodes.length) {
        case 0:
          status = GRAPH_STATUS_CANVAS_SELECTED;
          break;

        case 1:
          status = GRAPH_STATUS_NODE_SELECTED;
          break;

        default:
          status = GRAPH_STATUS_NODE_MULTI_SELECTED;
          break;
      }

      editor.setGraphStatus(status);
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
