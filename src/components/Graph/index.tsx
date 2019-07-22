import React from 'react';
import pick from 'lodash/pick';
import { uuid, addListener } from '@utils';
import {
  ITEM_TYPE_NODE,
  ItemState,
  GraphState,
  EditorEvent,
  EditorCommand,
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
  GraphEvent,
  CommandEvent,
  EventHandle,
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
    const selectedNodes = this.graph.findAllByState(ITEM_TYPE_NODE, ItemState.Selected);

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
      [propName in GraphReactEvent]: GraphNativeEvent;
    } = {
      ...GraphCommonEvent,
      ...GraphNodeEvent,
      ...GraphEdgeEvent,
      ...GraphCanvasEvent,
      ...GraphCustomEvent,
    };

    (Object.keys(events) as GraphReactEvent[]).forEach((event) => {
      addListener<EventHandle<GraphEvent>>(graph, events[event], props[event]);
    });

    // Add listener for the selected status of the graph
    const { setGraphState } = this.props;

    addListener<EventHandle<CommandEvent>>(graph, EditorEvent.onAfterExecuteCommand, ({ name }) => {
      if ([
        EditorCommand.Undo,
        EditorCommand.Redo,
        EditorCommand.Topic,
        EditorCommand.Subtopic,
      ].includes(name)) {
        setGraphState(this.getGraphState());
      }
    });

    addListener<EventHandle<GraphEvent>>(graph, GraphNodeEvent.onNodeClick, () => {
      setGraphState(this.getGraphState());
    });

    addListener<EventHandle<GraphEvent>>(graph, GraphCanvasEvent.onCanvasClick, () => {
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
