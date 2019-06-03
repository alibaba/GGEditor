import React from 'react';
import { pick, uuid, addListener } from '@utils';
import {
  ITEM_TYPE_NODE,
  ITEM_STATE_SELECTED,
  GRAPH_STATE_NODE_SELECTED,
  GRAPH_STATE_MULTI_SELECTED,
  GRAPH_STATE_CANVAS_SELECTED,
  GRAPH_EVENTS_COMMON,
  GRAPH_EVENTS_ITEM_CHANGE,
  EDITOR_COMMAND_REDO,
  EDITOR_COMMAND_UNDO,
  EDITOR_COMMAND_TOPIC,
  EDITOR_COMMAND_SUBTOPIC,
  EDITOR_EVENTS_AFTER_EXECUTE_COMMAND,
} from '@common/constants';
import withEditorContext from '@common/EditorContext/withEditorContext';
import EditableLabel from '@components/EditableLabel';
import Util from './util';

import './command';
import './behavior';

class Graph extends React.Component {
  componentDidMount() {
    this.initGraph();
    this.bindEvent();
  }

  getGraphState = () => {
    const selectedNodes = this.graph.findAllByState(ITEM_TYPE_NODE, ITEM_STATE_SELECTED);

    let graphState = '';

    switch (selectedNodes.length) {
      case 0:
        graphState = GRAPH_STATE_CANVAS_SELECTED;
        break;

      case 1:
        graphState = `${GRAPH_STATE_NODE_SELECTED}_${uuid()}`;
        break;

      default:
        graphState = `${GRAPH_STATE_MULTI_SELECTED}_${uuid()}`;
        break;
    }

    return graphState;
  };

  initGraph() {
    const { containerId, parseData, initGraph, setGraph } = this.props;
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

    setGraph(this.graph);
  }

  getDelegation(items, group) {
    if (!group) {
      const graph = this.getGraph();
      group = graph.getRootGroup();
    }
    // 移动节点委托图形
    const startBox = Util.getTotalBBox(items.map(item => {
      return item.getBBox();
    }));
    const delegation = Util.getRectByBox(startBox, group, {
      stroke: '#1890FF',
      fill: '#1890FF',
      fillOpacity: 0.08,
      lineDash: [4, 4],
      radius: 4,
      lineWidth: 1,
    });
    delegation.set('capture', false);

    return delegation;
  }

  bindEvent() {
    const { graph, props } = this;

    Object.keys(GRAPH_EVENTS_COMMON).forEach((event) => {
      const eventName = GRAPH_EVENTS_COMMON[event];

      addListener(graph, `${event}`, props[`on${eventName}`]);
      addListener(graph, `node:${event}`, props[`onNode${eventName}`]);
      addListener(graph, `edge:${event}`, props[`onEdge${eventName}`]);
      addListener(graph, `canvas:${event}`, props[`onCanvas${eventName}`]);
    });

    Object.keys(GRAPH_EVENTS_ITEM_CHANGE).forEach((event) => {
      addListener(graph, event, props[GRAPH_EVENTS_ITEM_CHANGE[event]]);
    });

    // Add listener for the selected status of the graph
    const { setGraphState } = this.props;

    addListener(graph, 'node:click', () => {
      setGraphState(this.getGraphState());
    });

    addListener(graph, EDITOR_EVENTS_AFTER_EXECUTE_COMMAND, ({ name }) => {
      if ([
        EDITOR_COMMAND_REDO,
        EDITOR_COMMAND_UNDO,
        EDITOR_COMMAND_TOPIC,
        EDITOR_COMMAND_SUBTOPIC,
      ].includes(name)) {
        setGraphState(this.getGraphState());
      }
    });

    addListener(graph, 'canvas:click', () => {
      setGraphState(GRAPH_STATE_CANVAS_SELECTED);
    });
  }

  render() {
    const { containerId, children } = this.props;

    return (
      <div id={containerId} {...pick(this.props, ['className', 'style'])}>
        {children}
        <EditableLabel/>
      </div>
    );
  }
}

export default withEditorContext(Graph, ({ setGraph, setGraphState }) => ({
  setGraph,
  setGraphState,
}));
