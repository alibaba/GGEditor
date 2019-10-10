import G6 from '@antv/g6';
import { ShapeClassName } from '@common/constants';
import Util from '@components/Graph/shape/nodes/util';
import '@components/Graph/shape/nodes/bizNode';
import { Group, NodeModel, CustomNode } from '@common/interface';
import { bizOption } from '@components/Graph/shape/nodes/bizNode';

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

    if (this.showMenuIcon()) {
      this.drawAppendix(model, group);
    }

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
    button && button.remove();
    if (nextModel.children && nextModel.children.length > 0 && !nextModel.isRoot) {
      button = this.drawExpandOrCollapseButton(nextModel, group);
    }

    // set item state according to model
    this.setItemState(nextModel, item);
  },

  drawExpandOrCollapseButton(model, group) {
    const keyShape = group.findByClassName(ShapeClassName.KeyShape);
    // button width
    const width = 17;
    // button & item distance
    const offset = 5;

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
        model.x > 0 ? keyShape.attr('width') + offset : -keyShape.attr('width') - width - offset,
        keyShape.attr('height') / 2 - width / 2,
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
      model.x > 0 ? keyShape.attr('width') + offset : -keyShape.attr('width') - width - offset,
      keyShape.attr('height') / 2 - width / 2,
    );
    return button;
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
