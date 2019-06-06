import G6 from '@antv/g6';
import {
  SHAPE_CLASSNAME_LABEL,
  SHAPE_CLASSNAME_KEYSHAPE,
  SHPAE_CLASSNAME_ANCHOR,
} from '@common/constants';
import { drawAnchor, handleAnchor } from '../anchor';
import '../../../Graph/shape/nodes/bizNode';

G6.registerNode('biz-flow-node', {
  drawAnchor,
  handleAnchor,
  update(nextModel, item) {
    const group = item.getContainer();
    // repaint anchor
    const anchor = group.findByClassName(SHPAE_CLASSNAME_ANCHOR);
    if (anchor) {
      anchor.remove();
    }
    // repaint label
    let label = group.findByClassName(SHAPE_CLASSNAME_LABEL);
    label.remove();
    label = this.drawLabel(nextModel, group);
    this.adjustPosition({ item, group });
    this.drawAnchor(nextModel, group);
  },
  [`get${SHAPE_CLASSNAME_KEYSHAPE}defaultStyle`]() {
    return {
      stroke: '#dadada',
      fill: '#fff',
      radius: 5,
    };
  },
  setState(name, value, item) {
    this.setStateStyle(item);
    this.handleAnchor(name, value, item, 'flow');
  },
  getAnchorPoints() {
    return [[0, 0.5], [1, 0.5], [0.5, 1], [0.5, 0]];
  },
}, 'biz-node');
