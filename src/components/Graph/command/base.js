import {
  ITEM_TYPE_NODE,
  ITEM_STATE_SELECTED,
} from '@common/constants';
import commandManager from '@common/CommandManager';

commandManager.register({
  name: 'base',

  config: {
    getSelectedNodes(graph) {
      return graph.findAllByState(ITEM_TYPE_NODE, ITEM_STATE_SELECTED);
    },

    setSelectedNode(graph, id) {
      const autoPaint = graph.get('autoPaint');

      graph.setAutoPaint(false);

      const selectedNodes = this.getSelectedNodes(graph);

      selectedNodes.forEach((node) => {
        if (node.hasState(ITEM_STATE_SELECTED)) {
          graph.setItemState(node, ITEM_STATE_SELECTED, false);
        }
      });

      graph.setItemState(id, ITEM_STATE_SELECTED, true);
      graph.setAutoPaint(autoPaint);
      graph.paint();
    },
  },
});
