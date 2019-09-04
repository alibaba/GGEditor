import G6 from '@antv/g6';
import { getSelectedEdges, executeBatch } from '../../../utils';
import { ItemState, GraphNodeEvent, GraphCanvasEvent } from '../../../common/constants';
import { Item, CustomBehavior, Edge, Graph } from '../../../common/interface';

interface RecallEdgeBehavior extends CustomBehavior {
  /** 清空选中状态 */
  clearSelectedState(shouldUpdate?: (item: Item) => boolean): void;

  /** 处理点击事件 */
  handleNodeClick({ item }: { item: Item }): void;

  /** 处理画布点击 */
  handleCanvasClick(): void;

  /** 高亮 */
  highlightParentEdges(item: Item): void;

  /** 查找父级边线 */
  findParentEdges(item: Item, edges?: Edge[]): Edge[];
}

const recallEdgeBehavior = {
  getEvents() {
    return {
      [`${GraphNodeEvent.onNodeClick}`]: 'handleNodeClick',
      [`${GraphCanvasEvent.onCanvasClick}`]: 'handleCanvasClick',
    };
  },

  clearSelectedState(shouldUpdate: Function = () => true) {
    const { graph } = this;

    const selectedEdges = getSelectedEdges(graph);

    executeBatch(graph, () => {
      [...selectedEdges].forEach(item => {
        if (shouldUpdate(item)) {
          graph.setItemState(item, ItemState.Selected, false);
        }
      });
    });
  },

  handleNodeClick({ item }) {
    const { graph } = this;

    const isSelected = item.hasState(ItemState.Selected);

    this.clearSelectedState(selectedItem => {
      return selectedItem !== item;
    });

    if (!isSelected) {
      graph.setItemState(item, ItemState.Selected, true);
    }

    this.highlightParentEdges(item);
  },

  highlightParentEdges(item) {
    const { graph } = this;

    this.clearSelectedState();

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

    const foundEdge = item.getEdges().find(edge => edge.getModel().source === parentNode.getModel().id);

    if (foundEdge) {
      edges.push(foundEdge);
    }

    return this.findParentEdges(item.get('parent'), edges);
  },

  handleCanvasClick() {
    this.clearSelectedState();
  },
} as RecallEdgeBehavior;

G6.registerBehavior('recall-edge', recallEdgeBehavior);
