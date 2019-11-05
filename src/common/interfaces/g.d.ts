import { G } from '@antv/g6/types/g';

declare namespace G {
  interface Box extends G.Box {
    centerX: number;
    centerY: number;
    width: number;
    height: number;
  }

  interface Shape extends G.Shape {
    getBBox(): Box;
  }

  interface Group extends G.Group {
    getBBox(): Box;
    addShape(type: G.ShapeType, cfg: G.Cfg): Shape;
    findByClassName(className: string): Shape;
  }
}
