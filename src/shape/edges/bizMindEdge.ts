import G6 from '@antv/g6';
import { ItemState } from '@/common/constants';
import { CustomEdge } from '@/common/interfaces';

const bizMindEdge: CustomEdge = {
  options: {
    style: {
      stroke: '#ccc1d8',
      lineWidth: 2,
      shadowColor: null,
      shadowBlur: 0,
    },
    stateStyles: {
      [ItemState.Selected]: {
        stroke: '#5aaaff',
        shadowColor: '#5aaaff',
        shadowBlur: 24,
      },
      [ItemState.HighLight]: {
        stroke: '#5aaaff',
        shadowColor: '#5aaaff',
        shadowBlur: 24,
      },
    },
  },
};

G6.registerEdge('bizMindEdge', bizMindEdge, 'cubic-horizontal');
