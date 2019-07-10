import React from 'react';
import { pick, uuid, addListener } from '@utils';
import {
  ITEM_TYPE_NODE,
  ITEM_STATE_SELECTED,
  EDITOR_COMMAND_REDO,
  EDITOR_COMMAND_UNDO,
  EDITOR_COMMAND_TOPIC,
  EDITOR_COMMAND_SUBTOPIC,
  EDITOR_EVENTS_AFTER_EXECUTE_COMMAND,
  GraphState,
  GraphCommonEvent,
  GraphNodeEvent,
  GraphEdgeEvent,
  GraphCanvasEvent,
  GraphCustomEvent,
} from '@common/constants';
import {
  GraphCommonEventProps,
  GraphNodeEventProps,
  GraphEdgeEventProps,
  GraphCanvasEventProps,
  GraphCustomEventProps,
  GraphNativeEvent,
  GraphReactEvent,
} from '@common/interface';
import withEditorContext from '@common/EditorContext/withEditorContext';
import EditableLabel from '@components/EditableLabel';

import './command';
import './behavior';


interface GraphProps extends GraphCommonEventProps, GraphNodeEventProps, GraphEdgeEventProps, GraphCanvasEventProps, GraphCustomEventProps {

}

class Graph extends React.Component<GraphProps> {
  componentDidMount() {
    this.initGraph();
    this.bindEvent();
  }

  getGraphState = () => {
    const selectedNodes = this.graph.findAllByState(ITEM_TYPE_NODE, ITEM_STATE_SELECTED);

    let graphState = '';

    switch (selectedNodes.length) {
      case 0:
        graphState = GraphState.CanvasSelected;
        break;

      case 1:
        graphState = `${GraphState.NodeSelected}_${uuid()}`;
        break;

      default:
        graphState = `${GraphState.MultiSelected}_${uuid()}`;
        break;
    }

    return graphState;
  }

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

  bindEvent() {
    const { graph, props } = this;

    const events: {
      [propName in GraphNativeEvent]: GraphReactEvent;
    } = {
      ...GraphCommonEvent,
      ...GraphNodeEvent,
      ...GraphEdgeEvent,
      ...GraphCanvasEvent,
      ...GraphCustomEvent,
    };

    (Object.keys(events) as GraphNativeEvent[]).forEach((event) => {
      addListener(graph, event, props[events[event]]);
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
      setGraphState(GraphState.CanvasSelected);
    });
  }

  render() {
    const { containerId, children } = this.props;

    return (
      <div id={containerId} {...pick(this.props, ['className', 'style'])}>
        {children}
        <EditableLabel />
      </div>
    );
  }
}

export default withEditorContext(Graph, ({ setGraph, setGraphState }) => ({
  setGraph,
  setGraphState,
}));
