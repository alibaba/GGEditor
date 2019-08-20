import { NodeModel, EdgeModel } from '@common/interface';
import commandManager from '@common/commandManager';
import { executeBatch } from '@utils';
import { baseCommand, BaseCommand } from '@components/Graph/command/base';
import { ItemType } from '@common/constants';

interface RemoveCommandParams {
  nodes: {
    [id: string]: NodeModel;
  };
  edges: {
    [id: string]: EdgeModel;
  };
}

const removeCommand: BaseCommand<RemoveCommandParams> = {
  ...baseCommand,

  params: {
    nodes: {},
    edges: {},
  },

  execute(graph) {
    const { nodes, edges } = this.params;

    const selectedNodes = this.getSelectedNodes(graph);
    const selectedEdges = this.getSelectedEdges(graph);

    selectedNodes.forEach(node => {
      const nodeModel = node.getModel();
      const nodeEdges = node.getEdges();

      nodes[nodeModel.id] = nodeModel;

      nodeEdges.forEach(edge => {
        const edgeModel = edge.getModel();

        edges[edgeModel.id] = edgeModel;
      });
    });

    selectedEdges.forEach(edge => {
      const edgeModel = edge.getModel();

      edges[edgeModel.id] = edgeModel;
    });

    executeBatch(graph, () => {
      [...Object.keys(nodes), ...Object.keys(edges)].forEach(id => {
        graph.removeItem(id);
      });
    });
  },

  undo(graph) {
    const { nodes, edges } = this.params;

    executeBatch(graph, () => {
      Object.keys(nodes).forEach(id => {
        const model = nodes[id];

        graph.addItem(ItemType.Node, model);
      });

      Object.keys(edges).forEach(id => {
        const model = edges[id];

        graph.addItem(ItemType.Edge, model);
      });
    });
  },

  shortcuts: ['Delete', 'Backspace'],
};

commandManager.register('remove', removeCommand);
