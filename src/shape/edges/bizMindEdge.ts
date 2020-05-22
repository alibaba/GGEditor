import G6 from '@antv/g6';
import { ItemState } from '@/common/constants';
import { GShape, CustomEdge } from '@/common/interfaces';

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

  setState(name, value, item) {
    const shape: GShape = item.get('keyShape');

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

G6.registerEdge('bizMindEdge', bizMindEdge, 'cubic-horizontal');
