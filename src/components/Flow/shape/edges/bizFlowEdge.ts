import G6 from '@antv/g6';
import { G } from '@antv/g6/types/g';
import { ItemState } from '@/common/constants';
import { CustomEdge } from '@/common/interfaces';

const bizFlowEdge: CustomEdge = {
  options: {
    style: {
      stroke: '#ccc1d8',
      lineWidth: 2,
      shadowColor: null,
      shadowBlur: 0,
      radius: 8,
      offset: 24,
      startArrow: {
        path: [['M', 3, 0], ['A', 3, 3, 0, 1, 1, -3, 0], ['A', 3, 3, 0, 1, 1, 3, 0], ['Z']],
        d: 6,
      },
      endArrow: {
        path: [['M', 3, 0], ['L', -3, -3], ['L', -3, 3], ['Z']],
        d: 6,
      },
    },
    labelCfg: {},
    stateStyles: {
      [ItemState.HighLight]: {
        stroke: '#5aaaff',
        shadowColor: '#5aaaff',
        shadowBlur: 24,
      },
    },
  },

  setState(name, value, item) {
    const shape: G.Shape = item.get('keyShape');

    if (!shape) {
      return;
    }

    const { style, stateStyles } = this.options;

    const stateStyle = stateStyles[name];

    if (!stateStyle) {
      return;
    }

    if (value) {
      shape.attr({
        ...style,
        ...stateStyle,
      });
    } else {
      shape.attr(style);
    }
  },
};

G6.registerEdge('bizFlowEdge', bizFlowEdge, 'polyline');
