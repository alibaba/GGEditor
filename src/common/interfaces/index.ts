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
import { G } from '@antv/g6/types/g';
import { EditorContextProps } from '@/components/EditorContext';

interface LabelStyle {
  // 文本颜色
  fill?: string;
  // 文本描边颜色
  stroke?: string;
  // 文本描边宽度
  lineWidth?: number;
  // 文本透明度
  opacity?: number;
  // 文本字体属性
  font?: string;
  // 文本字体大小
  fontSize?: number;

  [propName: string]: any;
}

interface NodeLabelCfg {
  position?: 'center' | 'top' | 'right' | 'bottom' | 'left';
  offset?: number;
  style?: LabelStyle;
}

interface EdgeLabelCfg {
  position?: 'start' | 'end' | 'center';
  refX?: number;
  refY?: number;
  style?: LabelStyle;
  autoRotate?: boolean;
}

/**
 * G6 内置节点
 * @see https://www.yuque.com/antv/g6/internal-node
 */
export interface NodeModel {
  id: string;
  shape?: string;
  style?: {
    // 节点填充颜色
    fill?: string;
    // 节点描边颜色
    stroke?: string;
    // 节点描边宽度
    lineWidth?: number;
    // 节点阴影颜色
    shadowColor?: string;
    // 节点阴影范围
    shadowBlur?: number;
    // 节点阴影 x 方向偏移量
    shadowOffsetX?: number;
    // 节点阴影 y 方向偏移量
    shadowOffsetY?: number;

    [propName: string]: any;
  };
  label?: string;
  labelCfg?: NodeLabelCfg;
  x?: number;
  y?: number;
  size?: number | number[];
  anchorPoints?: number[][];
}

/**
 * G6 内置边线
 * @see https://www.yuque.com/antv/g6/internal-edge
 */
export interface EdgeModel {
  id: string;
  shape?: string;
  style?: {
    // 边线颜色
    stroke?: string;
    // 边线宽度
    lineWidth?: number;
    // 边线响应宽度
    lineAppendWidth?: number;
    // 边线结束箭头
    endArrow: boolean;
    // 边线透明度
    strokeOpacity: number;
    // 边线阴影颜色
    shadowColor?: string;
    // 边线阴影范围
    shadowBlur?: number;
    // 边线阴影 x 方向偏移量
    shadowOffsetX?: number;
    // 边线阴影 y 方向偏移量
    shadowOffsetY?: number;
  };
  label?: string;
  labelCfg?: EdgeLabelCfg;
  source: string;
  target: string;
  sourceAnchor?: number;
  targetAnchor?: number;
  startPoint?: {
    x: number;
    y: number;
  };
  endPoint?: {
    x: number;
    y: number;
  };
}

/**
 * FlowData
 */
export interface FlowData {
  nodes: Partial<NodeModel>[];
  edges: Partial<EdgeModel>[];
}

/**
 * MindData
 */
export interface MindData extends Partial<NodeModel> {
  isRoot?: boolean;
  children?: MindData[];
  collapsed?: boolean;
}

/**
 * G6 自定义形状
 * @see https://www.yuque.com/antv/g6/shape-api
 */
export interface CustomShape<T, M> {
  // 配置
  options?: any;

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
  getLabelStyle?(model: M, labelConfig: NodeLabelCfg | EdgeLabelCfg, group: G.Group): React.CSSProperties;
  getLabelStyleByPosition?(model: M, labelConfig: NodeLabelCfg | EdgeLabelCfg, group: G.Group): React.CSSProperties;
  getShapeStyle?(model: M): React.CSSProperties;
}

/**
 * G6 自定义节点
 */
export interface CustomNode<M = NodeModel> extends CustomShape<G6.Node, M> {
  // 属性
  labelPosition?: 'center' | 'top' | 'right' | 'bottom' | 'left';

  // 通用
  getAnchorPoints?(): number[][];
  getSize?: number[];
}

/**
 * G6 自定义边线
 */
export interface CustomEdge<M = EdgeModel> extends CustomShape<G6.Edge, M> {
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
  item: G6.Item;
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
  labelState: LabelState;
}

export type GraphNativeEvent = GraphCommonEvent | GraphNodeEvent | GraphEdgeEvent | GraphCanvasEvent | GraphCustomEvent;

export type GraphReactEvent =
  | keyof typeof GraphCommonEvent
  | keyof typeof GraphNodeEvent
  | keyof typeof GraphEdgeEvent
  | keyof typeof GraphCanvasEvent
  | keyof typeof GraphCustomEvent;

export interface FlowAndMindCommonProps extends EditorContextProps, Partial<Record<GraphReactEvent, () => void>> {
  style?: React.CSSProperties;
  className?: string;
  graphConfig?: Partial<G6.GraphOptions>;
  customModes?: (mode: string, behaviors: any) => object;
}
