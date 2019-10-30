import { GraphType } from '@/common/constants';
import { Edge, Behavior, GraphEvent } from '@/common/interface';
import behaviorManager from '@/common/behaviorManager';

interface ActiveEdgeBehavior extends Behavior {
  setAllItemStates(e: GraphEvent): void;
  clearAllItemStates(e: GraphEvent): void;
}

const activeEdgeBehavior: ActiveEdgeBehavior = {
  graphType: GraphType.Flow,

  getEvents() {
    return {
      'edge:mouseenter': 'setAllItemStates',
      'edge:mouseleave': 'clearAllItemStates',
    };
  },

  shouldBegin(e: GraphEvent) {
    // 拖拽过程中没有目标节点，只有 x, y 坐标，不点亮
    const edge = e.item as Edge;
    if (edge.getTarget().x) return false;
    return true;
  },

  setAllItemStates(e: GraphEvent) {
    if (!this.shouldBegin(e)) return;
    // 1.激活当前选中的边
    const { graph } = this;
    const edge = e.item as Edge;
    graph.setItemState(edge, 'active', true);

    // 2. 激活边关联的 sourceNode 与 targetNode
    graph.setItemState(edge.getTarget(), 'active', true);
    graph.setItemState(edge.getSource(), 'active', true);
  },

  clearAllItemStates(e: GraphEvent) {
    if (!this.shouldBegin(e)) return;
    // 状态还原
    const { graph } = this;
    const edge = e.item as Edge;
    graph.setItemState(edge, 'active', false);
    graph.setItemState(edge.getTarget(), 'active', false);
    graph.setItemState(edge.getSource(), 'active', false);
  },
};

behaviorManager.register('active-edge', activeEdgeBehavior);
