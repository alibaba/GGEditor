import commandManager from '@common/CommandManager';
import { uuid } from '@utils';

commandManager.register({
  name: 'add',

  config: {
    params: {
      type: 'node',
      model: {},
    },

    init() {
      const { model } = this.params;

      if (model.id) {
        return;
      }

      model.id = uuid();
    },

    execute(graph) {
      const { type, model } = this.params;

      graph.add(type, model);

      this.setSelectedNode(graph, model.id);
    },

    undo(graph) {
      const { model } = this.params;

      graph.remove(model.id);
    },
  },

  extend: 'base',
});
