import commandManager from '@common/CommandManager';

commandManager.register({
  name: 'subtopic',

  config: {
    canExec(graph) {
      return this.getSelectedNodes(graph)[0];
    },

    exec(graph) {
      const { id, model } = this.params;

      const parent = graph.findById(id);

      graph.addChild(model, parent);

      this.setSelectedNode(graph, model.id);
    },
  },

  extend: 'topic',
});
