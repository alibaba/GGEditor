import G6 from '@antv/g6';
import { EditorEvent, ItemState, ItemType } from '@/common/constants';
import { GraphNativeEvent } from '@/common/interfaces';

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

/** 添加事件监听 */
export function addListener<T>(target: G6.Graph, eventName: EditorEvent | GraphNativeEvent, handler: T | undefined) {
  if (typeof handler === 'function') {
    target.on<T>(eventName, handler);
  }
}

/** 判断是否脑图 */
export function isMind(graph: G6.Graph) {
  return graph.constructor === G6.TreeGraph;
}

/** 判断是否节点 */
export function isNode(item: G6.Item) {
  return item.getType() === ItemType.Node;
}

/** 判断是否边线 */
export function isEdge(item: G6.Item) {
  return item.getType() === ItemType.Edge;
}

/** 获取选中节点 */
export function getSelectedNodes(graph: G6.Graph): G6.Node[] {
  return graph.findAllByState(ItemType.Node, ItemState.Selected);
}

/** 获取选中边线 */
export function getSelectedEdges(graph: G6.Graph): G6.Edge[] {
  return graph.findAllByState(ItemType.Edge, ItemState.Selected);
}

/** 获取高亮边线 */
export function getHighlightEdges(graph: G6.Graph): G6.Edge[] {
  return graph.findAllByState(ItemType.Edge, ItemState.HighLight);
}

/** 执行批量处理 */
export function executeBatch(graph: G6.Graph, execute: Function) {
  graph.setAutoPaint(false);

  execute();

  graph.paint();
  graph.setAutoPaint(true);
}

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
