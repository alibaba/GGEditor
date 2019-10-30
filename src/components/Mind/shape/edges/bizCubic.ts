import G6 from '@antv/g6';
import { Edge, EdgeModel, Group, Shape } from '@/common/interface';
import { ItemState } from '@/common/constants';

const commonStyle = {
  stroke: '#d8d8d8',
  lineWidth: 2,
};

const options = {
  afterDraw(model: EdgeModel, group: Group) {
    const edgeShape: Shape = group.get('children')[0];

    if (!edgeShape) return;

    edgeShape.attr({ ...commonStyle });
  },

  afterUpdate(model: EdgeModel, item: Edge) {
    item.getKeyShape().attr({ ...commonStyle });
  },

  setState(name: ItemState, value: boolean, edge: Edge): void {
    const shape: Shape = edge.getContainer().get('children')[0];
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
