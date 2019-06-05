import G6 from '@antv/g6';
import { drawAnchor, handleAnchor } from './anchor';

G6.registerNode('startNode', {
  drawAnchor,
  handleAnchor,
  draw(cfg, group) {
    this.keyShape = group.addShape('circle', {
      attrs: {
        x: 0,
        y: 0,
        r: 15,
        stroke: '#000',
        fill: '#000',
      },
    });
    return this.keyShape;
  },
  setState(name, value, item) {
    this.handleAnchor(name, value, item);
  },

  getAnchorPoints() {
    return [[0.5, 1]];
  },
});
