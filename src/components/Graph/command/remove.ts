import { isMind, executeBatch } from '@/utils';
import { ItemType } from '@/common/constants';
import { TreeGraph, MindData, NodeModel, EdgeModel } from '@/common/interfaces';
import { BaseCommand, baseCommand } from '@/components/Graph/command/base';

export interface RemoveCommandParams {
  flow: {
    nodes: {
      [id: string]: NodeModel;
    };
    edges: {
      [id: string]: EdgeModel;
    };
  };
  mind: {
    model: MindData | null;
    parent: string;
  };
}

const removeCommand: BaseCommand<RemoveCommandParams> = {
  ...baseCommand,

  params: {
    flow: {
      nodes: {},
      edges: {},
    },
    mind: {
      model: null,
      parent: '',
    },
  },

  canExecute(graph) {
    const selectedNodes = this.getSelectedNodes(graph);
    const selectedEdges = this.getSelectedEdges(graph);

    return !!(selectedNodes.length || selectedEdges.length);
  },

  init(graph) {
    const selectedNodes = this.getSelectedNodes(graph);
    const selectedEdges = this.getSelectedEdges(graph);

    if (isMind(graph)) {
      const selectedNode = selectedNodes[0];
      const selectedNodeModel = selectedNode.getModel() as MindData;

      const selectedNodeParent = selectedNode.get('parent');
      const selectedNodeParentModel = selectedNodeParent ? selectedNodeParent.getModel() : {};

      this.params.mind = {
        model: selectedNodeModel,
        parent: selectedNodeParentModel.id,
      };
    } else {
      const { nodes, edges } = this.params.flow;

      selectedNodes.forEach(node => {
        const nodeModel = node.getModel() as NodeModel;
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
    }
  },

  execute(graph) {
    if (isMind(graph)) {
      const { model } = this.params.mind;

      if (!model) {
        return;
      }

      (graph as TreeGraph).removeChild(model.id);
    } else {
      const { nodes, edges } = this.params.flow;

      executeBatch(graph, () => {
        [...Object.keys(nodes), ...Object.keys(edges)].forEach(id => {
          graph.removeItem(id);
        });
      });
    }
  },

  undo(graph) {
    if (isMind(graph)) {
      const { model, parent } = this.params.mind;

      if (!model) {
        return;
      }

      (graph as TreeGraph).addChild(model, parent);
    } else {
      const { nodes, edges } = this.params.flow;

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
    }
  },

  shortcuts: ['Delete', 'Backspace'],
};

export default removeCommand;
