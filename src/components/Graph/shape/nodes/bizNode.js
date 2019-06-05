import G6 from '@antv/g6';
import {
  NODE_MAX_TEXT_LINE_WIDTH,
  SHAPE_CLASSNAME_LABEL,
  SHAPE_CLASSNAME_KEYSHAPE,
} from '@common/constants';
import Util from '../util';
import { upperFirst } from '@utils';

G6.registerNode('base-node', {
  draw(model, group) {
    this.drawKeyShape();
    this.drawIcon();
    this.drawLabel();
  },
  update(nextModel, item) {
    this.adjustPosition(item);
  },
  setState(name, value, item) {
    this.setStateStyle(item);
    this.adjustPosition(item);
  },
  adjustPosition(item) {
    const group = item.getContainer();
    const { keyShape, label, icon } = group.get('children');
    this.adjustKeyShape();
    this.adjustLabel();
    this.adjustIcon();
  },
  adjustKeyShape() {

  },
  adjustLabel() {

  },
  adjustIcon() {

  },
  setStateStyle(item) {
    const statesArr = item.getStates();
    const group = item.getContainer();
    const allChildren = group.get('children');

    allChildren.forEach((shape) => {
      const className = shape.get('className');

      let statesStyle = {};
      statesArr.forEach((stateName) => {
        statesStyle = {
          ...statesStyle,
          ...this[`get${className}${stateName}Style`](),
        };
      });

      shape.attr({
        ...this[`get${className}DefaultStyle`],
        ...statesStyle,
      });
    });
  },
  [`get${SHAPE_CLASSNAME_KEYSHAPE}defaultStyle`]() {
    return {};
  },
  [`get${SHAPE_CLASSNAME_KEYSHAPE}activeStyle`]() {
    return {};
  },
  [`get${SHAPE_CLASSNAME_KEYSHAPE}selectedStyle`]() {
    return {};
  },
});
