import G6 from '@antv/g6';

G6.registerNode('mind-node', {
  shapeType: 'rect',
  draw(cfg, group) {
    console.log(cfg)
    const keyShape = this.drawShape(cfg, group);
    if (cfg.data.label) {
      this.drawLabel(cfg, group);
    }
    return keyShape;
  },
  drawShape(cfg, group) {
    const {shapeType} = this;
    const shapeCfg = this.getShapeStyle();
    // root node
    if (cfg.isRoot()) {
      return group.addShape(shapeType, {
        attrs: Object.assign({
          fill: '#587EF7',
          stroke: '#587EF7',
        }, shapeCfg),
      });
    }
    return group.addShape(shapeType, {
      attrs: Object.assign({
        fill: '#fff',
        stroke: '#dadada',
      }, shapeCfg),
    });
  },
  getShapeStyle() {
    return {
      x: 0,
      y: 0,
      width: 80,
      height: 40,
    };
  },
  drawLabel(cfg, group) {
    // 绘制文本
    return group.addShape('text', {
      attrs: {
        text: cfg.data.label,
        x: 40,
        y: 20,
        fill: '#000',
        textAlign: 'center',
        textBaseline: 'middle',
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
