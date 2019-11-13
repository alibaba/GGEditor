import React from 'react';
import pick from 'lodash/pick';
import G6 from '@antv/g6';
import { guid } from '@/utils';
import { FLOW_CONTAINER_ID, GraphType, PlugSignal } from '@/common/constants';
import { FlowData, FlowAndMindCommonProps } from '@/common/interfaces';
import { withEditorPrivateContext } from '@/common/context/EditorPrivateContext';
import behaviorManager from '@/common/behaviorManager';
import Graph from '@/components/Graph';

import './shape';
import './behavior';

interface FlowProps extends FlowAndMindCommonProps {
  data: FlowData;
}

interface FlowState {}

class Flow extends React.Component<FlowProps, FlowState> {
  static defaultProps = {
    graphConfig: {},
  };

  containerId = `${FLOW_CONTAINER_ID}_${guid()}`;

  canZoomCanvas = () => {
    const { graph } = this.props;

    return (
      !graph.get(PlugSignal.ShowItemPopover) &&
      !graph.get(PlugSignal.ShowContextMenu) &&
      !graph.get(PlugSignal.ShowEditableLabel)
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

    const customBehaviors: any = {};

    Object.keys(behaviorManager.behaviors).forEach(name => {
      const behavior = behaviorManager.behaviors[name];

      if (!behavior.graphType || behavior.graphType === GraphType.Flow) {
        customBehaviors[name] = name;
      }
    });

    const modes: any = {
      default: {
        ...customBehaviors,
        'drag-canvas': {
          type: 'drag-canvas',
        },
        'zoom-canvas': {
          type: 'zoom-canvas',
          shouldUpdate: this.canZoomCanvas,
        },
        'recall-edge': 'recall-edge',
      },
    };

    Object.keys(modes).forEach(mode => {
      const behaviors = modes[mode];

      modes[mode] = Object.values(customModes ? customModes(mode, behaviors) : behaviors);
    });

    return new G6.Graph({
      container: containerId,
      width,
      height,
      modes,
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

export default withEditorPrivateContext<FlowProps>(Flow);
