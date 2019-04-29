import G6 from '@antv/g6';

G6.registerEdge('mind-edge', {
  getEdetal(targetModel) {
    if (targetModel.children && targetModel.children.length > 0 && !targetModel.collapsed) {
      return targetModel.hierarchy === 2 ? 24 : 18;
    }
    return 0;
  },
  draw(cfg, group) {
    return group.addShape('path', {
      attrs: {
        path: this.getPath(cfg),
        stroke: '#ccc',
        lineWidth: cfg.size,
      },
    });
  },
  getPath(cfg) {
    const points = [cfg.startPoint, cfg.endPoint];
    const source = cfg.sourceNode;
    const target = cfg.targetNode;
    const sourceBox = source.get('bboxCache');
    const targetBox = target.get('bboxCache');
    const targetModel = target.get('model');
    let controlPointDetal1 = 14;
    let controlPointDetal2 = 4;
    if (targetModel.hierarchy === 2) {
      controlPointDetal1 = 66;
      controlPointDetal2 = 30;
    }
    if (points[0].y === points[1].y) {
      const sDetal = targetModel.hierarchy === 3 ? 24 : 18;
      const eDetal = this.getEdetal(targetModel);
      if (sourceBox.centerX < targetBox.centerX) {
        return [
          ['M', points[0].x + sDetal, points[0].y],
          ['L', targetBox.maxX + eDetal, targetBox.maxY],
        ];
      }
      return [
        ['M', points[0].x + 2, points[0].y],
        ['L', targetBox.minX - eDetal, targetBox.maxY],
      ];
    }
    if (targetModel.hierarchy >= 3) {
      const sDetal = targetModel.hierarchy === 3 ? 24 : 18;
      const eDetal = this.getEdetal(targetModel);
      if (sourceBox.centerX < targetBox.centerX) {
        const dpx = points[0].x + sDetal;
        return [
          ['M', points[0].x, points[0].y],
          ['M', dpx, points[0].y],
          ['C',
            dpx + controlPointDetal2,
            points[0].y,
            targetBox.minX - controlPointDetal1,
            targetBox.maxY,
            targetBox.minX,
            targetBox.maxY],
          ['L', targetBox.maxX + eDetal, targetBox.maxY],
        ];
      }
      const dpx = points[0].x - sDetal;
      return [
        ['M', points[0].x, points[0].y],
        ['M', dpx, points[0].y],
        ['C',
          dpx - controlPointDetal2,
          points[0].y,
          targetBox.maxX + controlPointDetal1,
          targetBox.maxY,
          targetBox.maxX,
          targetBox.maxY],
        ['L', targetBox.minX - eDetal, targetBox.maxY],
      ];
    }
    const eDetal = this.getEdetal(targetModel);
    if (sourceBox.centerX < targetBox.centerX) {
      return [
        ['M', points[0].x, points[0].y],
        ['C',
          points[0].x + controlPointDetal2,
          points[0].y,
          targetBox.minX - controlPointDetal1,
          targetBox.maxY,
          targetBox.minX,
          targetBox.maxY],
        ['L', targetBox.maxX + eDetal, targetBox.maxY],
      ];
    }
    return [
      ['M', points[0].x, points[0].y],
      ['C',
        points[0].x - controlPointDetal2,
        points[0].y,
        targetBox.maxX + controlPointDetal1,
        targetBox.maxY,
        targetBox.maxX,
        targetBox.maxY],
      ['L', targetBox.minX - eDetal, targetBox.maxY],
    ];
  },
});
