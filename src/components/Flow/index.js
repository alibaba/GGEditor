import React from 'react';
import G6 from '@antv/g6';
import { uuid } from '@utils';
import { FLOW_CONTAINER_ID, LABEL_STATE_HIDE } from '@common/constants';
import withEditorContext from '@common/EditorContext/withEditorContext';
import Graph from '@components/Graph';

import './shape';
import './behavior';

class Flow extends React.Component {
  constructor(props) {
    super(props);

    this.containerId = `${FLOW_CONTAINER_ID}_${uuid()}`;
  }

    canDragCanvas = () => {
      const { labelState } = this.props;

      return labelState === LABEL_STATE_HIDE;
    };

    canZoomCanvas = () => {
      const { labelState } = this.props;

      return labelState === LABEL_STATE_HIDE;
    };

    parseData = ({ data }) => {
      const { nodes, edges } = data;

      [...nodes, ...edges].forEach((item) => {
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
            'click-node',
            'hover-node',
            'edit-label',
            'dragNode',
            'dragAddEdge',
            'hoverAnchor',
          ],
        },
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
          {...this.props}
        />
      );
    }
}

export default withEditorContext(Flow, ({ labelState }) => ({
  labelState,
}));
