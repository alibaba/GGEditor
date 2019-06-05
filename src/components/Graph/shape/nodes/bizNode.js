import G6 from '@antv/g6';
import {
  SHAPE_CLASSNAME_LABEL,
  SHAPE_CLASSNAME_KEYSHAPE,
  NODE_MAX_TEXT_LINE_WIDTH,
} from '@common/constants';
import Util from './util';

G6.registerNode('biz-node', {
  labelPosition: 'center',

  afterDraw(model, group) {

  },

  update(nextModel, item) {
    const group = item.getContainer();
    const label = group.findByClassName(SHAPE_CLASSNAME_LABEL);
    const keyShape = group.findByClassName(SHAPE_CLASSNAME_KEYSHAPE);
    this.adjustPosition({ label, keyShape, nextModel, group });
  },

  adjustPosition({ label, keyShape, nextModel, group }) {
    // redraw label according to maxLineWidth
    const newLabel = this.redrawLabel({ label, nextModel, group });

    const { width: textWidth, height: textHeight } = this.getLabelSize(newLabel);
    const initialStyle = this.getShapeStyle(nextModel);
    const [keyShapeWidth, keyShapeHeight] = [textWidth + 10, textHeight + 10];
    keyShape.attr('width', keyShapeWidth);
    keyShape.attr('height', keyShapeHeight);
    keyShape.attr({
      ...initialStyle,
      height: keyShapeHeight,
      width: keyShapeWidth,
      x: 0 - keyShapeWidth / 2,
      y: 0 - keyShapeHeight / 2,
    });
  },

  setState(stateName, value, item) {
    /* const allChildren = item.getContainer().get('children');
    allChildren.map((shape, index) => {
      // onlyt support keyshape now
      const initialStyle = item.get('originStyle');
      // get customized state style for current shape
      const stateStyle = this.getCustomStatesStyle({ stateName, item });
      // if no style set for this shape under current style, do nothing
      if (!stateStyle) {
        return shape;
      }
      if (value) { // if set state,
        shape.attr(stateStyle);
      } else { // if unset state
        // if stateStyle includes attrs that initialStyle doesn't have, reset them
        Util.each(stateStyle, (val, attr) => {
          if (!initialStyle[attr]) {
            initialStyle[attr] = null;
          }
        });
        shape.attr(initialStyle);
      }
    }); */
    const shape = item.get('keyShape');
    if (!shape) {
      return;
    }
    const stateStyle = this.getCustomStatesStyle({ stateName, item });
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

  getCustomStatesStyle({ stateName, item }) {
    G6.Global.nodeStateStyle.active = {
      fill: '#acbdfa',
      stroke: 'blue',
      lineWidth: 3,
    };
    G6.Global.nodeStateStyle.selected = {
      stroke: 'red',
      lineWidth: 3,
    };
    return item.getStateStyle(stateName);
  },

  redrawLabel({ label, nextModel, group }) {
    label.remove();
    const newLabel = this.drawLabel(nextModel, group);
    newLabel.set('className', SHAPE_CLASSNAME_LABEL);
    const labelCfg = nextModel.labelCfg || {};
    const labelStyle = this.getLabelStyle(nextModel, labelCfg);
    newLabel.attr(labelStyle);
    const {
      fontWeight,
      fontFamily,
      fontSize,
      fontStyle,
      fontVariant,
    } = newLabel.attr();
    const font = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize}px ${fontFamily}`;
    newLabel.attr('text',
      Util.optimizeMultilineText(nextModel.label, font, this.getMaxTextLineWidth()));
    return newLabel;
  },

  getLabelSize(labelShape) {
    return {
      width: labelShape.getBBox().width,
      height: labelShape.getBBox().height,
    };
  },
  getMaxTextLineWidth() {
    return NODE_MAX_TEXT_LINE_WIDTH;
  },
}, 'rect');
