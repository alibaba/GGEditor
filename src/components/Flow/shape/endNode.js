import G6 from '@antv/g6';
import { drawAnchor, handleAnchor } from './anchor';
import globalStyle from '../common/globalStyle';
const { endNodeStyle1, endNodeStyle2 } = globalStyle;

G6.registerNode('endNode', {
  drawAnchor,
  handleAnchor,
  draw(cfg, group) {
    // 外圆
    this.keyShape = group.addShape('circle', {
      attrs: { ...endNodeStyle1 }
    });
    // 内圆
    group.addShape('circle', { attrs: { ...endNodeStyle2 } });

    return this.keyShape;
  },
  setState(name, value, item) {
    this.handleAnchor(name, value, item);
  },

  getAnchorPoints() {
    return [[0.5, 0], [1, 0.5], [0.5, 1], [0, 0.5]];
  }
});
