import commandManager from '@common/CommandManager';

commandManager.register({
  name: 'subtopic',

  config: {
    canExecute(graph) {
      return this.getSelectedNodes(graph)[0];
    },

    execute(graph) {
      const { id, model } = this.params;

      const parent = graph.findById(id);

      graph.addChild(model, parent);

      this.setSelectedNode(graph, model.id);
    },

    shortcuts: [
      'Tab',
    ],
  },

  extend: 'topic',
});
