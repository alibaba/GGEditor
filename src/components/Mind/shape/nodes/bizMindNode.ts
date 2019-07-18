import G6 from '@antv/g6';
import {
  SHAPE_CLASSNAME_LABEL,
  SHAPE_CLASSNAME_COLLAPSE_EXPAND_BUTTON,
  SHAPE_CLASSNAME_KEYSHAPE,
} from '@common/constants';
import Util from '@components/Graph/shape/nodes/util';
import '@components/Graph/shape/nodes/bizNode';
import { MindModel } from "@components/Mind/interface";

export interface BizNodeOptions {
  draw: (model: MindModel, group: any) => any;

  update: (nextModel: MindModel, item: any) => void;

  drawExpandOrCollapseButton: (model: any, group: any) => any;

  getExpandButtonConfig: () => object;

  getCollapseButtonConfig: () => object;

  /** other customized function  */
  [propName: string]: Function;
}

const options: BizNodeOptions = {
  /**
   * main draw method
   * */
  draw(model, group) {
    this.drawWrapper(model, group);
    const keyShape = this.drawKeyShape(model, group);
    this.drawLabel(model, group);
    this.drawAppendix(model, group);
    this.drawExpandOrCollapseButton(model, group);
    return keyShape;
  },

  update(nextModel, item) {
    const group = item.getContainer();
    let label = group.findByClassName(SHAPE_CLASSNAME_LABEL);
    let button = group.findByClassName(SHAPE_CLASSNAME_COLLAPSE_EXPAND_BUTTON);
    // repaint label
    label.remove();
    label = this.drawLabel(nextModel, group);
    // adjust position
    this.adjustPosition({ model: nextModel, item, group });
    // repaint button
    if (button) {
      button.remove();
    }
    if (nextModel.children && nextModel.children.length > 0 && !nextModel.isRoot) {
      button = this.drawExpandOrCollapseButton(nextModel, group);
    }
  },

  drawExpandOrCollapseButton(model, group) {
    const keyShape = group.findByClassName(SHAPE_CLASSNAME_KEYSHAPE);
    const expandAttr = this.getExpandButtonConfig();
    const collapseAttr = this.getCollapseButtonConfig();
    if (model.collapsed) {
      const { path, width, height, offset } = expandAttr;
      const button = group.addShape('path', {
        className: SHAPE_CLASSNAME_COLLAPSE_EXPAND_BUTTON,
        attrs: {
          path,
          ...this[`get${ SHAPE_CLASSNAME_COLLAPSE_EXPAND_BUTTON }defaultStyle`](),
        },
      });
      button.translate(model.x < 0 ? -keyShape.attr('width') / 2 - width - offset : keyShape.attr('width') / 2 + offset, -height / 2);
      return button;
    }
    const { path, width, height, offset } = collapseAttr;
    const button = group.addShape('path', {
      className: SHAPE_CLASSNAME_COLLAPSE_EXPAND_BUTTON,
      attrs: {
        path,
        ...this[`get${ SHAPE_CLASSNAME_COLLAPSE_EXPAND_BUTTON }defaultStyle`](),
      },
    });
    button.translate(model.x < 0 ? -keyShape.attr('width') / 2 - width - offset : keyShape.attr('width') / 2 + offset, -height / 2);
    return button;
  },

  /**
   * following methods can be overridden by advice
   * */

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

  [`get${ SHAPE_CLASSNAME_COLLAPSE_EXPAND_BUTTON }defaultStyle`]() {
    return {
      stroke: '#000',
      fill: '#fff',
    };
  },
};


G6.registerNode('mind-node', options, 'biz-node');
