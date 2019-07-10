import React from 'react';
import G6 from '@antv/g6';
import { uuid, recursiveTraversal } from '@utils';
import {
  MIND_CONTAINER_ID,
  SHAPE_CLASSNAME_COLLAPSE_EXPAND_BUTTON,
  LabelState,
} from '@common/constants';
import withEditorContext from '@common/EditorContext/withEditorContext';
import Graph from '@components/Graph';

import './shape/nodes/bizMindNode';
import './command';

class Mind extends React.Component {
  constructor(props) {
    super(props);

    this.containerId = `${MIND_CONTAINER_ID}_${uuid()}`;
  }

  canDragCanvas = () => {
    const { labelState } = this.props;

    return labelState === LabelState.Hide;
  }

  canZoomCanvas = () => {
    const { labelState } = this.props;

    return labelState === LabelState.Hide;
  }

  canCollapseExpand = ({ target }) => {
    return target && target.get('className') === SHAPE_CLASSNAME_COLLAPSE_EXPAND_BUTTON;
  }

  parseData = ({ data }) => {
    recursiveTraversal(data, (item) => {
      const { id } = item;

      if (id) {
        return;
      }

      item.id = uuid();
    });
  }

  initGraph = ({ width, height }) => {
    const { containerId } = this;

    this.graph = new G6.TreeGraph({
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
          {
            type: 'collapse-expand',
            shouldBegin: this.canCollapseExpand,
          },
        ],
      },
      layout: {
        type: 'mindmap',
        direction: 'H',
        getHGap() {
          return 70;
        },
      },
      animate: false,
      defaultNode: {
        shape: 'mind-node',
      },
      defaultEdge: {
        shape: 'cubic-horizontal',
      },
    });

    return this.graph;
  }

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

export default withEditorContext(Mind, ({ labelState }) => ({
  labelState,
}));
