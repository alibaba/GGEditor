import {
  GraphCommonEvent,
  GraphNodeEvent,
  GraphEdgeEvent,
  GraphCanvasEvent,
  GraphCustomEvent
} from '@common/constants';

export interface Graph {
  on: (eventName: GraphNativeEvent, handler: GraphEventHandle) => void;
}

export interface GraphEvent {

}

export type GraphEventHandle = (e: GraphEvent) => void;

export type GraphCommonEventProps = Partial<Record<GraphCommonEvent, GraphEventHandle>>;
export type GraphNodeEventProps = Partial<Record<GraphNodeEvent, GraphEventHandle>>;
export type GraphEdgeEventProps = Partial<Record<GraphEdgeEvent, GraphEventHandle>>;
export type GraphCanvasEventProps = Partial<Record<GraphCanvasEvent, GraphEventHandle>>;
export type GraphCustomEventProps = Partial<Record<GraphCustomEvent, GraphEventHandle>>;

export type GraphNativeEvent =
  keyof typeof GraphCommonEvent |
  keyof typeof GraphNodeEvent |
  keyof typeof GraphEdgeEvent |
  keyof typeof GraphCanvasEvent |
  keyof typeof GraphCustomEvent;

export type GraphReactEvent = GraphCommonEvent | GraphNodeEvent | GraphEdgeEvent | GraphCanvasEvent | GraphCustomEvent;
