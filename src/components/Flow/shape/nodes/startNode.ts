import G6 from '@antv/g6';
import { drawActivedNode } from './activedNode';
import { handleAnchor } from '@/components/Graph/shape/nodes/anchor';
import globalStyle from '../../common/globalStyle';
const { startNodeStyle } = globalStyle;
G6.registerNode('startNode', {
  handleAnchor,
  drawActivedNode,
  draw(cfg, group) {
    // 圆圈
    this.keyShape = group.addShape('circle', {
      attrs: {
        ...startNodeStyle,
      },
    });
    this.keyShape.baseType = 'startNode';
    return this.keyShape;
  },
  stateHandler(name, value, item) {},
  setState(name, value, item) {
    // 根据状态绘制节点选中的样式
    this.drawActivedNode.call(this, name, value, item);
    // 根据状态绘制锚点
    this.handleAnchor.call(this, name, value, item);
    this.stateHandler(name, value, item);
  },
  getAnchorPoints() {
    return [
      [0.5, 0],
      [1, 0.5],
      [0.5, 1],
      [0, 0.5],
    ];
  },
});
