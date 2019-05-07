import commandManager from '@common/CommandManager';
import { uuid } from '@utils';
import {
  ITEM_TYPE_NODE,
  ITEM_STATE_SELECTED,
  NODE_DEFAULT_LABEL,
} from '@common/constants';

commandManager.register({
  name: 'topic',

  config: {
    params: {
      id: '',
      model: {},
    },

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

    canExec(graph) {
      const selectedNodes = this.getSelectedNodes(graph);

      return selectedNodes.length && selectedNodes.length === 1 && selectedNodes[0].get('parent');
    },

    init(graph) {
      if (this.params.id) {
        return;
      }

      const selectedNode = this.getSelectedNodes(graph)[0];

      this.params = {
        id: selectedNode.get('id'),
        model: {
          id: uuid(),
          label: NODE_DEFAULT_LABEL,
        },
      };
    },

    exec(graph) {
      const { id, model } = this.params;

      const parent = graph.findById(id).get('parent');

      graph.addChild(model, parent);

      this.setSelectedNode(graph, model.id);
    },

    back(graph) {
      const { id, model } = this.params;

      this.setSelectedNode(graph, id);

      graph.removeChild(model.id);
    },
  },
});
