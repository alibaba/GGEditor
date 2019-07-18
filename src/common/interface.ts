import {
  LabelState,
  EditorEvent,
  EditorCommand,
  GraphCommonEvent,
  GraphNodeEvent,
  GraphEdgeEvent,
  GraphCanvasEvent,
  GraphCustomEvent,
} from '@common/constants';

export interface Graph {
  on: (eventName: EditorEvent | GraphNativeEvent, handler: Function) => void;
  emit: (eventName: EditorEvent | GraphNativeEvent, params: object) => void; 
}

export interface GraphEvent {

}

export interface Command {
  /** 命令名称 */
  name: string;
  /** 命令参数 */
  params: object;
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

export interface MindModel {
  label: string;
  children: MindModel[];
  side?: 'left' | 'right';
}

export interface FlowNode {
  id: string;
  x: number;
  y: number;
  color?: string;
  shape?: 'circle' | 'rect' | 'path' | 'line' | 'polyline' | 'image' | 'text';
  size?: number | number[];
  style?: object;
  anchorPoints?: number[][];
}

export interface FlowModel {
  nodes: FlowNode[];
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
