import G6 from '@antv/g6';
import { CustomNode } from '@/common/interfaces';

const bizMindNode: CustomNode = {
  getAnchorPoints() {
    return [
      [0, 0.5],
      [1, 0.5],
    ];
  },
};

G6.registerNode('bizMindNode', bizMindNode, 'bizNode');
