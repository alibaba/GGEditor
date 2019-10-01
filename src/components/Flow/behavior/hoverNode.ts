import { GraphType } from '@common/constants';
import { GraphEvent } from '@common/interface';
import behaviorManager from '@common/behaviorManager';

behaviorManager.register('hover-node', {
  graphType: GraphType.Flow,
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
