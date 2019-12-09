import G6 from '@antv/g6';

G6.registerNode(
  'bizMindNode',
  {
    /* 锚点 */
    getAnchorPoints(model) {
      if (Array.isArray(model.anchorPoints)) {
        return model.anchorPoints;
      }
      return [
        [0, 0.5],
        [1, 0.5],
      ];
    },
  },
  'bizNode',
);
