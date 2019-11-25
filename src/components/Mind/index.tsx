import React from 'react';
import omit from 'lodash/omit';
import merge from 'lodash/merge';
import G6 from '@antv/g6';
import { guid, recursiveTraversal } from '@/utils';
import { MIND_CONTAINER_ID, ShapeClassName, GraphType, PlugSignal } from '@/common/constants';
import { MindData, GraphReactEventProps } from '@/common/interfaces';
import behaviorManager from '@/common/behaviorManager';
import Graph from '@/components/Graph';

import './command';
import { UtilCanvasContext } from '../Graph/shape/nodes/util';

interface MindProps extends Partial<GraphReactEventProps> {
  style?: React.CSSProperties;
  className?: string;
  data: MindData;
  graphConfig?: Partial<G6.GraphOptions>;
  customModes?: (mode: string, behaviors: any) => object;
}

interface MindState {}

class Mind extends React.Component<MindProps, MindState> {
  static defaultProps = {
    graphConfig: {},
  };

  graph: G6.Graph | null = null;

  containerId = `${MIND_CONTAINER_ID}_${guid()}`;

  canZoomCanvas = () => {
    const { graph } = this;

    if (!graph) {
      return false;
    }

    return (
      !graph.get(PlugSignal.ShowItemPopover) &&
      !graph.get(PlugSignal.ShowContextMenu) &&
      !graph.get(PlugSignal.ShowEditableLabel)
    );
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

    const modes: any = merge(
      {
        default: {
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
          },
          'zoom-canvas': {
            type: 'zoom-canvas',
            shouldUpdate: this.canZoomCanvas,
          },
        },
      },
      behaviorManager.getRegisteredBehaviors(GraphType.Mind),
    );

    Object.keys(modes).forEach(mode => {
      const behaviors = modes[mode];

      modes[mode] = Object.values(customModes ? customModes(mode, behaviors) : behaviors);
    });

    this.graph = new G6.TreeGraph({
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
        shape: 'bizNode',
      },
      defaultEdge: {
        shape: 'biz-cubic',
      },
      ...graphConfig,
    });

    return this.graph;
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
        {...omit(this.props, ['graphConfig', 'customModes'])}
      />
    );
  }
}

export default Mind;
