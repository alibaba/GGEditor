import { CSSProperties } from 'react';
import {
  ItemType,
  ItemState,
  GraphState,
  LabelState,
  EditorEvent,
  EditorCommand,
  GraphCommonEvent,
  GraphNodeEvent,
  GraphEdgeEvent,
  GraphCanvasEvent,
  GraphCustomEvent,
  ContextMenuState,
} from '@common/constants';

/**
 * G BBOX
 * */
export interface BBox {
  x: number;
  y: number;
  maxX: number;
  minX: number;
  maxY: number;
  minY: number;
  centerX: number;
  centerY: number;
  width: number;
  height: number;
}

/**
 * G Shape
 * @see https://github.com/antvis/g#shape
 * */
export interface Shape {
  attr(name?: string, value?: string | number): void | any;
  attr(params?: object): void;
  get(name: string): any;
  set(name: string, value: any): any;
  getBBox(): BBox;
  show(): void;
  hide(): void;
  remove(): void;
  destroy(): void;
  translate(x: number, y: number): void;
}

/**
 * G Group
 * @see https://github.com/antvis/g#group
 * */
export interface Group {
  get(name: string): any;
  set(name: string, value: any): any;
  addShape(type: string, config: object): Shape;
  getBBox(): BBox;
  findByClassName(className: string): Shape;
}

export interface EventEmitter {
  /** 绑定事件 */
  on(eventName: EditorEvent | GraphNativeEvent, handler: Function): void;
  /** 触发事件 */
  emit(eventName: EditorEvent | GraphNativeEvent, params: object): void;
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
  /** 元素 X 坐标 */
  x: number;
  /** 元素 Y 坐标 */
  y: number;
}

export interface EdgeModel extends ItemModel {
  /** 起始节点 */
  source: Node;
  /** 终止节点 */
  target: Node;
  /** 起始点 */
  startPoint: { x: number; y: number };
  /** 终止点 */
  endPoint: { x: number; y: number };
}

/**
 * G6 图表载体
 * @see https://www.yuque.com/antv/g6/graph
 */
export interface Graph extends EventEmitter {
  // 更新
  add(type: ItemType, model: NodeModel | EdgeModel): void;
  addItem(type: ItemType, model: NodeModel | EdgeModel): void;
  update(item: string | Item, model: object): void;
  updateItem(item: string | Item, model: object): void;
  remove(item: string | Item): void;
  removeItem(item: string | Item): void;
  paint(): void;
  setAutoPaint(auto: boolean): void;

  // 状态
  setItemState(item: string | Item, state: string, enabled: boolean): void;

  // 查找
  findById(id: string): Item;
  findAllByState(type: ItemType, state: string): Item[];

  // 其它
  get(key: string): any;
  set(key: string, val: any): void;
}

/**
 * G6 绘图元素
 * @see https://www.yuque.com/antv/g6/item
 */
export interface Item {
  // 通用
  getBBox(): BBox;
  getContainer(): Group;
  getKeyShape(): Shape;
  getModel<T = ItemModel>(): T;
  getType(): ItemType;
  enableCapture(enable: boolean): void;
  clearCache(): void;

  // 状态
  show(): void;
  hide(): void;
  changeVisibility(visible: boolean): void;
  isVisible(): boolean;
  toFront(): void;
  toBack(): void;
  setState(state: string, enable: boolean): void;
  clearStates(states: string | string[]): void;
  getStates(): string[];
  hasState(state: string): boolean;
}

/**
 * G6 节点元素
 * @see https://www.yuque.com/antv/g6/node-api
 */
export interface Node extends Item {
  // 通用
  getModel<T = NodeModel>(): T;

  // 特有
  getEdges(): Edge[];
  getInEdges(): Edge[];
  getOutEdges(): Edge[];
}

/**
 * G6 边线元素
 * @see https://www.yuque.com/antv/g6/edge-api
 */
