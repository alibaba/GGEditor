import React from 'react';
import G6 from '@antv/g6';
import { uuid, recursiveTraversal } from '@utils';
import { MIND_CONTAINER_ID } from '@common/constants';
import Graph from '@components/Graph';

import './shape';
import './command';

class Mind extends React.Component {
  constructor(props) {
    super(props);

    this.containerId = `${MIND_CONTAINER_ID}_${uuid()}`;
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
        default: ['drag-canvas', 'click-select'],
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

export default Mind;
