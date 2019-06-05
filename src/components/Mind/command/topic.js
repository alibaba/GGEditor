import commandManager from '@common/CommandManager';
import { uuid } from '@utils';
import { NODE_DEFAULT_LABEL } from '@common/constants';

commandManager.register({
  name: 'topic',

  config: {
    params: {
      id: '',
      model: {},
    },

    canExecute(graph) {
      const selectedNodes = this.getSelectedNodes(graph);

      return selectedNodes.length && selectedNodes.length === 1 && selectedNodes[0].get('parent');
    },

    init(graph) {
      if (this.params.id) {
        return;
      }

      const selectedNode = this.getSelectedNodes(graph)[0];

      this.params = {
        id: selectedNode.get('id'),
        model: {
          id: uuid(),
          label: NODE_DEFAULT_LABEL,
        },
      };
    },

    execute(graph) {
      const { id, model } = this.params;

      const parent = graph.findById(id).get('parent');

      graph.addChild(model, parent);

      this.setSelectedNode(graph, model.id);
    },

    undo(graph) {
      const { id, model } = this.params;

      this.setSelectedNode(graph, id);

      graph.removeChild(model.id);
    },

    shortcuts: [
      'Enter',
    ],
  },

  extend: 'base',
});
