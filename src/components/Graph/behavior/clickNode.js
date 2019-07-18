import G6 from '@antv/g6';
import {
  ITEM_TYPE_NODE,
  ItemState,
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
    return this.graph.findAllByState(ITEM_TYPE_NODE, ItemState.Selected);
  },

  clearSelectedState(shouldUpdate = () => true) {
    const { graph } = this;

    const selectedNodes = this.getSelectedNodes(graph);

    graph.setAutoPaint(false);

    selectedNodes.forEach((node) => {
      if (shouldUpdate(node)) {
        graph.setItemState(node, ItemState.Selected, false);
      }
    });

    graph.paint();
    graph.setAutoPaint(true);
  },

  handleNodeClick({ item }) {
    const { graph } = this;

    const isSelected = item.hasState(ItemState.Selected);

    if (this.multiple && this.keydown) {
      graph.setItemState(item, ItemState.Selected, !isSelected);
    } else {
      this.clearSelectedState((node) => {
        return node !== item;
      });

      if (!isSelected) {
        graph.setItemState(item, ItemState.Selected, true);
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
