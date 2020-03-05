import G6 from '@antv/g6';
import { GGroup, Node, NodeModel, CustomNode } from '@/common/interfaces';
import { getNodeSide, getFoldButtonPath, getUnfoldButtonPath } from '../utils';

export const FOLD_BUTTON_CLASS_NAME = 'node-fold-button';
export const UNFOLD_BUTTON_CLASS_NAME = 'node-unfold-button';

const bizMindNode: CustomNode = {
  afterDraw(model, group) {
    this.drawButton(model, group);
  },

  afterUpdate(model, item) {
    const group = item.getContainer();

    this.drawButton(model, group);
    this.adjustButton(model, item);
  },

  drawButton(model: NodeModel, group: GGroup) {
    const { children, collapsed } = model;

    [FOLD_BUTTON_CLASS_NAME, UNFOLD_BUTTON_CLASS_NAME].forEach(className => {
      const shape = group.findByClassName(className);

      if (shape) {
        shape.destroy();
      }
    });

    if (!children || !children.length) {
      return;
    }

    if (!collapsed) {
      group.addShape('path', {
        className: FOLD_BUTTON_CLASS_NAME,
        attrs: {
          path: getFoldButtonPath(),
          fill: '#ffffff',
          stroke: '#ccc1d8',
        },
      });
    } else {
      group.addShape('path', {
        className: UNFOLD_BUTTON_CLASS_NAME,
        attrs: {
          path: getUnfoldButtonPath(),
          fill: '#ffffff',
          stroke: '#ccc1d8',
        },
      });
    }
  },

  adjustButton(model: NodeModel, item: Node) {
    const { children, collapsed } = model;

    if (!children || !children.length) {
      return;
    }

    const group = item.getContainer();
    const shape = group.findByClassName(!collapsed ? FOLD_BUTTON_CLASS_NAME : UNFOLD_BUTTON_CLASS_NAME);

    const [width, height] = this.getSize(model);

    const x = getNodeSide(item) === 'left' ? -24 : width + 10;
    const y = height / 2 - 9;

    shape.translate(x, y);
  },

  getAnchorPoints() {
    return [
      [0, 0.5],
      [1, 0.5],
    ];
  },
};

G6.registerNode('bizMindNode', bizMindNode, 'bizNode');
