import { isFlow, isMind, getFlowRecallEdges, getMindRecallEdges, executeBatch } from '@/utils';
import { ItemState } from '@/common/constants';
import { Behavior, GraphEvent } from '@/common/interfaces';
import behaviorManager from '@/common/behaviorManager';

interface RecallEdgeBehavior extends Behavior {
  /** 当前高亮边线 */
  edges: G6.Edge[];
  /** 设置高亮状态 */
  setHighLightState(edges: G6.Edge[]): void;
  /** 清除高亮状态 */
  clearHighLightState(): void;
  /** 处理节点点击 */
  handleNodeClick(e: GraphEvent): void;
  /** 处理边线点击 */
  handleEdgeClick(e: GraphEvent): void;
  /** 处理画布点击 */
  handleCanvasClick(e: GraphEvent): void;
}

const recallEdgeBehavior: RecallEdgeBehavior = {
  edges: [],

  getEvents() {
    return {
      'node:click': 'handleNodeClick',
      'edge:click': 'handleEdgeClick',
      'canvas:click': 'handleCanvasClick',
    };
  },

  setHighLightState(edges: G6.Edge[]) {
    const { graph } = this;

    this.clearHighLightState();

    executeBatch(graph, () => {
      edges.forEach(item => {
        graph.setItemState(item, ItemState.HighLight, true);
      });
    });

    this.edges = edges;
  },

  clearHighLightState() {
    const { graph } = this;

    executeBatch(graph, () => {
      this.edges.forEach(item => {
        if (!item.destroyed) {
          graph.setItemState(item, ItemState.HighLight, false);
        }
      });
    });

    this.edges = [];
  },

  handleNodeClick({ item }) {
    const { graph } = this;

    let edges: G6.Edge[] = [];

    if (isFlow(graph)) {
      edges = getFlowRecallEdges(graph, item as G6.Node);
    }

    if (isMind(graph)) {
      edges = getMindRecallEdges(graph as G6.TreeGraph, item as G6.Node);
    }

    this.setHighLightState(edges);
  },

  handleEdgeClick() {
    this.clearHighLightState();
  },

  handleCanvasClick() {
    this.clearHighLightState();
  },
};

behaviorManager.register('recall-edge', recallEdgeBehavior);