export interface Edge extends Item {
  // 通用
  getModel<T = EdgeModel>(): T;
}

export interface LabelConfig {
  position: 'top' | 'bottom' | 'left' | 'right' | 'center';
  offset?: number;
  style?: CSSProperties;
}

/**
 * G6 自定义形状
 * @see https://www.yuque.com/antv/g6/shape-api
 */
export interface CustomShape<T, M> {
  // 属性
  itemType?: ItemType;

  // 绘制
  draw?(model: M, group: Group): Shape;
  drawShape?(model: M, group: Group): void;
  drawLabel?(model: M, group: Group): Shape;
  afterDraw?(model: M, group: Group): void;

  // 更新
  update?(model: M, item: T): void;
  afterUpdate?(model: M, item: T): void;
  shouldUpdate?(type: ItemType): boolean;
  setState?(name: ItemState, value: boolean, item: T): void;

  // 通用
  getShape?(type: ItemType): CustomNode | CustomEdge;
  getLabelStyle?(model: M, labelConfig: LabelConfig, group: Group): CSSProperties;
  getLabelStyleByPosition?(model: M, labelConfig: LabelConfig, group: Group): CSSProperties;
  getShapeStyle?(model: M): CSSProperties;
}

/**
 * G6 自定义节点
 */
export interface CustomNode<M = NodeModel> extends CustomShape<Node, M> {
  // 属性
  labelPosition?: 'top' | 'bottom' | 'left' | 'right' | 'center';

  // 通用
  getAnchorPoints?: number[][];
  getSize?: number[];
}

/**
 * G6 自定义边线
 */
export interface CustomEdge<M = EdgeModel> extends CustomShape<Edge, M> {
  // 属性
  labelPosition?: 'start' | 'end' | 'center';
  labelAutoRotate?: boolean;

  // 通用
  getControlPoints?: number[][];
  getPath?(points: { x: number; y: number }[]): [];
  getPathPoints?(model: M): any;
}

/**
 * G6 自定义行为
 * @see https://www.yuque.com/antv/g6/behavior-api
 */
export interface CustomBehavior {
  graph: Graph;
  getEvents(): {
    [propName in GraphNativeEvent]: string;
  };
  getDefaultCfg?(): object;
}

export interface GraphEvent {}

export interface Command<T = object> {
  /** 命令名称 */
  name: string;
  /** 命令参数 */
  params: T;
  /** 是否可以执行 */
  canExecute(graph: Graph): boolean;
  /** 是否可以撤销 */
  canUndo(graph: Graph): boolean;
  /** 初始命令 */
  init(graph: Graph): void;
  /** 执行命令 */
  execute(graph: Graph): void;
  /** 撤销命令 */
  undo(graph: Graph): void;
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

export interface ContextMenuEvent {
  contextMenuState: ContextMenuState;
}

export type EventHandle<T> = (e: T) => void;

export type GraphCommonEventProps = Partial<Record<keyof typeof GraphCommonEvent, EventHandle<GraphEvent>>>;
export type GraphNodeEventProps = Partial<Record<keyof typeof GraphNodeEvent, EventHandle<GraphEvent>>>;
export type GraphEdgeEventProps = Partial<Record<keyof typeof GraphEdgeEvent, EventHandle<GraphEvent>>>;
export type GraphCanvasEventProps = Partial<Record<keyof typeof GraphCanvasEvent, EventHandle<GraphEvent>>>;
export type GraphCustomEventProps = Partial<Record<keyof typeof GraphCustomEvent, EventHandle<GraphEvent>>>;

export type GraphNativeEvent = GraphCommonEvent | GraphNodeEvent | GraphEdgeEvent | GraphCanvasEvent | GraphCustomEvent;

export type GraphReactEvent =
  | keyof typeof GraphCommonEvent
  | keyof typeof GraphNodeEvent
  | keyof typeof GraphEdgeEvent
  | keyof typeof GraphCanvasEvent
  | keyof typeof GraphCustomEvent;
