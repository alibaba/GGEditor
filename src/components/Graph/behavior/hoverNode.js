import G6 from '@antv/g6';
import { ITEM_STATE_ACTIVE } from '@common/constants';

G6.registerBehavior('hover-node', {
  getEvents() {
    return {
      'node:mouseenter': 'handleNodeMouseenter',
      'node:mouseleave': 'handleNodeMouseleave',
    };
  },

  handleNodeMouseenter({ item }) {
    const { graph } = this;

    graph.setItemState(item, ITEM_STATE_ACTIVE, true);
  },

  handleNodeMouseleave({ item }) {
    const { graph } = this;

    graph.setItemState(item, ITEM_STATE_ACTIVE, false);
  },
});
