import G6 from '@antv/g6';
import { ItemState } from '../../../common/constants';
import { Item, CustomBehavior } from '../../../common/interface';

interface HoverItemBehavior extends CustomBehavior {
  /** 处理鼠标进入 */
  handleItemMouseenter({ item }: { item: Item }): void;
  /** 处理鼠标移出 */
  handleItemMouseleave({ item }: { item: Item }): void;
}

const hoverItemBehavior = {
  getEvents() {
    return {
      'node:mouseenter': 'handleItemMouseenter',
      'edge:mouseenter': 'handleItemMouseenter',
      'node:mouseleave': 'handleItemMouseleave',
      'edge:mouseleave': 'handleItemMouseleave',
    };
  },

  handleItemMouseenter({ item }) {
    const { graph } = this;

    graph.setItemState(item, ItemState.Active, true);
  },

  handleItemMouseleave({ item }) {
    const { graph } = this;

    graph.setItemState(item, ItemState.Active, false);
  },
} as HoverItemBehavior;

G6.registerBehavior('hover-item', hoverItemBehavior);
