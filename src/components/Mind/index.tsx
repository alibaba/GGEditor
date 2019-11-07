import React from 'react';
import pick from 'lodash/pick';
import G6 from '@antv/g6';
import { guid, recursiveTraversal } from '@/utils';
import { MIND_CONTAINER_ID, ShapeClassName, LabelState, GraphType } from '@/common/constants';
import { MindData, FlowAndMindCommonProps } from '@/common/interfaces';
import { withEditorPrivateContext } from '@/common/context/EditorPrivateContext';
import behaviorManager from '@/common/behaviorManager';
import Graph from '@/components/Graph';

import './shape';
import './command';
import { UtilCanvasContext } from '../Graph/shape/nodes/util';

interface MindProps extends FlowAndMindCommonProps {
  data: MindData;
}

interface MindState {}

class Mind extends React.Component<MindProps, MindState> {
  static defaultProps = {
    graphConfig: {},
  };

  containerId = `${MIND_CONTAINER_ID}_${guid()}`;

  canDragCanvas = () => {
    const { labelState } = this.props;

    return labelState === LabelState.Hide;
  };

  canZoomCanvas = () => {
    const { labelState, contextMenuState, nodePopoverState } = this.props;

    return labelState === LabelState.Hide && !contextMenuState.visible && !nodePopoverState.visible;
  };

  canCollapseExpand = ({ target }) => {
    return target && target.get('className') === ShapeClassName.CollapseExpandButton;
  };

  parseData = data => {
    recursiveTraversal(data, item => {
      const { id } = item;

      if (id) {
        return;
      }

      item.id = guid();
    });
  };

  getHGap(model: MindData) {
    let totalTextWidth = 0;

    if (typeof model.label !== 'string' || !UtilCanvasContext) return 40;

    for (const char of model.label) {
      totalTextWidth += UtilCanvasContext.measureText(char).width;
    }

    // 达到节点最大宽度
    if (totalTextWidth >= 120) return 120;

    // 节点最小宽度
    if (totalTextWidth < 40) return 40;

    return totalTextWidth + 10;
  }

  getVGap(model: MindData) {
    let totalTextWidth = 0;

    if (typeof model.label !== 'string' || !UtilCanvasContext) return 5;

    for (const char of model.label) {
      totalTextWidth += UtilCanvasContext.measureText(char).width;
    }

    // 没有换行
    if (totalTextWidth <= 120) return 5;

    return (totalTextWidth / 120) * 5;
  }

  initGraph = (width: number, height: number) => {
    const { containerId } = this;
    const { graphConfig, customModes } = this.props;

    const customBehaviors: any = {};

    Object.keys(behaviorManager.behaviors).forEach(name => {
      const behavior = behaviorManager.behaviors[name];

      if (!behavior.graphType || behavior.graphType === GraphType.Mind) {
        customBehaviors[name] = name;
      }
    });

    const modes: any = {
      default: {
        ...customBehaviors,
        'click-item': {
          type: 'click-item',
          multiple: false,
        },
        'collapse-expand': {
          type: 'collapse-expand',
          shouldBegin: this.canCollapseExpand,
        },
        'drag-canvas': {
          type: 'drag-canvas',
          shouldBegin: this.canDragCanvas,
          shouldUpdate: this.canDragCanvas,
          shouldEnd: this.canDragCanvas,
        },
        'zoom-canvas': {
          type: 'zoom-canvas',
          shouldUpdate: this.canZoomCanvas,
        },
      },
    };

    Object.keys(modes).forEach(mode => {
      const behaviors = modes[mode];

      modes[mode] = Object.values(customModes ? customModes(mode, behaviors) : behaviors);
    });

    return new G6.TreeGraph({
      container: containerId,
      width,
      height,
      modes,
      layout: {
        type: 'mindmap',
        direction: 'H',
        getHGap: this.getHGap,
        getVGap: this.getVGap,
      },
      animate: false,
      defaultNode: {
        shape: 'mind-node',
      },
      defaultEdge: {
        shape: 'biz-cubic',
      },
      ...graphConfig,
    });
  };

  render() {
    const { containerId, parseData, initGraph } = this;
    const { data } = this.props;

    return (
      <Graph
        containerId={containerId}
        data={data}
        parseData={parseData}
        initGraph={initGraph}
        {...pick(this.props, ['className', 'style'])}
      />
    );
  }
}

export default withEditorPrivateContext<MindProps>(Mind);
