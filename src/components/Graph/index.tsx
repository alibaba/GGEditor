import React from 'react';
import pick from 'lodash/pick';
import { addListener, getSelectedNodes, getSelectedEdges, isMind } from '@/utils';
import { track } from '@/helpers';
import Global from '@/common/Global';
import {
  GraphType,
  GraphState,
  EditorEvent,
  GraphCommonEvent,
  GraphNodeEvent,
  GraphEdgeEvent,
  GraphCanvasEvent,
  GraphCustomEvent,
} from '@/common/constants';
import {
  GraphNativeEvent,
  GraphReactEvent,
  GraphEvent,
  CommandEvent,
  EventHandle,
  FlowData,
  MindData,
  FlowAndMindCommonProps,
} from '@/common/interfaces';
import { withEditorPrivateContext } from '@/common/context/EditorPrivateContext';
import EditableLabel from '@/components/EditableLabel';

import './command';
import './behavior';

const FIT_VIEW_PADDING = 200;

interface EditorGraphProps extends Omit<FlowAndMindCommonProps, 'graphConfig' | 'customModes'> {
  containerId: string;
  data: FlowData | MindData;
  parseData(data: object): void;
  initGraph(width: number, height: number): G6.Graph;
}

interface EditorGraphState {}

class EditorGraph extends React.Component<EditorGraphProps, EditorGraphState> {
  graph: G6.Graph | null;

  constructor(props: EditorGraphProps) {
    super(props);

    this.graph = null;
  }

  componentDidMount() {
    this.initGraph();
    this.bindEvent();
  }

  componentDidUpdate(prevProps: EditorGraphProps) {
    const { data } = this.props;

    if (data !== prevProps.data) {
      this.changeData(data);
    }
  }

  getGraphState = () => {
    const { graph } = this;

    let graphState: GraphState = GraphState.CanvasSelected;

    if (!graph) {
      return graphState;
    }

    const selectedNodes = getSelectedNodes(graph);
    const selectedEdges = getSelectedEdges(graph);

    if (selectedNodes.length === 1 && !selectedEdges.length) {
      graphState = GraphState.NodeSelected;
    }

    if (selectedEdges.length === 1 && !selectedNodes.length) {
      graphState = GraphState.EdgeSelected;
    }

    if (selectedNodes.length && selectedEdges.length) {
      graphState = GraphState.MultiSelected;
    }

    return graphState;
  };

  initGraph() {
    const { containerId, parseData, initGraph, setGraph } = this.props;
    const { clientWidth = 0, clientHeight = 0 } = document.getElementById(containerId) || {};

    // 解析数据
    const data = { ...this.props.data };

    parseData(data);

    // 初始画布
    this.graph = initGraph(clientWidth, clientHeight);

    this.graph.read(data);
    this.graph.fitView(FIT_VIEW_PADDING);
    this.graph.setMode('default');

    setGraph(this.graph);

    // 发送埋点
    if (Global.getTrackable()) {
      const graphType = isMind(this.graph) ? GraphType.Mind : GraphType.Flow;

      track(graphType);
    }
  }

  bindEvent() {
    const { graph, props } = this;

    if (!graph) {
      return;
    }

    const events: {
      [propName in GraphReactEvent]: GraphNativeEvent;
    } = {
      ...GraphCommonEvent,
      ...GraphNodeEvent,
      ...GraphEdgeEvent,
      ...GraphCanvasEvent,
      ...GraphCustomEvent,
    };

    (Object.keys(events) as GraphReactEvent[]).forEach(event => {
      addListener<EventHandle<GraphEvent>>(graph, events[event], props[event]);
    });

    // Add listener for the selected status of the graph
    const { setGraphState } = this.props;

    addListener<EventHandle<CommandEvent>>(graph, EditorEvent.onAfterExecuteCommand, () => {
      setGraphState(this.getGraphState());
    });

    addListener<EventHandle<GraphEvent>>(graph, GraphNodeEvent.onNodeClick, () => {
      setGraphState(this.getGraphState());
    });

    addListener<EventHandle<GraphEvent>>(graph, GraphEdgeEvent.onEdgeClick, () => {
      setGraphState(this.getGraphState());
    });

    addListener<EventHandle<GraphEvent>>(graph, GraphCanvasEvent.onCanvasClick, () => {
      setGraphState(GraphState.CanvasSelected);
    });
  }

  changeData(data: any) {
    const { graph } = this;
    const { parseData } = this.props;

    if (!graph) {
      return;
    }

    parseData(data);

    graph.changeData(data);
    graph.fitView(FIT_VIEW_PADDING);
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

export default withEditorPrivateContext<EditorGraphProps>(EditorGraph);
