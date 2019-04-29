import React from 'react';
import G6 from '@antv/g6';
import Hierarchy from '@antv/hierarchy';
import { MIND_CONTAINER_ID } from '@common/constants';
import { uuid, recursiveTraversal } from '@utils';
import Graph from '@components/Graph';
import './shape';

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
      layout: (data) => {
        return Hierarchy.dendrogram(data, {
          direction: 'H',
          nodeSep: 50,
          rankSep: 100,
        });
      },
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
