import { isMind, executeBatch } from '@/utils';
import { ItemType } from '@/common/constants';
import { NodeModel, EdgeModel, MindData } from '@/common/interfaces';
import commandManager from '@/common/commandManager';
import { baseCommand, BaseCommand } from '@/components/Graph/command/base';

interface RemoveCommandParams {
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
      const selectedNodeModel = selectedNode.getModel<MindData>();

      const selectedNodeParent = selectedNode.get('parent');
      const selectedNodeParentModel = selectedNodeParent ? selectedNodeParent.getModel() : {};

      this.params.mind = {
        model: selectedNodeModel,
        parent: selectedNodeParentModel.id,
      };
    } else {
      const { nodes, edges } = this.params.flow;

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
    }
  },

  execute(graph) {
    if (isMind(graph)) {
      const { model } = this.params.mind;

      if (!model) {
        return;
      }

      (graph as G6.TreeGraph).removeChild(model.id);
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

      (graph as G6.TreeGraph).addChild(model, parent);
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

commandManager.register('remove', removeCommand);
