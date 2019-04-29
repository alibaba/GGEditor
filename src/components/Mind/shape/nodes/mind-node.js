import G6 from '@antv/g6';
import Util from '../../util';

G6.registerNode('mind-node', {
  draw(cfg, group) {
    this.drawShape(cfg, group);
    if (cfg.data.label) {
      this.drawLabel(cfg, group);
    }
    this.adjustKeyShape();
    this.adjustTextShape();
    return this.keyShape;
  },
  drawShape(cfg, group) {
    const shapeCfg = this.getShapeStyle();
    this.keyShape = group.addShape(this.getNodeShape(), {
      attrs: {
        x: 0,
        y: 0,
        ...Object.assign({}, shapeCfg.default, shapeCfg[cfg.depth]),
      },
    });
    return this.keyShape;
  },
  drawLabel(cfg, group) {
    // 展示文本
    const text = Util.getLabelTextByTextLineWidth(cfg.data.label, this.getMaxTextLineWidth());
    // 绘制文本
    this.textShape = group.addShape('text', {
      attrs: {
        text,
        ...this.getTextStyle(),
      },
    });
  },
  adjustKeyShape() {
    const padding = this.getPadding();
    const originWidth = this.keyShape.attr('width');
    const originHeight = this.keyShape.attr('height');
    const [textWidth, textHeight] = [this.getTextSize().width, this.getTextSize().height];
    if (originHeight < textHeight) {
      this.keyShape.attr('height', textHeight + 2 * padding[0]);
    }
    if (originWidth < textWidth) {
      this.keyShape.attr('width', textWidth + 2 * padding[1]);
    }
  },
  adjustTextShape() {
    this.textShape.attr('x', this.keyShape.attr('width') / 2);
    this.textShape.attr('y', this.keyShape.attr('height') / 2);
  },
  getShapeStyle() {
    return {
      default: {
        width: 80,
        height: 40,
        fill: '#fff',
        stroke: '#000',
        radius: 5,
      },
      0: {
        fill: '#419ee0',
        stroke: '#4156e0',
        radius: 20,
      },
      1: {
        fill: '#eaeaea',
        stroke: '#ccc',
      },
    };
  },
  getTextStyle() {
    return {
      fill: '#000',
      fontSize: 12,
      fontWeight: 'normal',
      x: 40,
      y: 20,
      textAlign: 'center',
      textBaseline: 'middle',
    };
  },
  getNodeShape() {
    return 'rect';
  },
  getMaxTextLineWidth() {
    return 80;
  },
  getTextSize() {
    return {
      width: this.textShape.getBBox().width,
      height: this.textShape.getBBox().height,
    };
  },
  getPadding() {
    return [5, 5];
  },
  getAnchorPoints() {
    return [
      [0, 0.5],
      [1, 0.5],
    ];
  },
});
