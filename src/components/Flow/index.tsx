import React from 'react';
import G6 from '@antv/g6';
import { uuid } from '@utils';
import { FLOW_CONTAINER_ID, ShapeClassName, LabelState } from '@common/constants';
import { EditorPrivateContextProps, withEditorPrivateContext } from '@common/context/EditorPrivateContext';
import Graph from '@components/Graph';

import './shape';
import './behavior';

interface FlowProps extends EditorPrivateContextProps {}

interface FlowState {}

class Flow extends React.Component<FlowProps, FlowState> {
  constructor(props) {
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

  canDragNode = ({ target }) => {
    return target && target.get('className') !== ShapeClassName.Anchor;
  };

  parseData = ({ data }) => {
    const { nodes, edges } = data;

    [...nodes, ...edges].forEach(item => {
      const { id } = item;

      if (id) {
        return;
      }

      item.id = uuid();
    });
  };

  initGraph = ({ width, height }) => {
    const { containerId } = this;

    this.graph = new G6.Graph({
      container: containerId,
      width,
      height,
      modes: {
        default: [
          {
            type: 'drag-canvas',
            shouldBegin: this.canDragCanvas,
            shouldUpdate: this.canDragCanvas,
            shouldEnd: this.canDragCanvas,
          },
          {
            type: 'zoom-canvas',
            shouldUpdate: this.canZoomCanvas,
          },
          'click-item',
          'hover-item',
          'hover-anchor',
          {
            type: 'drag-node',
            shouldBegin: this.canDragNode,
          },
          'drag-add-edge',
          // 'edit-label',
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
