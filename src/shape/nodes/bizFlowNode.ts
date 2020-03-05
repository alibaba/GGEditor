import G6 from '@antv/g6';
import { ItemState } from '@/common/constants';
import { Node, CustomNode } from '@/common/interfaces';
import { handleAnchor } from './anchor';

const bizFlowNode: CustomNode = {
  handleAnchor,

  beforeSetState(name: ItemState, value: boolean, item: Node) {
    this.handleAnchor.call(this, name, value, item);
  },
};

G6.registerNode('bizFlowNode', {}, 'bizNode');
