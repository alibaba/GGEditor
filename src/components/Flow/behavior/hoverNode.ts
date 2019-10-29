import { GraphType } from '@/common/constants';
import { Behavior, GraphEvent } from '@/common/interface';
import behaviorManager from '@/common/behaviorManager';

interface HoverNodeBehavior extends Behavior {
  onEnterNode(e: GraphEvent): void;
  onLeaveNode(e: GraphEvent): void;
}

const hoverNode: HoverNodeBehavior = {
  graphType: GraphType.Flow,

  getEvents() {
    return {
      'node:mouseenter': 'onEnterNode',
      'node:mouseleave': 'onLeaveNode',
    };
  },

  onEnterNode(e) {
    const graph = this.graph;
    const node = e.item;
    if (!this.shouldBegin(e)) return;
    graph.setItemState(node, 'active', true);
  },

  onLeaveNode(e) {
    const graph = this.graph;
    const node = e.item;
    graph.setItemState(node, 'active', false);
  },
};

behaviorManager.register('hover-node', hoverNode);
