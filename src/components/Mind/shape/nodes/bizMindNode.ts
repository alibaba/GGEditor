import G6 from '@antv/g6';
import { ShapeClassName } from '../../../../common/constants';
import Util from '../../../../components/Graph/shape/nodes/util';
import '../../../../components/Graph/shape/nodes/bizNode';
import { Group, NodeModel, CustomNode } from '../../../../common/interface';
import { bizOption } from '../../../../components/Graph/shape/nodes/bizNode';

export interface MindNodeModel extends NodeModel {
  isRoot?: boolean;
  collapsed?: boolean;
  children: MindNodeModel[];
}

export interface BizMindNodeOptions extends CustomNode {
  drawExpandOrCollapseButton: (model: MindNodeModel, group: Group) => any;
}

const options: BizMindNodeOptions = {
  ...bizOption,
  /**
   * main draw method
   * */
  draw(model, group) {
    this.drawWrapper(model, group);
    const keyShape = this.drawKeyShape(model, group);
    this.drawLabel(model, group);
    this.drawAppendix(model, group);
    if (!model.isRoot) {
      this.drawExpandOrCollapseButton(model, group);
    }
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
    // button width
    const width = 17;
    const offset = this.getOffset(model, group, width);

    if (model.collapsed) {
      const button = group.addShape('path', {
        className: ShapeClassName.CollapseExpandButton,
        attrs: {
          path: Util.getExpandButtonPath({ width, height: width }),
          ...this[`get${ShapeClassName.CollapseExpandButton}defaultStyle`](),
          cursor: 'pointer',
        },
      });
      button.translate(
        model.x < 0 ? -keyShape.attr('width') / 2 - width - offset : keyShape.attr('width') / 2 + offset,
        -width / 2,
      );
      return button;
    }

    const button = group.addShape('path', {
      className: ShapeClassName.CollapseExpandButton,
      attrs: {
        path: Util.getCollapseButtonPath({ width, height: width }),
        ...this[`get${ShapeClassName.CollapseExpandButton}defaultStyle`](),
        cursor: 'pointer',
      },
    });
    button.translate(
      model.x < 0 ? -keyShape.attr('width') / 2 - width - offset : keyShape.attr('width') / 2 + offset,
      -width / 2,
    );
    return button;
  },

  getOffset(model: MindNodeModel, group: Group, width: number) {
    /**
     * button need to place in the middle of parent & child node
     * 1. children nodes have identical x position
     * 2. all nodes have identical width
     * 3. model.x model.y refer to the center point of a node
     * */
    if (!model.children || model.children.length < 0) {
      return;
    }

    const childModel = model.children[0];
    const nodeWidth = group.getBBox().width;

    // left side
    if (model.x < 0) {
      return (model.x - childModel.x - nodeWidth) / 2 - width / 2;
    }

    // right side
    else {
      return (childModel.x - model.x - nodeWidth) / 2 - width / 2;
    }
  },

  /**
   * following methods can be overridden by advice
   * */

  [`get${ShapeClassName.CollapseExpandButton}defaultStyle`]() {
    return {
      stroke: '#000',
      fill: '#fff',
    };
  },
};

G6.registerNode('mind-node', options, 'biz-node');
