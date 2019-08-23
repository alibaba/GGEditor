import G6 from '@antv/g6';
import { GraphEvent } from '@common/interface';

G6.registerBehavior('hover-node', {
  getEvents() {
    return {
      'node:mouseenter': 'onEnterNode',
      'node:mouseleave': 'onLeaveNode',
    };
  },
  onEnterNode(e: GraphEvent) {
    const graph = this.graph;
    const node = e.item;
    if (!this.shouldBegin(e)) return;
    graph.setItemState(node, 'active', true);
  },
  onLeaveNode(e: GraphEvent) {
    const graph = this.graph;
    const node = e.item;
    graph.setItemState(node, 'active', false);
  },
});
