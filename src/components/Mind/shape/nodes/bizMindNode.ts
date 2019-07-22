import G6 from '@antv/g6';
import { ShapeClassName } from '@common/constants';
import Util from '@components/Graph/shape/nodes/util';
import '@components/Graph/shape/nodes/bizNode';
import { Group, NodeModel, NodeRegisterOption } from "@common/interface";
import { bizOption } from "@components/Graph/shape/nodes/bizNode";

export interface MindNodeModel extends NodeModel {
  isRoot?: boolean;
  collapsed?:boolean;
  children: MindNodeModel[];
}

export interface BizMindNodeOptions extends NodeRegisterOption<MindNodeModel> {

  drawExpandOrCollapseButton: (model: MindNodeModel, group: Group) => any;

  getExpandButtonConfig: () => object;

  getCollapseButtonConfig: () => object;

  /** other customized function  */
  [propName: string]: Function;
}

const options: BizMindNodeOptions = {
  ...bizOption,
  /**
   * main draw method
   * */
  /*draw(model, group) {
    this.drawWrapper(model, group);
    const keyShape = this.drawKeyShape(model, group);
    this.drawLabel(model, group);
    this.drawAppendix(model, group);
    this.drawExpandOrCollapseButton(model, group);
    return keyShape;
  },

  update(nextModel, item) {
    const group = item.getContainer();
    let label = group.findByClassName(ShapeClassName.Label);
    let button = group.findByClassName(ShapeClassName.CollapseExpandButton);
    // repaint label
    label.remove();
    label = this.drawLabel(nextModel, group);
    // adjust position
    this.adjustPosition({ model: nextModel, group });
    // repaint button
    if (button) {
      button.remove();
    }
    if (nextModel.children && nextModel.children.length > 0 && !nextModel.isRoot) {
      button = this.drawExpandOrCollapseButton(nextModel, group);
    }
  },

  drawExpandOrCollapseButton(model, group) {
    const keyShape = group.findByClassName(ShapeClassName.KeyShape);
    const expandAttr = this.getExpandButtonConfig();
    const collapseAttr = this.getCollapseButtonConfig();
    if (model.collapsed) {
      const { path, width, height, offset } = expandAttr as any;
      const button = group.addShape('path', {
        className: ShapeClassName.CollapseExpandButton,
        attrs: {
          path,
          ...this[`get${ShapeClassName.CollapseExpandButton}defaultStyle`](),
        },
      });
      button.translate(model.x < 0 ? -keyShape.attr('width') / 2 - width - offset : keyShape.attr('width') / 2 + offset, -height / 2);
      return button;
    }
    const { path, width, height, offset } = collapseAttr as any;
    const button = group.addShape('path', {
      className: ShapeClassName.CollapseExpandButton,
      attrs: {
        path,
        ...this[`get${ShapeClassName.CollapseExpandButton}defaultStyle`](),
      },
    });
    button.translate(model.x < 0 ? -keyShape.attr('width') / 2 - width - offset : keyShape.attr('width') / 2 + offset, -height / 2);
    return button;
  },

  /!**
   * following methods can be overridden by advice
   * *!/

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

  [`get${ShapeClassName.CollapseExpandButton}defaultStyle`]() {
    return {
      stroke: '#000',
      fill: '#fff',
    };
  },*/
};


G6.registerNode('mind-node', options, 'biz-node');
