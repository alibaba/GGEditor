import G6 from '@antv/g6';
import { ShapeClassName } from '@/common/constants';
import Util from '@/components/Graph/shape/nodes/util';
import '@/components/Graph/shape/nodes/bizNode';
import { G } from '@antv/g6/types/g';
import { MindData, CustomNode } from '@/common/interfaces';
import { bizOption } from '@/components/Graph/shape/nodes/bizNode';

export interface BizMindNodeOptions extends CustomNode<MindData> {
  drawExpandOrCollapseButton: (model: MindData, group: G.Group) => any;
  [props: string]: any;
}

const options: BizMindNodeOptions = {
  ...bizOption,
  /**
   * main draw method
   * */
  draw(model: MindData, group) {
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

  update(model: MindData, item) {
    const group = item.getContainer();

    const button = group.findByClassName(ShapeClassName.CollapseExpandButton);
    let label = group.findByClassName(ShapeClassName.Label);
    // repaint label
    label.remove(false);
    label = this.drawLabel(model, group);

    this.adjustPosition({ group, model });

    if (button) {
      button.remove(false);
      if (model.children && model.children.length > 0 && !model.isRoot) {
        this.drawExpandOrCollapseButton(model, group);
      }
    }
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
        model.x > 0 ? keyShape.attr('width') + offset : -width - offset,
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
      model.x > 0 ? keyShape.attr('width') + offset : -width - offset,
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
