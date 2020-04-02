import G6 from '@antv/g6';
import { ItemState } from '@/common/constants';
import { GShape, GGroup, CustomEdge } from '@/common/interfaces';

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
      // startArrow: {
      //   path: 'M 3,0 A 3,3,0,1,1,-3,0 A 3,3,0,1,1,3,0 Z',
      //   d: 7,
      // },
      // endArrow: {
      //   path: 'M 3,0 L -3,-3 L -3,3 Z',
      //   d: 5,
      // },
      endArrow: {
        path: 'M 0,0 L 4,3 L 4,-3 Z',
      },
    },
    labelCfg: {
      style: {
        fill: '#000000',
        fontSize: 10,
      },
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

  createLabelWrapper(group: GGroup) {
    const label = group.findByClassName(EDGE_LABEL_CLASS_NAME);
    const labelWrapper = group.findByClassName(EDGE_LABEL_WRAPPER_CLASS_NAME);

    if (!label) {
      return;
    }

    if (labelWrapper) {
      return;
    }

    group.addShape('rect', {
      className: EDGE_LABEL_WRAPPER_CLASS_NAME,
      attrs: {
        fill: '#e1e5e8',
        radius: 2,
      },
    });

    label.set('zIndex', 1);

    group.sort();
  },

  updateLabelWrapper(group: GGroup) {
    const label = group.findByClassName(EDGE_LABEL_CLASS_NAME);
    const labelWrapper = group.findByClassName(EDGE_LABEL_WRAPPER_CLASS_NAME);

    if (!label) {
      labelWrapper && labelWrapper.hide();
      return;
    } else {
      labelWrapper && labelWrapper.show();
    }

    if (!labelWrapper) {
      return;
    }

    const { minX, minY, width, height } = label.getBBox();

    labelWrapper.attr({
      x: minX - 5,
      y: minY - 3,
      width: width + 10,
      height: height + 6,
    });
  },

  afterDraw(model, group) {
    this.createLabelWrapper(group);
    this.updateLabelWrapper(group);
  },

  afterUpdate(model, item) {
    const group = item.getContainer();

    this.createLabelWrapper(group);
    this.updateLabelWrapper(group);
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

G6.registerEdge('bizFlowEdge', bizFlowEdge, 'polyline');
