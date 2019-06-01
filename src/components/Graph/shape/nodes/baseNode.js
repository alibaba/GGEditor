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
    customShapes.map((shapeCfg) => {
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
    const labelCfg = this[`get${upperFirst(SHAPE_CLASSNAME_LABEL)}Style`]({ model });
    // draw label
    this.labelShape = group.addShape('text', {
      className: SHAPE_CLASSNAME_LABEL,
      attrs: {
        text: model.label,
        x: 0,
        y: 0,
        ...labelCfg,
        // textBaseline is always middle, for the sake of adjusting position
        textBaseline: 'middle',
      },
    });
    // change text content according to text line width
    const {
      text,
      fontWeight,
      fontFamily,
      fontSize,
      fontStyle,
      fontVariant,
    } = this.labelShape.attr();
    const font = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize}px ${fontFamily}`;
    this.labelShape.attr('text',
      Util.optimizeMultilineText(text, font, this.getMaxTextLineWidth()));
  },

  setState(name, value, item) {
    // get current item's all states <Array>
    const statesArr = item.getStates();

    const group = item.getContainer();
    const itemStates = Util.itemStates.call(this, { item, group });

    if (statesArr.length === 0) {
      itemStates.staticState();
    } else {
      itemStates[statesArr[statesArr.length - 1]]();
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
    const width = Math.min(paddingArr[3], keyShapeHeight) * 0.6;
    return {
      x: keyShapeWidth * 0.08,
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
        keyShape: {
          fill: '#acbdfa',
          stroke: 'blue',
          lineWidth: 3,
        },
        [SHAPE_CLASSNAME_LABEL]: {
          fill: 'red',
        },
        [SHAPE_CLASSNAME_COLLAPSE_EXPAND_BUTTON]: {
          fill: '#acbdfa',
        },
        myRect: {
          fill: '#ccc',
        },
      },
      selected: {
        keyShape: {
          stroke: 'red',
          lineWidth: 3,
        },
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
  [`get${upperFirst(SHAPE_CLASSNAME_LABEL)}Style`]({ model }) {
    const base = {
      fill: '#000',
      fontSize: 12,
      fontWeight: 'normal',
      fontStyle: 'normal',
      fontVariant: 'normal',
      textAlign: 'left',
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
