import G6 from '@antv/g6';
import { G } from '@antv/g6/types/g';
import { EdgeModel } from '@/common/interfaces';
import { ItemState } from '@/common/constants';

const commonStyle = {
  stroke: '#d8d8d8',
  lineWidth: 2,
};

const options = {
  afterDraw(model: EdgeModel, group: G.Group) {
    const edgeShape: G.Shape = group.get('children')[0];

    if (!edgeShape) return;

    edgeShape.attr({ ...commonStyle });
  },

  afterUpdate(model: EdgeModel, item: G6.Edge) {
    item.getKeyShape().attr({ ...commonStyle });
  },

  setState(name: ItemState, value: boolean, edge: G6.Edge): void {
    const shape: G.Shape = edge.getContainer().get('children')[0];
    const states = edge.getStates();

    if (states.includes(ItemState.HighLight)) {
      edge.toFront();

      shape.attr({
        stroke: '#5AAAFF',
        shadowColor: '#5AAAFF',
        shadowBlur: 5,
      });
    } else {
      shape.attr({
        stroke: '#d8d8d8',
        shadowBlur: 0,
      });
    }
  },
};

G6.registerEdge('biz-cubic', options, 'cubic-horizontal');
