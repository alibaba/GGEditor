import G6 from '@antv/g6';
import { G } from '@antv/g6/types/g';
import { ItemState } from '@/common/constants';
import { CustomEdge } from '@/common/interfaces';

const EDGE_LABEL_CLASS_NAME = 'edge-label';
const EDGE_LABEL_WRAPPER_CLASS_NAME = 'edge-label-wrapper-label';

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
    labelCfg: {
      style: {
        fill: '#000000',
        fontSize: 10,
      },
    },
    stateStyles: {
      [ItemState.HighLight]: {
        stroke: '#5aaaff',
        shadowColor: '#5aaaff',
        shadowBlur: 24,
      },
    },
  },

  afterDraw(model, group) {
    // Draw label wrapper
    group.addShape('rect', {
      className: EDGE_LABEL_WRAPPER_CLASS_NAME,
      attrs: {
        fill: '#e1e5e8',
        radius: 2,
      },
    });

    // Set label zIndex
    group.findByClassName(EDGE_LABEL_CLASS_NAME).set('zIndex', 1);

    // Reorder
    group.sort();
  },

  afterUpdate(model, item) {
    const group = item.getContainer();

    const label = group.findByClassName(EDGE_LABEL_CLASS_NAME);
    const labelWrapper = group.findByClassName(EDGE_LABEL_WRAPPER_CLASS_NAME);

    const { minX, minY, width, height } = label.getBBox();

    // Set label wrapper attributes
    labelWrapper.attr({
      x: minX - 5,
      y: minY - 3,
      width: width + 10,
      height: height + 6,
    });
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
