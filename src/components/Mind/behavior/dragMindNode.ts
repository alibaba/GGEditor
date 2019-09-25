import G6 from '@antv/g6';
import { CustomBehavior, Edge, Item, GraphEvent, TreeGraph, MindNodeModel } from '../../../../src/common/interface';
import { GraphCanvasEvent, GraphNodeEvent, ItemState } from '../../../../src/common/constants';
import { uuid } from '../../../../src/utils';

interface DragMindNodeBehavior extends CustomBehavior {
  /** 树图 */
  graph: TreeGraph;
  /** 被拖拽节点 */
  draggedNode: null | Item;

  /** 处理开始拖拽事件 */
  handleNodeDragStart(e: GraphEvent): void;

  /** 处理拖拽过程事件 */
  handleNodeDrag(e: GraphEvent): void;

  /** 处理拖拽结束事件 */
  handleNodeDragEnd(e: GraphEvent): void;

  /** 处理drop事件 */
  handleNodeDrop(e: GraphEvent): void;

  /** 拷贝拖拽节点model，更改id */
  cloneDraggedNode(nodeModel: MindNodeModel): MindNodeModel;
}

const dragMindNodeBehavior = {
  draggedNode: null,

  getEvents() {
    return {
      [`${GraphNodeEvent.onNodeDragStart}`]: 'handleNodeDragStart',
      [`${GraphNodeEvent.onNodeDrag}`]: 'handleNodeDrag',
      [`${GraphNodeEvent.onNodeDragEnd}`]: 'handleNodeDragEnd',
      [`${GraphNodeEvent.onNodeDrop}`]: 'handleNodeDrop',
    };
  },

  handleNodeDragStart(e): void {
    const { graph } = this;
    const { item } = e;

    console.log(item);
    graph.setItemState(item, ItemState.Selected, true);
    this.draggedNode = item;
    console.log(e);
  },

  handleNodeDrag(e: GraphEvent): void {},

  handleNodeDragEnd(e: GraphEvent): void {
    const { graph } = this;
    const { item } = e;

    graph.setItemState(item, ItemState.Selected, false);
  },

  handleNodeDrop(e: GraphEvent): void {
    const { graph, draggedNode } = this;
    const { item } = e;

    graph.setItemState(item, ItemState.Selected, true);

    if (draggedNode && item && item.getModel().id !== draggedNode.getModel().id) {
      const newModel = this.cloneDraggedNode(draggedNode.getModel());
      console.log(newModel);
      graph.addChild(newModel, item);
      graph.removeChild(draggedNode.getModel().id);
      graph.refresh();
      graph.refreshPositions();
    }

    this.draggedNode = null;
  },

  cloneDraggedNode(nodeModel: MindNodeModel): MindNodeModel {
    nodeModel.id = uuid();
    if (nodeModel.children) {
      nodeModel.children.forEach(childModel => this.cloneDraggedNode(childModel));
    }
    return nodeModel;
  },
} as DragMindNodeBehavior;

G6.registerBehavior('drag-mind-node', dragMindNodeBehavior);
