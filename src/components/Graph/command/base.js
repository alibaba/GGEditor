import {
  ITEM_TYPE_NODE,
  ItemState,
} from '@common/constants';
import commandManager from '@common/CommandManager';

commandManager.register({
  name: 'base',

  config: {
    getSelectedNodes(graph) {
      return graph.findAllByState(ITEM_TYPE_NODE, ItemState.Selected);
    },

    setSelectedNode(graph, id) {
      const autoPaint = graph.get('autoPaint');

      graph.setAutoPaint(false);

      const selectedNodes = this.getSelectedNodes(graph);

      selectedNodes.forEach((node) => {
        if (node.hasState(ItemState.Selected)) {
          graph.setItemState(node, ItemState.Selected, false);
        }
      });

      graph.setItemState(id, ItemState.Selected, true);
      graph.setAutoPaint(autoPaint);
      graph.paint();
    },
  },
});
