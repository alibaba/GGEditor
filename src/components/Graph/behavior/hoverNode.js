import G6 from '@antv/g6';

G6.registerBehavior('hover-node', {
  getEvents() {
    return {
      'node:mouseenter': 'handleMouseenter',
      'node:mouseleave': 'handleMouseleave',
    };
  },

  handleMouseenter({ item }) {
    const { graph } = this;

    graph.setItemState(item, 'active', true);
  },

  handleMouseleave({ item }) {
    const { graph } = this;

    graph.setItemState(item, 'active', false);
  },
});
