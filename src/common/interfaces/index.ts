import {
  ItemType,
  ItemState,
  GraphType,
  GraphState,
  LabelState,
  EditorCommand,
  GraphCommonEvent,
  GraphNodeEvent,
  GraphEdgeEvent,
  GraphCanvasEvent,
  GraphCustomEvent,
} from '@/common/constants';
import { G } from '@/common/interfaces/g';
import { EditorPrivateContextProps } from '@/common/context/EditorPrivateContext';

export interface ItemModel {
  /** 元素 ID */
  id: string;
  /** 元素样式 */
  style?: object;
  /** 元素形状 */
  shape?: string;
  /** 元素标签 */
  label?: string;
  /** 元素标签配置 */
  labelCfg?: {
    /** 标签文本样式 */
    style?: any;
    /** 标签默认文本 */
    defaultText?: string;
    /** 标签最大宽度 */
    maxWidth?: number;
  };
}

export interface NodeModel extends ItemModel {
  /** 元素 X 坐标 */
  x?: number;
  /** 元素 Y 坐标 */
  y?: number;
  /** 节点尺寸 */
  size?: [number, number];
}

export interface EdgeModel extends ItemModel {
  /** 起始节点id */
  source: string;
  /** 终止节点id */
  target: string;
  /** 起始点 */
  startPoint?: { x: number; y: number };
  /** 终止点 */
  endPoint?: { x: number; y: number };
}

export interface FlowNodeModel extends Omit<NodeModel, 'id'> {
  id?: string;
}

export interface FlowEdgeModel extends Omit<EdgeModel, 'id'> {
  id?: string;
}

export interface MindNodeModel extends Omit<NodeModel, 'id'> {
  isRoot?: boolean;
  id?: string;
  children?: MindNodeModel[];
  collapsed?: boolean;
}

/**
 * G6 绘图元素
 * @see https://www.yuque.com/antv/g6/item
 */
export interface Item {
  // 通用
  getBBox(): G.Box;
  getContainer(): G.Group;
  getKeyShape(): G.Shape;
  getModel<T = ItemModel>(): T;
  getType(): ItemType;
  getEdges(): Edge[];
  enableCapture(enable: boolean): void;
  clearCache(): void;
  updatePosition(obj: { x?: number; y?: number }): void;
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

  // 其它
  get(key: string): any;
  set(key: string, value: any): void;
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

  x: number;
  y: number;
}

/**
 * G6 边线元素
 * @see https://www.yuque.com/antv/g6/edge-api
 */
export interface Edge extends Item {
  // 通用
  getModel<T = EdgeModel>(): T;

  // 特有
  getSource(): Node;
  getTarget(): Node;
  setSource(source: Node): void;
  setTarget(target: Node): void;
}

export interface LabelConfig {
  position: 'top' | 'bottom' | 'left' | 'right' | 'center';
  offset?: number;
  style?: React.CSSProperties;
}

/**
 * G6 自定义形状
 * @see https://www.yuque.com/antv/g6/shape-api
 */
export interface CustomShape<T, M> {
  // 属性
  itemType?: ItemType;

  // 绘制
  draw?(model: M, group: G.Group): G.Shape;
  drawShape?(model: M, group: G.Group): void;
  drawLabel?(model: M, group: G.Group): G.Shape;
  afterDraw?(model: M, group: G.Group): void;

  // 更新
  update?(model: M, item: T): void;
  afterUpdate?(model: M, item: T): void;
  shouldUpdate?(type: ItemType): boolean;
  setState?(name: ItemState, value: boolean, item: T): void;

  // 通用
  getShape?(type: ItemType): CustomNode | CustomEdge;
  getLabelStyle?(model: M, labelConfig: LabelConfig, group: G.Group): React.CSSProperties;
  getLabelStyleByPosition?(model: M, labelConfig: LabelConfig, group: G.Group): React.CSSProperties;
  getShapeStyle?(model: M): React.CSSProperties;
}

/**
 * G6 自定义节点
 */
export interface CustomNode<M = NodeModel> extends CustomShape<Node, M> {
  // 属性
  labelPosition?: 'top' | 'bottom' | 'left' | 'right' | 'center';

  // 通用
  getAnchorPoints?(): number[][];
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
export interface Behavior {
  graph?: G6.Graph;
  graphType?: GraphType;
  getEvents(): {
    [propName in GraphNativeEvent]?: string;
  };
  getDefaultCfg?(): object;
  shouldBegin?(e?: GraphEvent): boolean;
  shouldUpdate?(e?: GraphEvent): boolean;
  shouldEnd?(e?: GraphEvent): boolean;
}

export interface GraphEvent {
  x: number;
  y: number;
  canvasX: number;
  canvasY: number;
  clientX: number;
  clientY: number;
  event: MouseEvent;
  target: G.Shape;
  type: string;
  currentTarget: object;
  item: Item;
  removed: boolean;
  timeStamp: number;
  bubbles: boolean;
  defaultPrevented: boolean;
  cancelable: boolean;
}

export interface Command<P = object, G = G6.Graph> {
  /** 命令名称 */
  name: string;
  /** 命令参数 */
  params: P;
  /** 是否可以执行 */
  canExecute(graph: G): boolean;
  /** 是否应该执行 */
  shouldExecute(graph: G): boolean;
  /** 是否可以撤销 */
  canUndo(graph: G): boolean;
  /** 初始命令 */
  init(graph: G): void;
  /** 执行命令 */
  execute(graph: G): void;
  /** 撤销命令 */
  undo(graph: G): void;
  /** 命令快捷键 */
  shortcuts: string[] | string[][];
}

export interface CommandEvent {
  name: EditorCommand;
  params: object;
}

export interface GraphStateEvent {
  graphState: GraphState;
}

export interface LabelStateEvent {
  graphState: GraphState;
  labelState: LabelState;
}

export interface ContextMenuState {
  visible: boolean;
  clientX: number;
  clientY: number;
}

export interface NodePopoverState {
  visible: boolean;
  x: number;
  y: number;
  text?: string;
}

export interface ContextMenuEvent {
  contextMenuState: ContextMenuState;
}

export interface NodePopoverEvent {
  nodePopoverState: NodePopoverState;
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

export interface FlowData {
  nodes: FlowNodeModel[];
  edges: FlowEdgeModel[];
}

export interface MindData extends MindNodeModel {}

export interface FlowAndMindCommonProps
  extends EditorPrivateContextProps,
    GraphCommonEventProps,
    GraphNodeEventProps,
    GraphEdgeEventProps,
    GraphCanvasEventProps,
    GraphCustomEventProps {
  className?: string;
  style?: React.CSSProperties;
  graphConfig?: Partial<G6.GraphOptions>;
  customModes?: (mode: string, behaviors: any) => object;
}
