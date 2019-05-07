import commandManager from '@common/CommandManager';
import { uuid } from '@utils';

commandManager.register({
  name: 'topic',

  config: {
    params: {
      id: '',
      model: {},
    },

    getSelectedNode(graph) {
      return graph.findAllByState('node', 'selected')[0];
    },

    canExecute(graph) {
      const node = this.getSelectedNode(graph);

      return node && node.get('parent');
    },

    beforeExecute() {
      if (this.params.id) {
        return;
      }

      const id = uuid();

      this.params = {
        id,
        model: {
          id,
          label: '新建结点',
        },
      };
    },

    execute(graph) {
      const { model } = this.params;

      graph.addChild(model, this.getSelectedNode(graph).get('parent'));
    },

    back(graph) {
      const { id } = this.params;

      graph.removeChild(id);
    },
  },
});
