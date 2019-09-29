import { getHighlightEdges, executeBatch, isMind } from '@utils';
import { ItemState, GraphNodeEvent, GraphCanvasEvent } from '@common/constants';
import { Item, Edge, Behavior } from '@common/interface';
import behaviorManager from '@common/behaviorManager';

interface RecallEdgeBehavior extends Behavior {
  /** 清空高亮状态 */
  clearHighlightState(shouldUpdate?: (item: Item) => boolean): void;

  /** 处理点击事件 */
  handleNodeClick({ item }: { item: Item }): void;

  /** 处理画布点击 */
  handleCanvasClick(): void;

  /** 高亮 */
  highlightParentEdges(item: Item): void;

  /** 查找脑图父级边线 */
  findMindParentEdges(item: Item, edges?: Edge[]): Edge[];

  /** 查找流程图回溯边线 */
  findFlowRecallEdges(item: Item, edges?: Edge[]): Edge[];
}

const recallEdgeBehavior = {
  getEvents() {
    return {
      [`${GraphNodeEvent.onNodeClick}`]: 'handleNodeClick',
      [`${GraphCanvasEvent.onCanvasClick}`]: 'handleCanvasClick',
    };
  },

  clearHighlightState(shouldUpdate: Function = () => true) {
    const { graph } = this;

    const selectedEdges = getHighlightEdges(graph);

    executeBatch(graph, () => {
      [...selectedEdges].forEach(item => {
        if (shouldUpdate(item)) {
          graph.setItemState(item, ItemState.HighLight, false);
        }
      });
    });
  },

  handleNodeClick({ item }) {
    const { graph } = this;

    const isSelected = item.hasState(ItemState.Selected);

    this.clearHighlightState(selectedItem => {
      return selectedItem !== item;
    });

    if (!isSelected) {
      graph.setItemState(item, ItemState.Selected, true);
    }

    this.highlightParentEdges(item);
  },

  highlightParentEdges(item) {
    const { graph } = this;

    this.clearHighlightState();

    let edges = [];

    if (isMind(graph)) {
      edges = this.findMindParentEdges(item);
    }

    if (!isMind(graph)) {
      edges = this.findFlowRecallEdges(item);
    }

    if (edges.length > 0) {
      edges.forEach(edge => graph.setItemState(edge, ItemState.HighLight, true));
    }
  },

  findMindParentEdges(item, edges = []) {
    const parentNode = item.get('parent');

    if (!parentNode) {
      return edges;
    }

    const foundEdge = item.getEdges().find(edge => edge.getModel().source === parentNode.getModel().id);

    if (foundEdge) {
      edges.push(foundEdge);
    }

    return this.findMindParentEdges(item.get('parent'), edges);
  },

  findFlowRecallEdges(item, edges = []) {
    const { graph } = this;

    const itemId = item.getModel().id;
    const edgesOnItem = item.getEdges();

    if (!edgesOnItem.find(edge => edge.getModel().target === itemId)) {
      return edges;
    }

    for (let i = 0; i < edgesOnItem.length; i++) {
      if (edgesOnItem[i].getModel().target === itemId) {
        edges.push(edgesOnItem[i]);
      }
    }

    for (let i = 0; i < edgesOnItem.length; i++) {
      return this.findFlowRecallEdges(graph.findById(edgesOnItem[i].getModel().source), edges);
    }
  },

  handleCanvasClick() {
    this.clearHighlightState();
  },
} as RecallEdgeBehavior;

behaviorManager.registerBehavior('recall-edge', recallEdgeBehavior);
