import G6 from '@antv/g6';
import { drawActivedNode } from './activedNode';
import { drawAnchor, handleAnchor } from './anchor';
import globalStyle from '../common/globalStyle';
const { startNodeStyle } = globalStyle;

G6.registerNode('startNode', {
  drawAnchor,
  handleAnchor,
  drawActivedNode,
  draw(cfg, group) {
    // 圆圈
    this.keyShape = group.addShape('circle', {
      attrs: {
        ...startNodeStyle
      }
    });
    return this.keyShape;
  },
  setState(name, value, item) {
    this.handleAnchor(name, value, item);
    this.drawActivedNode(name, value, item);
  },

  getAnchorPoints() {
    return [[0.5, 0], [1, 0.5], [0.5, 1], [0, 0.5]];
  }
});
