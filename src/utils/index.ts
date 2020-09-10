import G6 from '@antv/g6';
import { ItemType, ItemState, GraphState, EditorEvent } from '@/common/constants';
import { Graph, TreeGraph, EdgeModel, Item, Node, Edge, Combo } from '@/common/interfaces';

/** 生成唯一标识 */
export function guid() {
  return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/** 拼接查询字符 */
export const toQueryString = (obj: object) =>
  Object.keys(obj)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
    .join('&');

/** 执行批量处理 */
export function executeBatch(graph: Graph, execute: Function) {
  const autoPaint = graph.get('autoPaint');

  graph.setAutoPaint(false);

  execute();

  graph.paint();
  graph.setAutoPaint(autoPaint);
}

/** 执行递归遍历 */
export function recursiveTraversal(root, callback) {
  if (!root) {
    return;
  }

  callback(root);

  if (!root.children) {
    return;
  }

  root.children.forEach(item => recursiveTraversal(item, callback));
}

/** 判断是否流程图 */
export function isFlow(graph: Graph) {
  return graph.constructor === G6.Graph;
}

/** 判断是否脑图 */
export function isMind(graph: Graph) {
  return graph.constructor === G6.TreeGraph;
}

/** 判断是否节点 */
export function isNode(item: Item) {
  return item.getType() === ItemType.Node;
}

/** 判断是否边线 */
export function isEdge(item: Item) {
  return item.getType() === ItemType.Edge;
}

/** 获取选中节点 */
export function getSelectedNodes(graph: Graph): Node[] {
  return graph.findAllByState(ItemType.Node, ItemState.Selected);
}

/** 获取选中边线 */
export function getSelectedEdges(graph: Graph): Edge[] {
  return graph.findAllByState(ItemType.Edge, ItemState.Selected);
}

/** 获取选中边线 */
export function getSelectedCombos(graph: Graph): Combo[] {
  return graph.findAllByState(ItemType.Combo, ItemState.Selected);
}

/** 获取选中元素 */
export function getSelectedItems(graph: Graph): Item[] {
  const selectedNodes = getSelectedNodes(graph);
  const selectedEdges = getSelectedEdges(graph);
  const selectedCombos = getSelectedCombos(graph);
  return [...selectedNodes, ...selectedEdges, ...selectedCombos];
}

/** 清除选中状态 */
export function clearSelectedState(graph: Graph, shouldUpdate: (item: Item) => boolean = () => true) {
  executeBatch(graph, () => {
    getSelectedItems(graph).forEach(item => {
      if (shouldUpdate(item)) {
        graph.setItemState(item, ItemState.Selected, false);
      }
    });
  });
}

/** 获取高亮边线 */
export function getHighlightEdges(graph: Graph): Edge[] {
  return graph.findAllByState(ItemType.Edge, ItemState.HighLight);
}

/** 获取图表状态 */
export function getGraphState(graph: Graph): GraphState {
  let graphState: GraphState = GraphState.MultiSelected;

  const selectedItems = getSelectedItems(graph);

  if (selectedItems.length <= 1) {
    switch (selectedItems[0] ? selectedItems[0].getType() : '') {
      case ItemType.Node:
        graphState = GraphState.NodeSelected;
        break;
      case ItemType.Edge:
        graphState = GraphState.EdgeSelected;
        break;
      case ItemType.Combo:
        graphState = GraphState.ComboSelected;
        break;
      default:
        graphState = GraphState.CanvasSelected;
        break;
    }
  }

  return graphState;
}

/** 设置选中元素 */
export function setSelectedItems(graph: Graph, items: Item[] | string[]) {
  executeBatch(graph, () => {
    clearSelectedState(graph);

    items.forEach(item => {
      graph.setItemState(item, ItemState.Selected, true);
    });
  });

  graph.emit(EditorEvent.onGraphStateChange, {
    graphState: getGraphState(graph),
  });
}

/** 获取回溯路径 - Flow */
export function getFlowRecallEdges(graph: Graph, node: Node, targetIds: string[] = [], edges: Edge[] = []) {
  const inEdges: Edge[] = node.getInEdges();

  if (!inEdges.length) {
    return [];
  }

  inEdges.map(edge => {
    const sourceId = (edge.getModel() as EdgeModel).source;
    const sourceNode = graph.findById(sourceId) as Node;

    edges.push(edge);

    const targetId = node.get('id');

    targetIds.push(targetId);

    if (!targetIds.includes(sourceId)) {
      getFlowRecallEdges(graph, sourceNode, targetIds, edges);
    }
  });

  return edges;
}

/** 获取回溯路径 - Mind */
export function getMindRecallEdges(graph: TreeGraph, node: Node, edges: Edge[] = []) {
  const parentNode = node.get('parent');

  if (!parentNode) {
    return edges;
  }

  node.getEdges().forEach(edge => {
    const source = edge.getModel().source as Edge;

    if (source.get('id') === parentNode.get('id')) {
      edges.push(edge);
    }
  });

  return getMindRecallEdges(graph, parentNode, edges);
}
