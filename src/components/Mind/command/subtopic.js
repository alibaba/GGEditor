import commandManager from '@common/CommandManager';

commandManager.register({
  name: 'subtopic',

  config: {
    canExecute(graph) {
      return this.getSelectedNode(graph);
    },

    execute(graph) {
      const { model } = this.params;

      graph.addChild(model, this.getSelectedNode(graph));
    },
  },

  extend: 'topic',
});
