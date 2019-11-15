import React from 'react';
import pick from 'lodash/pick';
import { isMind } from '@/utils';
import { track } from '@/helpers';
import Global from '@/common/Global';
import {
  GraphType,
  GraphCommonEvent,
  GraphNodeEvent,
  GraphEdgeEvent,
  GraphCanvasEvent,
  GraphCustomEvent,
} from '@/common/constants';
import { FlowData, MindData, GraphNativeEvent, GraphReactEvent, FlowAndMindCommonProps } from '@/common/interfaces';
import { withEditorContext } from '@/components/EditorContext';

import './command';
import './behavior';

const FIT_VIEW_PADDING = 200;

interface GraphProps extends Omit<FlowAndMindCommonProps, 'graphConfig' | 'customModes'> {
  containerId: string;
  data: FlowData | MindData;
  parseData(data: object): void;
  initGraph(width: number, height: number): G6.Graph;
}

interface GraphState {}

class Graph extends React.Component<GraphProps, GraphState> {
  graph: G6.Graph | null;

  constructor(props: GraphProps) {
    super(props);

    this.graph = null;
  }

  componentDidMount() {
    this.initGraph();
    this.bindEvent();
  }

  componentDidUpdate(prevProps: GraphProps) {
    const { data } = this.props;

    if (data !== prevProps.data) {
      this.changeData(data);
    }
  }

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
      if (typeof props[event] === 'function') {
        graph.on(events[event], props[event]);
      }
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
      </div>
    );
  }
}

export default withEditorContext<GraphProps>(Graph);
