import G6 from '@antv/g6';
import {
  ITEM_TYPE_NODE,
  ITEM_TYPE_EDGE,
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

  getSelectedEdges() {
    return this.graph.findAllByState(ITEM_TYPE_EDGE, ItemState.Selected);
  },

  clearEdgeHighlight() {
    const { graph } = this;

    const selectedEdges = this.getSelectedEdges();

    selectedEdges.forEach((edge) => {
      graph.setItemState(edge, ItemState.Selected, false);
    });
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

    // highlight parent edges
    this.highlightParentEdges(item);

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

  highlightParentEdges(item) {
    const { graph } = this;

    this.clearEdgeHighlight();

    const edges = this.findParentEdges(item);

    if (edges.length > 0) {
      edges.forEach(edge => graph.setItemState(edge, ItemState.Selected, true));
    }
  },

  findParentEdges(item, edges = []) {
    const parentNode = item.get('parent');

    if (!parentNode) {
      return edges;
    }

    edges.push(item.getEdges().find(edge => edge.getModel().source === parentNode.getModel().id));

    return this.findParentEdges(item.get('parent'), edges);
  },

  handleCanvasClick() {
    this.clearSelectedState();
    this.clearEdgeHighlight();
  },

  handleKeyDown(e) {
    this.keydown = (e.keyCode || e.which) === this.keyCode;
  },

  handleKeyUp() {
    this.keydown = false;
  },
});
