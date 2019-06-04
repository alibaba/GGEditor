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
    newLabel.attr('text', Util.optimizeMultilineText(nextModel.label, font, this.getMaxTextLineWidth()));
    return newLabel
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
