import React from 'react';
import pick from 'lodash/pick';
import { isMind } from '@/utils';
import { track } from '@/helpers';
import global from '@/common/global';
import {
  GraphType,
  GraphCommonEvent,
  GraphNodeEvent,
  GraphEdgeEvent,
  GraphCanvasEvent,
  GraphCustomEvent,
} from '@/common/constants';
import {
  Graph,
  FlowData,
  MindData,
  GraphNativeEvent,
  GraphReactEvent,
  GraphReactEventProps,
} from '@/common/interfaces';
import { EditorPrivateContextProps, withEditorPrivateContext } from '@/components/EditorContext';

import baseCommands from './command';
import mindCommands from '@/components/Mind/command';

import './behavior';

interface GraphProps extends Partial<GraphReactEventProps>, EditorPrivateContextProps {
  style?: React.CSSProperties;
  className?: string;
  containerId: string;
  data: FlowData | MindData;
  parseData(data: object): void;
  initGraph(width: number, height: number): Graph;
}

interface GraphState {}

class GraphComponent extends React.Component<GraphProps, GraphState> {
  graph: Graph | null = null;

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

  focusRootNode(graph: Graph, data: FlowData | MindData) {
    if (!isMind(graph)) {
      return;
    }

    const { id } = data as MindData;

    graph.focusItem(id);
  }

  initGraph() {
    const { containerId, parseData, initGraph, setGraph, commandManager } = this.props;
    const { clientWidth = 0, clientHeight = 0 } = document.getElementById(containerId) || {};

    // 解析数据
    const data = { ...this.props.data };

    parseData(data);

    // 初始画布
    this.graph = initGraph(clientWidth, clientHeight);

    this.graph.data(data);
    this.graph.render();
    this.focusRootNode(this.graph, data);
    this.graph.setMode('default');

    setGraph(this.graph);

    // 设置命令管理器
    this.graph.set('commandManager', commandManager);

    // 注册命令
    let commands = baseCommands;

    if (isMind(this.graph)) {
      commands = {
        ...commands,
        ...mindCommands,
      };
    }

    Object.keys(commands).forEach(name => {
      commandManager.register(name, commands[name]);
    });

    // 发送埋点
    if (global.trackable) {
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
    this.focusRootNode(graph, data);
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

export default withEditorPrivateContext(GraphComponent);
