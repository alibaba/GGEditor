import { isFlow, isMind, getFlowRecallEdges, getMindRecallEdges, executeBatch } from '@/utils';
import { ItemState } from '@/common/constants';
import { TreeGraph, Node, Edge, Behavior, GraphEvent } from '@/common/interfaces';
import behaviorManager from '@/common/behaviorManager';

interface RecallEdgeBehavior extends Behavior {
  /** 当前高亮边线 Id */
  edgeIds: string[];
  /** 设置高亮状态 */
  setHighLightState(edges: Edge[]): void;
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
  edgeIds: [],

  getEvents() {
    return {
      'node:click': 'handleNodeClick',
      'edge:click': 'handleEdgeClick',
      'canvas:click': 'handleCanvasClick',
    };
  },

  setHighLightState(edges: Edge[]) {
    const { graph } = this;

    this.clearHighLightState();

    executeBatch(graph, () => {
      edges.forEach(item => {
        graph.setItemState(item, ItemState.HighLight, true);
      });
    });

    this.edgeIds = edges.map(edge => edge.get('id'));
  },

  clearHighLightState() {
    const { graph } = this;

    executeBatch(graph, () => {
      this.edgeIds.forEach(id => {
        const item = graph.findById(id);

        if (item && !item.destroyed) {
          graph.setItemState(item, ItemState.HighLight, false);
        }
      });
    });

    this.edgeIds = [];
  },

  handleNodeClick({ item }) {
    const { graph } = this;

    let edges: Edge[] = [];

    if (isFlow(graph)) {
      edges = getFlowRecallEdges(graph, item as Node);
    }

    if (isMind(graph)) {
      edges = getMindRecallEdges(graph as TreeGraph, item as Node);
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
