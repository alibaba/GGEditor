import {
  ItemType,
  LabelState,
  EditorEvent,
  EditorCommand,
  GraphCommonEvent,
  GraphNodeEvent,
  GraphEdgeEvent,
  GraphCanvasEvent,
  GraphCustomEvent,
} from '@common/constants';

export interface EventEmitter {
  /** 绑定事件 */
  on: (eventName: EditorEvent | GraphNativeEvent, handler: Function) => void;
  /** 触发事件 */
  emit: (eventName: EditorEvent | GraphNativeEvent, params: object) => void;
}

/**
 * G6 绘图元素
 * @see https://www.yuque.com/antv/g6/item
 */
export interface Item {
  // 通用
  getModel: () => NodeModel | EdgeModel;

  // 状态
  hasState: (state: string) => boolean;

  getContainer: () => object;
}

/**
 * G6 节点元素
 * @see https://www.yuque.com/antv/g6/node-api
 */
export interface Node extends Item {

}

/**
 * G6 边线元素
 * @see https://www.yuque.com/antv/g6/edge-api
 */
export interface Edge extends Item {

}

export interface ItemModel {
  /** 元素 ID */
  id: string;
  /** 元素样式 */
  style?: object;
  /** 元素形状 */
  shape?: string;
  /** 元素标签 */
  label?: string;
}

export interface NodeModel extends ItemModel {
  /** 元素坐标x */
  x: number;
  /** 元素坐标y */
  y: number;
}

export interface EdgeModel extends ItemModel {
  /** 起始节点 ID */
  source: string;
  /** 终止节点 ID */
  target: string;
}

/**
 * G6 图表载体
 * @see https://www.yuque.com/antv/g6/graph
 */
export interface Graph extends EventEmitter {
  // 更新
  add: (type: ItemType, model: NodeModel | EdgeModel) => void;
  addItem: (type: ItemType, model: NodeModel | EdgeModel) => void;
  update: (item: string | Item, model: object) => void;
  updateItem: (item: string | Item, model: object) => void;
  remove: (item: string | Item) => void;
  removeItem: (item: string | Item) => void;
  paint: () => void;
  setAutoPaint:(auto: boolean) => void;

  // 状态
  setItemState: (item: string | Item, state: string, enabled: boolean) => void;

  // 查找
  findById: (id: string) => Item;
  findAllByState: (type: ItemType, state: string) => Item[];

  // 其它
  get: (key: string) => any;
  set: (key: string, val: any) => void;
}

export interface GraphEvent {

}

export interface Command<T = object> {
  /** 命令名称 */
  name: string;
  /** 命令参数 */
  params: T;
  /** 是否可以执行 */
  canExecute: (graph: Graph) => boolean;
  /** 是否可以撤销 */
  canUndo: (graph: Graph) => boolean;
  /** 初始命令 */
  init: (graph: Graph) => void;
  /** 执行命令 */
  execute: (graph: Graph) => void;
  /** 撤销命令 */
  undo: (graph: Graph) => void;
  /** 命令快捷键 */
  shortcuts: string[] | string[][];
}

export interface CommandEvent {
  name: EditorCommand;
  params: object;
}

export interface LabelStateEvent {
  labelState: LabelState;
}

export type EventHandle<T> = (e: T) => void;

export type GraphCommonEventProps = Partial<Record<keyof typeof GraphCommonEvent, EventHandle<GraphEvent>>>;
export type GraphNodeEventProps = Partial<Record<keyof typeof GraphNodeEvent, EventHandle<GraphEvent>>>;
export type GraphEdgeEventProps = Partial<Record<keyof typeof GraphEdgeEvent, EventHandle<GraphEvent>>>;
export type GraphCanvasEventProps = Partial<Record<keyof typeof GraphCanvasEvent, EventHandle<GraphEvent>>>;
export type GraphCustomEventProps = Partial<Record<keyof typeof GraphCustomEvent, EventHandle<GraphEvent>>>;

export type GraphNativeEvent =
  GraphCommonEvent |
  GraphNodeEvent |
  GraphEdgeEvent |
  GraphCanvasEvent |
  GraphCustomEvent;

export type GraphReactEvent =
  keyof typeof GraphCommonEvent |
  keyof typeof GraphNodeEvent |
  keyof typeof GraphEdgeEvent |
  keyof typeof GraphCanvasEvent |
  keyof typeof GraphCustomEvent;
