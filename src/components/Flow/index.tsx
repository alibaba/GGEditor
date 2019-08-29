import React from 'react';
import G6 from '@antv/g6';
import { uuid } from '@utils';
import { FLOW_CONTAINER_ID, ShapeClassName, LabelState } from '@common/constants';
import { EditorPrivateContextProps, withEditorPrivateContext } from '@common/context/EditorPrivateContext';
import Graph from '@components/Graph';

import './shape';
import './behavior';
import { GraphEvent } from '@common/interface';

interface FlowProps extends EditorPrivateContextProps {}

interface FlowState {}

class Flow extends React.Component<FlowProps, FlowState> {
  containerId: string;

  constructor(props: FlowProps) {
    super(props);

    this.containerId = `${FLOW_CONTAINER_ID}_${uuid()}`;
  }

  canDragCanvas = () => {
    const { labelState } = this.props;

    return labelState === LabelState.Hide;
  };

  canZoomCanvas = () => {
    const { labelState } = this.props;

    return labelState === LabelState.Hide;
  };

  canDragNode = ({ target }: GraphEvent) => {
    return target && target.get('className') !== ShapeClassName.Anchor;
  };

  parseData = data => {
    const { nodes, edges } = data;

    [...nodes, ...edges].forEach(item => {
      const { id } = item;

      if (id) {
        return;
      }

      item.id = uuid();
    });
  };

  initGraph = (width: number, height: number) => {
    const { containerId } = this;
    this.graph = new G6.Graph({
      container: containerId,
      width,
      height,
      modes: {
        default: [
          {
            type: 'zoom-canvas',
            shouldUpdate: this.canZoomCanvas,
          },
          'active-edge',
          'align',
          'click-select',
          'drag-add-edge',
          'drag-node',
          'hover-anchor',
          'hover-node',
          'brush-select',
          {
            type: 'drag-canvas',
            shouldBegin: this.canDragCanvas,
            shouldUpdate: this.canDragCanvas,
            shouldEnd: this.canDragCanvas,
          },
        ],
      },
    });

    return this.graph;
  };

  render() {
    const { containerId, parseData, initGraph } = this;

    return <Graph containerId={containerId} parseData={parseData} initGraph={initGraph} {...this.props} />;
  }
}

export default withEditorPrivateContext<FlowProps>(Flow);
