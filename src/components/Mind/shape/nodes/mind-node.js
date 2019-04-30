import G6 from '@antv/g6';
import Util from '../../util';
import upperFirst from 'lodash/upperFirst';

G6.registerNode('mind-node', {
  draw(cfg, group) {
    this.drawShape(cfg, group);
    if (cfg.label) {
      this.drawLabel(cfg, group);
    }
    this.adjustKeyShape();
    this.adjustTextShape();
    return this.keyShape;
  },

  drawShape(cfg, group) {
    const keyShapeType = this.getKeyShapeType();
    const keyShapeCfg = this[`get${upperFirst(keyShapeType)}Style`]();
    const strategies = {
      rect: () => {
        return group.addShape(keyShapeType, {
          attrs: {
            x: 0,
            y: 0,
            ...Object.assign({}, keyShapeCfg.default, keyShapeCfg[`depth${cfg.depth}`]),
          },
        });
      },
      circle: () => {
        return group.addShape(keyShapeType, {
          attrs: {
            x: 0,
            y: 0,
            ...Object.assign({}, keyShapeCfg.default, keyShapeCfg[`depth${cfg.depth}`]),
          },
        });
      },
    };
    this.keyShape = strategies[keyShapeType]();
    return this.keyShape;
  },

  drawLabel(cfg, group) {
    // 文本样式
    const textCfg = this.getTextStyle();
    // 绘制文本
    this.textShape = group.addShape('text', {
      attrs: {
        text: cfg.label,
        x: 0,
        y: 0,
        ...Object.assign({}, textCfg.default, textCfg[`depth${cfg.depth}`]),
      },
    });
    // 更改文本内容
    const text = this.textShape.attr('text');
    const fontWeight = this.textShape.attr('fontWeight');
    const fontFamily = this.textShape.attr('fontFamily');
    const fontSize = this.textShape.attr('fontSize');
    const fontStyle = this.textShape.attr('fontStyle');
    const fontVariant = this.textShape.attr('fontVariant');
    const font = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize}px ${fontFamily}`;
    this.textShape.attr('text', Util.optimizeMultilineText(text, font, this.getMaxTextLineWidth()));
  },

  setState(name, value, item) {
    const _self = this;
    const strategies = {
      // 激活时样式
      active: (groupChildren, activeStyle) => {
        groupChildren.map((child) => {
          return child.attr({
            ...activeStyle.active[child.get('type')],
          });
        });
      },
      // 默认样式
      static: (groupChildren) => {
        groupChildren.map((child) => {
          const customStyle = _self[`get${upperFirst(child.get('type'))}Style`]().default;
          return child.attr({
            ...Object.assign({}, child.getDefaultAttrs(), customStyle),
          });
        });
      },
      // 选中样式
      selected: () => {
      },
    };

    const group = item.getContainer();
    // 获取group中所有子图项
    const groupChildren = group.get('children');

    strategies[name](groupChildren, this.getCustomStatesStyle());
  },

  // 提供给开发者
  getCustomStatesStyle() {
    return {
      active: {
        rect: {
          fill: '#facbda',
          stroke: 'blue',
          lineWidth: 3,
        },
        text: {
          fontSize: 16,
          weight: 'bold',
        },
      },
    };
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
    if (this.getKeyShapeType() === 'rect') {
      this.textShape.attr('x', this.keyShape.attr('width') / 2);
      this.textShape.attr('y', this.keyShape.attr('height') / 2);
    }
  },
  getRectStyle() {
    return {
      default: {
        width: 80,
        height: 40,
        fill: '#fff',
        stroke: '#000',
        radius: 5,
      },
      depth0: {
        fill: '#419ee0',
        stroke: '#4156e0',
        radius: 20,
      },
      depth1: {
        fill: '#eaeaea',
        stroke: '#ccc',
      },
    };
  },
  getCircleStyle() {
    return {
      default: {
        r: 50,
        stroke: '#ccc',
        fill: '#dadada',
      },
      depth0: {
        stroke: '#000',
      },
    };
  },
  getTextStyle() {
    return {
      default: {
        fill: '#000',
        fontSize: 12,
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontVariant: 'normal',
        textAlign: 'center',
        textBaseline: 'middle',
      },
      depth0: {
        fontSize: 20,
        fill: '#fff',
      },
      depth1: {
        fill: '#00bcd4',
      },
    };
  },
  getKeyShapeType() {
    // G中定义的shape，但不支持text
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
