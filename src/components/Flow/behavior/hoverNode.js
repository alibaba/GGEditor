import G6 from '@antv/g6';

G6.registerBehavior('hoverNode', {
  getEvents() {
    return {
      'node:mouseenter': 'onEnterNode',
      'node:mouseleave': 'onLeaveNode',
    };
  },
  onEnterNode(e) {
    const graph = this.graph;
    const node = e.item;
    graph.setItemState(node, 'active', true);
  },
  onLeaveNode(e) {
    const graph = this.graph;
    const node = e.item;
    graph.setItemState(node, 'active', false);
  },
});
