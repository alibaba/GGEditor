import G6 from '@antv/g6';
import {
  ITEM_TYPE_NODE,
  ITEM_STATE_SELECTED,
} from '@common/constants';

G6.registerBehavior('click-node', {
  getDefaultCfg() {
    return {
      multiple: true,
      keyCode: 17,
    };
  },

  getEvents() {
    return {
      'node:click': 'handleNodeClick',
      'canvas:click': 'handleCanvasClick',
      keydown: 'handleKeyDown',
      keyup: 'handleKeyUp',
    };
  },

  getSelectedNodes() {
    return this.graph.findAllByState(ITEM_TYPE_NODE, ITEM_STATE_SELECTED);
  },

  clearSelectedState(shouldUpdate = () => true) {
    const { graph } = this;

    const selectedNodes = this.getSelectedNodes(graph);

    graph.setAutoPaint(false);

    selectedNodes.forEach((node) => {
      if (shouldUpdate(node)) {
        graph.setItemState(node, ITEM_STATE_SELECTED, false);
      }
    });

    graph.paint();
    graph.setAutoPaint(true);
  },

  handleNodeClick({ item }) {
    const { graph } = this;

    const isSelected = item.hasState(ITEM_STATE_SELECTED);

    if (this.multiple && this.keydown) {
      graph.setItemState(item, ITEM_STATE_SELECTED, !isSelected);
    } else {
      this.clearSelectedState((node) => {
        return node !== item;
      });

      if (!isSelected) {
        graph.setItemState(item, ITEM_STATE_SELECTED, true);
      }
    }
  },

  handleCanvasClick() {
    this.clearSelectedState();
  },

  handleKeyDown(e) {
    this.keydown = (e.keyCode || e.which) === this.keyCode;
  },

  handleKeyUp() {
    this.keydown = false;
  },
});
