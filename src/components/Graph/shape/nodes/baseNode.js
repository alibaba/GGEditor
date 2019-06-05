/*
import G6 from '@antv/g6';
import { NODE_MAX_TEXT_LINE_WIDTH, SHAPE_CLASSNAME_LABEL } from '@common/constants';
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
  getCustomStatesStyle() {
    return {
      active: {
        keyShape: {
          fill: '#acbdfa',
          stroke: 'blue',
          lineWidth: 3,
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
    return base;
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
*/
