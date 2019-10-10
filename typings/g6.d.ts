declare module '@antv/g6' {
  type EventName =
    | 'click'
    | 'dblclick'
    | 'mouseenter'
    | 'mouseleave'
    | 'mouseover'
    | 'mouseup'
    | 'mousedown'
    | 'mousemove'
    | 'touchstart'
    | 'touchend'
    | 'contextmenu'
    | 'node:click'
    | 'node:mousedown'
    | 'canvas:mousedown'
    | 'canvas:mouseenter'
    | 'node:mousemove'
    | 'node:mouseleave'
    | 'canvas:mouseup'
    | 'canvas:click'
    | 'edge:mouseenter'
    | 'edge:mouseleave'
    | 'node:drag'
    | 'keyup'
    | 'keydown';

  type Item = Shape;

  interface NodeInfo {
    [key: string]: any;
    label?: string;
    shape: string;
    x?: number;
    y?: number;
    id?: string;
    type?: string;
  }
  interface EdgeInfo {
    [key: string]: any;
    id?: string;
    type?: string;
    shape: string;
    source: string;
    target: string;
    label?: string;
    sourceAnchor?: number;
    targetAnchor?: number;
    startPoint?: {
      id?: string;
      index?: number;
      x: number;
      y: number;
    };
    endPoint?: {
      id?: string;
      index?: number;
      x: number;
      y: number;
    };
  }

  type Model = NodeInfo | EdgeInfo;

  interface Evt {
    x: number;
    y: number;
    canvasX: number;
    canvasY: number;
    clientX: number;
    clientY: number;
    event: MouseEvent;
    target: Shape;
    type: string;
    CurrentTarget: object;
    item: Shape;
    removed: boolean;
    timeStamp: number;
    bubbles: boolean;
    defaultPrevented: boolean;
    cancelable: boolean;
  }

  interface BBox {
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
  interface Shape {
    attr(name?: string, value?: string | number): void | any;
    attr(params?: object): void;
    get(name: string): any;
    set(name: string, value: any): any;
    getBBox(): BBox;
    remove(): void;
    destroy(): void;
    translate(x: number, y: number): void;
    // 线条在拖拽过程中没有 Shape
    getTarget(): Shape & { x: number; y: number };
    getSource(): Shape;
    // 通用
    getContainer(): Group;
    getKeyShape(): Shape;
    getModel(): Model;
    getType(): string;
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
  interface CFG {
    x?: number;
    y?: number;
    label?: string;
    shape: string;
    id?: string;
  }
  interface Group {
    [key: string]: any;
    removeItem(item: Item | string): void;
    remove(item: Item | string): void;
    addItem(type: string, model: Model): Item;
    add(type: string, model: Model): Item;
    updateItem(item: Item, model: Model): Item;
    update(item: Item | string, model: Model): Item;
    findById(id: string): Item;
    findAllByState(type: string, state: string): Item[];
  }

  interface Options {
    [key: string]: any;
    // 一般会返回 keyShape
    draw?(cfg: CFG, group: Group): Group | any;
    afterDraw?(cfg: CFG, group: Group): void;
    update?(cfg: CFG, node: Group): void;
    afterUpdate?(cfg: CFG, node: Item): void;
    setState?(name: string, value: boolean, node: Item): void;
    getAnchorPoints?(): number[][];
  }
  type GEvent = { [T in EventName]?: string };

  interface Behavior {
    getEvents(): GEvent;
    getDefaultCfg?: Function;
    [key: string]: any;
  }

  export function registerNode(nodeName: string, options: Options, extendNodeName?: string): void;
  export function registerEdge(edgeName: string, options: Options, extendEdgeName?: string): void;
  export function registerBehavior(behaviorName: string, behavior: Behavior): void;

  interface GraphArgs {
    plugins?: Record<string, any>[];
    container: string;
    width: number;
    height: number;
    mode?: string;
    modes?: any;
    defaultNode?: object;
    defaultEdge?: object;
  }

  interface TreeGraphArgs extends GraphArgs {
    layout: object;
    animate: boolean;
  }

  interface GraphData {
    nodes: NodeInfo[];
    edges: EdgeInfo[];
  }

  export class Graph<T = GraphArgs> {
    constructor(initArgs: T);
    data(data: GraphData): void;
    getNodes(): Shape[];
    getCanvasByPoint(x: number, y: number): [number, number];
    removeItem(item: Item | string): void;
    remove(item: Item | string): void;
    addItem(type: string, model: Model): Item;
    add(type: string, model: Model): Item;
    updateItem(item: Item, model: Model): Item;
    update(item: Item | string, model: Model): Item;
    findById(id: string): Item;
    findAllByState(type: string, state: string): Item[];
    refreshPositions(): void;
    save(): GraphData;
    changeData(data: GraphData): void;
    setMode(mode: string): void;
    zoom(v: number): void;
    render(): Graph;
    emit(name: string, payload: any): void;
    on(name: string, f: Function): void;
  }

  export class TreeGraph extends Graph<TreeGraphArgs> {}
}
