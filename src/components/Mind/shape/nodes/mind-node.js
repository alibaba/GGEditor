import G6 from '@antv/g6';

G6.registerNode('mind-node', {
  shapeType: 'rect',
  draw(cfg, group) {
    if (cfg.data.label) {
      this.drawLabel(cfg, group);
    }
    return this.drawShape(cfg, group);
  },
  drawShape(cfg, group) {
    const { shapeType } = this;
    return group.addShape(shapeType, {
      attrs: {
        x: 0,
        y: 0,
        stroke: '#ccc',
        width: 80,
        height: 40,
        fill: '#fff',
      },
    });
  },
  drawLabel(cfg, group) {
    // 绘制文本
    return group.addShape('text', {
      attrs: {
        text: cfg.data.label,
        x: 0,
        y: 0,
      },
    });
  },
  getAnchorPoints() {
    return [
      [0, 0.5],
      [1, 0.5],
    ];
  },
});
