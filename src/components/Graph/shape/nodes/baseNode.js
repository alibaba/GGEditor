import G6 from '@antv/g6';
import {
  NODE_MAX_TEXT_LINE_WIDTH,
  SHAPE_CLASSNAME_LABEL,
  SHAPE_CLASSNAME_COLLAPSE_EXPAND_BUTTON,
} from '@common/constants';
import Util from '../util';
import { upperFirst } from '@utils';

G6.registerNode('base-node', {
  keyShape: null,
  labelShape: null,
  draw(model, group) {
    this.drawKeyShape(model, group);
    this.drawLabel(model, group);
    this.adjustKeyShape();
    this.adjustLabelShape();
    return this.keyShape;
  },
  drawKeyShape(model, group) {
    const keyShapeType = this.getKeyShapeType();
    const keyShapeCfg = this.getKeyShapeStyle({ model });
    this.keyShape = group.addShape(keyShapeType, {
      className: 'keyShape',
      attrs: {
        x: 0,
        y: 0,
        ...keyShapeCfg,
      },
    });
    return this.keyShape;
  },
  afterDraw(model, group) {
    // model.isRoot has not implement yet
    if (model.children && model.children.length > 0 && !model.isRoot) {
      this.drawExpandOrCollapseButton({ model, group });
    }
    const customShapes = this.getCustomShapes();
    customShapes.map(shapeCfg => {
      group.addShape(shapeCfg.type, {
        className: shapeCfg.className,
        attrs: {
          ...this[`get${upperFirst(shapeCfg.className)}Style`](),
        },
      });
    });
  },
  drawLabel(model, group) {
    // get label styles
    const labelCfg = this.getLabelStyle({ model });
    // draw label
    this.labelShape = group.addShape('text', {
      className: SHAPE_CLASSNAME_LABEL,
      attrs: {
        text: model.label,
        x: 0,
        y: 0,
        ...labelCfg,
      },
    });
    // change text content according to text line width
    const text = this.labelShape.attr('text');
    const fontWeight = this.labelShape.attr('fontWeight');
    const fontFamily = this.labelShape.attr('fontFamily');
    const fontSize = this.labelShape.attr('fontSize');
    const fontStyle = this.labelShape.attr('fontStyle');
    const fontVariant = this.labelShape.attr('fontVariant');
    const font = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize}px ${fontFamily}`;
    this.labelShape.attr('text',
      Util.optimizeMultilineText(text, font, this.getMaxTextLineWidth()));
  },

  setState(name, value, item) {
    const customStatesStyle = this.getCustomStatesStyle();
    Object.keys(customStatesStyle).forEach(stateName => {
      G6.Global.nodeStateStyle[stateName] = customStatesStyle[stateName];
    });
    const shape = item.get('keyShape');
    if (!shape) {
      return;
    }
    const stateStyle = item.getStateStyle(name);
    if (value) { // 如果设置状态,在原本状态上叠加绘图属性
      shape.attr(stateStyle);
    } else { // 取消状态时重置所有状态，依次叠加仍有的状态
      const style = item.getCurrentStatesStyle();
      // 如果默认状态下没有设置attr，在某状态下设置了，需要重置到没有设置的状态
      Util.each(stateStyle, (val, attr) => {
        if (!style[attr]) {
          style[attr] = null;
        }
      });
      shape.attr(style);
    }
  },
  drawExpandOrCollapseButton({ model, group }) {
    const className = SHAPE_CLASSNAME_COLLAPSE_EXPAND_BUTTON;
    const keyShape = group.findByClassName('keyShape');
    const expandAttr = this.getExpandButtonConfig();
    const collapseAttr = this.getCollapseButtonConfig();
    if (model.collapsed) {
      const { path, width, height, offset } = expandAttr;
      const button = group.addShape('path', {
        className,
        attrs: {
          path,
          ...this.getEcButtonStyle(),
        },
      });
      button.translate(model.x < 0 ? -width - offset : keyShape.attr('width') + offset,
        (keyShape.attr('height') - height) / 2);
    } else {
      const { path, width, height, offset } = collapseAttr;
      const button = group.addShape('path', {
        className,
        attrs: {
          path,
          ...this.getEcButtonStyle(),
        },
      });
      button.translate(model.x < 0 ? -width - offset : keyShape.attr('width') + offset,
        (keyShape.attr('height') - height) / 2);
    }
  },
  // adapt to rectangular
  adjustKeyShape({ updatedKeyShape, updatedLabelShape } = {}) {
    const keyShape = updatedKeyShape || this.keyShape;
    const paddings = this.getTextPadding();
    const [textWidth, textHeight] = [
      this.getLabelSize({ updatedLabelShape }).width,
      this.getLabelSize({ updatedLabelShape }).height];
    keyShape.attr('height', textHeight + paddings[0] + paddings[2]);
    keyShape.attr('width', textWidth + paddings[1] + paddings[3]);
  },
  adjustLabelShape({ updatedKeyShape, updatedLabelShape } = {}) {
    const labelShape = updatedLabelShape || this.labelShape;
    const keyShape = updatedKeyShape || this.keyShape;
    const paddings = this.getTextPadding();
    if (this.getKeyShapeType() === 'rect') {
      labelShape.attr('x', paddings[3]);
      labelShape.attr('y', paddings[0] + labelShape.getBBox().height / 2);
    }
  },
  getLabelSize({ updatedLabelShape }) {
    const labelShape = updatedLabelShape || this.labelShape;
    return {
      width: labelShape.getBBox().width,
      height: labelShape.getBBox().height,
    };
  },

  // functions that can be overridden by advice
  getCustomShapes() {
    return [
      {
        type: 'rect',
        className: 'myRect',
      },
    ];
  },
  getMyRectStyle() {
    const keyShapeWidth = this.keyShape.attr('width');
    const keyShapeHeight = this.keyShape.attr('height');
    const paddingArr = this.getTextPadding();
    const width = Math.min(paddingArr[3], keyShapeHeight) * 0.8;
    return {
      x: keyShapeWidth * 0.1,
      y: (keyShapeHeight - width) / 2,
      width,
      height: width,
      radius: 5,
      fill: '#58bfc1',
    };
  },
  getExpandButtonConfig() {
    const width = 17;
    const height = 17;
    const offset = 3;
    return {
      path: Util.getExpandButtonPath({ width, height }),
      width,
      height,
      offset,
    };
  },
  getCollapseButtonConfig() {
    const width = 17;
    const height = 17;
    const offset = 3;
    return {
      path: Util.getCollapseButtonPath({ width, height }),
      width,
      height,
      offset,
    };
  },
  getCustomStatesStyle() {
    return {
      active: {
        fill: '#1890ff',
        stroke: 'green',
      },
      selected: {
        stroke: 'red',
      },
    };
  },
  getKeyShapeStyle({ model }) {
    const base = {
      width: 120,
      height: 80,
      fill: '#fff',
      stroke: '#000',
      radius: 5,
    };
    if (model.depth === 0) {
      const scopedStyle = {
        fill: '#419ee0',
        stroke: '#4156e0',
        radius: 20,
      };
      return { ...base, ...scopedStyle };
    }
    if (model.depth === 1) {
      const scopedStyle = {
        fill: '#eaeaea',
        stroke: '#ccc',
      };
      return { ...base, ...scopedStyle };
    }

    return base;
  },
  getLabelStyle({ model }) {
    const base = {
      fill: '#000',
      fontSize: 12,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontVariant: 'normal',
      textAlign: 'left',
      textBaseline: 'middle',
    };
    if (model.depth === 0) {
      const scopedStyle = {
        fontSize: 20,
        fill: '#fff',
      };
      return { ...base, ...scopedStyle };
    }
    if (model.depth === 1) {
      const scopedStyle = {
        fontSize: 20,
        fill: '#123',
      };
      return { ...base, ...scopedStyle };
    }

    return base;
  },
  getEcButtonStyle() {
    return {
      stroke: '#000',
      fill: '#fff',
    };
  },
  getKeyShapeType() {
    // shape defined in 'G', not support 'text'
    return 'rect';
  },
  getMaxTextLineWidth() {
    return NODE_MAX_TEXT_LINE_WIDTH;
  },
  getTextPadding() {
    return [5, 20, 5, 40];
  },
  getAnchorPoints() {
    return [
      [0, 0.5],
      [1, 0.5],
    ];
  },
});
