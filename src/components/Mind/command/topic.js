import commandManager from '@common/CommandManager';
import { uuid } from '@utils';

commandManager.register({
  name: 'topic',

  config: {
    insertNodeId: '',
    selectedNode: null,

    isEnableExec(graph) {
      const selectedNode = graph.findAllByState('node', 'selected')[0];

      return selectedNode && selectedNode.get('parent');
    },

    init(graph) {
      const { insertNodeId, selectedNode } = this;

      if (!insertNodeId) {
        this.insertNodeId = uuid();
      }

      if (!selectedNode) {
        this.selectedNode = graph.findAllByState('node', 'selected')[0];
      }
    },

    exec(graph) {
      const { insertNodeId, selectedNode } = this;

      const parentNode = selectedNode.get('parent');

      graph.addChild({
        id: insertNodeId,
        label: '新建结点',
      }, parentNode);
    },

    back(graph) {
      const { insertNodeId } = this;

      graph.removeChild(insertNodeId);
    },
  },
});
