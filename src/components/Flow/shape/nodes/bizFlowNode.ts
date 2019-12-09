import { ItemState } from '@/common/constants';
import G6 from '@antv/g6';
import { handleAnchor } from './anchor';

G6.registerNode(
  'bizFlowNode',
  {
    handleAnchor,

    beforeSetState(name: ItemState, value: boolean, item: G6.Node) {
      // 根据状态绘制锚点
      this.handleAnchor.call(this, name, value, item);
    },
  },
  'bizNode',
);
