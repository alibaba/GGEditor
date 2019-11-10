import G6 from '@antv/g6';
import { ShapeClassName } from '@/common/constants';
import { handleAnchor } from './anchor';
import '../../../Graph/shape/nodes/bizNode';

G6.registerNode(
  'bizFlowNode',
  {
    handleAnchor,
    update(nextModel, item) {
      const group = item.getContainer();
      // repaint anchor
      const anchor = group.findByClassName(ShapeClassName.Anchor);
      if (anchor) {
        anchor.remove();
      }
      // repaint label
      let label = group.findByClassName(ShapeClassName.Label);
      label.remove();
      label = this.drawLabel(nextModel, group);
      this.adjustPosition({ item, group });
    },
    [`get${ShapeClassName.KeyShape}defaultStyle`]() {
      return {
        stroke: '#dadada',
        fill: '#fff',
        radius: 5,
      };
    },
    setState(name, value, item) {
      this.setStateStyle(item);
      this.handleAnchor(name, value, item);
    },
    getAnchorPoints() {
      return [[0, 0.5], [1, 0.5], [0.5, 1], [0.5, 0]];
    },
  },
  'biz-node',
);
