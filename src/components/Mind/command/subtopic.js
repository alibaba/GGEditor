import commandManager from '@common/CommandManager';

commandManager.register({
  name: 'subtopic',

  config: {
    isEnableExec() {
      const { graph } = this.editor;

      const selectedNode = graph.findAllByState('node', 'selected')[0];

      return selectedNode;
    },

    exec() {
      const { graph } = this.editor;
      const { insertNodeId, selectedNode } = this;

      graph.addChild({
        id: insertNodeId,
        label: '新建结点',
      }, selectedNode);
    },
  },

  extend: 'topic',
});
