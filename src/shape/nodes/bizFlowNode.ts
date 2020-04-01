import G6 from '@antv/g6';
import { CustomNode } from '@/common/interfaces';
import { setAnchorPointsState } from '../common/anchor';

const bizFlowNode: CustomNode = {
  setState(name, value, item) {
    setAnchorPointsState.call(this, name, value, item);
  },

  getAnchorPoints() {
    return [
      [0.5, 0],
      [0.5, 1],
      [0, 0.5],
      [1, 0.5],
    ];
  },
};

G6.registerNode('bizFlowNode', bizFlowNode, 'bizNode');
