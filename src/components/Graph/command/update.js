import { pick } from '@utils';
import commandManager from '@common/CommandManager';

commandManager.register({
  name: 'update',

  config: {
    params: {
      id: '',
      originModel: {},
      updateModel: {},
    },

    canExecute(graph) {
      const selectedNodes = this.getSelectedNodes(graph);

      return selectedNodes.length && selectedNodes.length === 1;
    },

    init(graph) {
      const { id, updateModel } = this.params;

      const updatePaths = Object.keys(updateModel);
      const originModel = pick(graph.findById(id).getModel(), updatePaths);

      this.params.originModel = originModel;
    },

    execute(graph) {
      const { id, updateModel } = this.params;

      graph.update(id, updateModel);
    },

    undo(graph) {
      const { id, originModel } = this.params;

      graph.update(id, originModel);
    },
  },

  extend: 'base',
});
