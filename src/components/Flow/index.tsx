import React from 'react';
import omit from 'lodash/omit';
import merge from 'lodash/merge';
import G6 from '@antv/g6';
import { guid } from '@/utils';
import global from '@/common/global';
import { FLOW_CONTAINER_ID, GraphType } from '@/common/constants';
import { FlowData, GraphEvent, GraphReactEventProps } from '@/common/interfaces';
import behaviorManager from '@/common/behaviorManager';
import Graph from '@/components/Graph';

import './shape';
import './behavior';

interface FlowProps extends Partial<GraphReactEventProps> {
  style?: React.CSSProperties;
  className?: string;
  data: FlowData;
  graphConfig?: Partial<G6.GraphOptions>;
  customModes?: (mode: string, behaviors: any) => object;
}

interface FlowState {}

class Flow extends React.Component<FlowProps, FlowState> {
  static defaultProps = {
    graphConfig: {},
  };

  graph: G6.Graph | null = null;

  containerId = `${FLOW_CONTAINER_ID}_${guid()}`;

  canDragNode = (e: GraphEvent) => {
    return !['anchor', 'banAnchor'].some(item => item === e.target.get('className'));
  };

  canZoomCanvas = () => {
    const { graph } = this;

    if (!graph) {
      return false;
    }

    return (
      global.itemPopoverState === 'hide' && global.contextMenuState === 'hide' && global.editableLabelState === 'hide'
    );
  };

  parseData = data => {
    const { nodes, edges } = data;

    [...nodes, ...edges].forEach(item => {
      const { id } = item;

      if (id) {
        return;
      }

      item.id = guid();
    });
  };

  initGraph = (width: number, height: number) => {
    const { containerId } = this;
    const { graphConfig, customModes } = this.props;

    const modes: any = merge(
      {
        default: {
          'drag-node': {
            type: 'drag-node',
            enableDelegate: true,
            shouldBegin: this.canDragNode,
          },
          'drag-canvas': {
            type: 'drag-canvas',
          },
          'zoom-canvas': {
            type: 'zoom-canvas',
            shouldUpdate: this.canZoomCanvas,
          },
          'recall-edge': 'recall-edge',
          'brush-select': 'brush-select',
        },
      },
      behaviorManager.getRegisteredBehaviors(GraphType.Flow),
    );

    Object.keys(modes).forEach(mode => {
      const behaviors = modes[mode];

      modes[mode] = Object.values(customModes ? customModes(mode, behaviors) : behaviors);
    });

    this.graph = new G6.Graph({
      container: containerId,
      width,
      height,
      modes,
      ...graphConfig,
    });

    return this.graph;
  };

  render() {
    const { containerId, parseData, initGraph } = this;

    return (
      <Graph
        containerId={containerId}
        parseData={parseData}
        initGraph={initGraph}
        {...omit(this.props, ['graphConfig', 'customModes'])}
      />
    );
  }
}

export default Flow;
