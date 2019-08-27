import G6 from '@antv/g6';
import { drawActivedNode } from './activedNode';
import { handleAnchor } from './anchor';
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
  update(nextModel, item) {
    const keyShapeSize = keyShape => ({
      width: keyShape.attr('width'),
      height: keyShape.attr('height'),
    });
    this.resetCoordinate({
      keyShapeSize: keyShapeSize(this.keyShape),
      keyShape: this.keyShape,
    });
  },
  setState(name, value, item) {
    this.handleAnchor(name, value, item);
    this.drawActivedNode(name, value, item);
  },
  resetCoordinate({ keyShapeSize, keyShape }) {
    keyShape.attr('x', 0 - keyShapeSize.width / 2);
    keyShape.attr('y', 0 - keyShapeSize.height / 2);
  },
  getAnchorPoints() {
    return [[0.5, 0], [1, 0.5], [0.5, 1], [0, 0.5]];
  },
});
