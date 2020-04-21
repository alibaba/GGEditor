import React from 'react';
import omit from 'lodash/omit';
import merge from 'lodash/merge';
import G6 from '@antv/g6';
import { guid, recursiveTraversal } from '@/utils';
import global from '@/common/global';
import { MIND_CONTAINER_ID, GraphType } from '@/common/constants';
import { FOLD_BUTTON_CLASS_NAME, UNFOLD_BUTTON_CLASS_NAME } from '@/shape/nodes/bizMindNode';
import { Graph, GraphOptions, MindData, GraphReactEventProps } from '@/common/interfaces';
import behaviorManager from '@/common/behaviorManager';
import GraphComponent from '@/components/Graph';

import './command';

interface MindProps extends Partial<GraphReactEventProps> {
  style?: React.CSSProperties;
  className?: string;
  data: MindData;
  graphConfig?: Partial<GraphOptions>;
  customModes?: (mode: string, behaviors: any) => object;
}

interface MindState {}

class Mind extends React.Component<MindProps, MindState> {
  static defaultProps = {
    graphConfig: {},
  };

  graph: Graph | null = null;

  containerId = `${MIND_CONTAINER_ID}_${guid()}`;

  canDragOrZoomCanvas = () => {
    const { graph } = this;

    if (!graph) {
      return false;
    }

    return (
      global.plugin.itemPopover.state === 'hide' &&
      global.plugin.contextMenu.state === 'hide' &&
      global.plugin.editableLabel.state === 'hide'
    );
  };

  canCollapseExpand = ({ target }) => {
    return target && [FOLD_BUTTON_CLASS_NAME, UNFOLD_BUTTON_CLASS_NAME].includes(target.get('className'));
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

  initGraph = (width: number, height: number) => {
    const { containerId } = this;
    const { graphConfig, customModes } = this.props;

    const modes: any = merge(behaviorManager.getRegisteredBehaviors(GraphType.Mind), {
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
          shouldBegin: this.canDragOrZoomCanvas,
          shouldUpdate: this.canDragOrZoomCanvas,
        },
        'zoom-canvas': {
          type: 'zoom-canvas',
          shouldUpdate: this.canDragOrZoomCanvas,
        },
      },
    });

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
        getWidth: () => 120,
        getHeight: () => 60,
        getHGap: () => 100,
        getVGap: () => 50,
        getSide: ({ data }) => {
          if (data.side) {
            return data.side;
          }

          return 'right';
        },
      },
      animate: false,
      defaultNode: {
        type: 'bizMindNode',
      },
      defaultEdge: {
        type: 'bizMindEdge',
      },
      ...graphConfig,
    });

    return this.graph;
  };

  render() {
    const { containerId, parseData, initGraph } = this;
    const { data } = this.props;

    return (
      <GraphComponent
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
