import G6 from '@antv/g6';
import { ItemState } from '@common/constants';

G6.registerBehavior('hover-node', {
  getEvents() {
    return {
      'node:mouseenter': 'handleNodeMouseenter',
      'node:mouseleave': 'handleNodeMouseleave',
    };
  },

  handleNodeMouseenter({ item }) {
    const { graph } = this;

    graph.setItemState(item, ItemState.Active, true);
  },

  handleNodeMouseleave({ item }) {
    const { graph } = this;

    graph.setItemState(item, ItemState.Active, false);
  },
});
