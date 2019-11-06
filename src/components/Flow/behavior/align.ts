import { GraphType } from '@/common/constants';
import { GraphEvent, Behavior } from '@/common/interfaces';
import behaviorManager from '@/common/behaviorManager';
import globalStyle from '../common/globalStyle';

const { alignLine } = globalStyle;

function normalize(out: number[], a: number[]) {
  const x = a[0];
  const y = a[1];
  let len = x * x + y * y;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
  }
  return out;
}

function dot(a: number[], b: number[]) {
  return a[0] * b[0] + a[1] * b[1];
}

function pointLineDistance(line: number[], point: number[]) {
  const [x, y] = point;
  const [x1, y1, x2, y2] = line;
  const d = [x2 - x1, y2 - y1];
  if (d.every(p => p === 0)) return NaN;
  const u = [-d[1], d[0]];

  normalize(u, u);
  const a = [x - x1, y - y1];
  return dot(a, u);
}

interface Point {
  x: number;
  y: number;
}

type PointLine = [number, number, number, number];

interface Lines {
  [index: string]: PointLine;
}

interface Line {
  line: any;
  dis: number;
}

interface HVLine {
  [index: string]: Line[];
}

interface AlignBehavior extends Behavior {
  onDrag(e: GraphEvent): void;
  getBoxLine(
    e: G6.Item,
  ): {
    horizontalLines: Lines;
    verticalLines: Lines;
  };
}

interface DefaultConfig {
  enable: boolean;
  tolerance: number;
}

const alignBehavior: AlignBehavior & ThisType<AlignBehavior & DefaultConfig> = {
  graphType: GraphType.Flow,

  getDefaultCfg(): DefaultConfig {
    return {
      enable: true,
      tolerance: 5,
    };
  },

  getEvents() {
    return {
      'node:drag': 'onDrag',
    };
  },

  shouldBegin() {
    return this.enable;
  },

  onDrag(e: GraphEvent) {
    if (!this.shouldBegin()) return;
    const { graph } = this;
    const delegateShape = e.item.get('delegateShape');
    if (!delegateShape) return;
    const bbox = delegateShape.getBBox();
    const originPoint = { x: bbox.minX, y: bbox.minY };
    ['HTL', 'HCL', 'HBL', 'VLL', 'VCL', 'VRL'].forEach(lname => {
      delegateShape['_' + lname] && delegateShape['_' + lname].remove();
      delegateShape['_' + lname] = void 0;
    });
    const tc: Point = {
      x: originPoint.x + bbox.width / 2,
      y: originPoint.y,
    };
    const cc: Point = {
      x: originPoint.x + bbox.width / 2,
      y: originPoint.y + bbox.height / 2,
    };
    const bc: Point = {
      x: originPoint.x + bbox.width / 2,
      y: originPoint.y + bbox.height,
    };
    const lc: Point = {
      x: originPoint.x,
      y: originPoint.y + bbox.height / 2,
    };
    const rc: Point = {
      x: originPoint.x + bbox.width,
      y: originPoint.y + bbox.height / 2,
    };
    const nodes: G6.Item[] = graph.getNodes();
    const tolerance = this.tolerance;

    const hLines: HVLine = { HTL: [], HCL: [], HBL: [] };
    const vLines: HVLine = { VLL: [], VCL: [], VRL: [] };
    nodes.forEach(node => {
      const { horizontalLines, verticalLines } = this.getBoxLine(node);
      // 1. 计算水平或垂直方向相关的三个对齐点到节点水平线之间的距离
      // 2. 一旦距离小于误差便自动吸附，一旦吸附就终止其它对齐点的计算
      // 3. 吸附后对齐点到水平线的距离应该是无误差的，此时显示对齐线
      const calc = <T>(points: Point[], lines: Lines, arr: HVLine, axis: string) => {
        start: for (const p of points)
          for (const name of Object.keys(lines)) {
            const line = lines[name];
            const dis = pointLineDistance(line, [p.x, p.y]);
            if (Math.abs(dis) < tolerance) {
              delegateShape.attachFlag = axis;
              delegateShape.attachTolerance = tolerance;
              if (axis === 'Y') delegateShape.attr({ y: originPoint.y - dis });
              if (axis === 'X') delegateShape.attr({ x: originPoint.x + dis });
              arr[name].push({ line, dis });
              break start;
            }
          }
      };
      calc([tc, cc, bc], horizontalLines, hLines, 'Y');
      calc([lc, cc, rc], verticalLines, vLines, 'X');
    });
    // minX 排序
    ['HTL', 'HCL', 'HBL'].forEach(h => hLines[h].sort((a: any, b: any) => a.dis - b.dis));
    ['VLL', 'VCL', 'VRL'].forEach(v => vLines[v].sort((a: any, b: any) => a.dis - b.dis));

    const drawLine = (lines: any, d: any) => {
      const s = delegateShape;
      const names = d === 'H' ? ['HTL', 'HCL', 'HBL'] : ['VLL', 'VCL', 'VRL'];
      names.forEach(name => {
        if (lines[name].length > 0) {
          const line = lines[name][0]['line'];
          const xs: number[] = [bbox.minX, bbox.maxX, line[0], line[2]];
          const ys: number[] = [bbox.minY, bbox.maxY, line[1], line[3]];
          const y = line[1];
          const x = line[0];
          // 将画布转标转换为视口坐标并乘缩放比例
          const pointTS = (x: number, y: number) => graph.getCanvasByPoint(x, y);
          const hLine = pointTS(Math.min(...xs), y);
          const vLine = pointTS(x, Math.min(...ys));
          const hLineEnd = pointTS(Math.max(...xs), 0);
          const vLineEnd = pointTS(0, Math.max(...ys));
          const path =
            d === 'H' ? [['M', hLine.x, hLine.y], ['H', hLineEnd.x]] : [['M', vLine.x, vLine.y], ['V', vLineEnd.y]];
          s['_' + name] = graph.get('canvas').addShape('path', {
            attrs: { path, ...alignLine },
          });
        }
      });
    };
    drawLine(hLines, 'H');
    drawLine(vLines, 'V');
  },

  getBoxLine(item: G6.Item) {
    const bbox = item.getBBox();
    const horizontalLines: Lines = {
      HTL: [bbox.minX, bbox.minY, bbox.maxX, bbox.minY],
      HCL: [bbox.minX, bbox.centerY, bbox.maxX, bbox.centerY],
      HBL: [bbox.minX, bbox.maxY, bbox.maxX, bbox.maxY],
    };
    const verticalLines: Lines = {
      VLL: [bbox.minX, bbox.minY, bbox.minX, bbox.maxY],
      VCL: [bbox.centerX, bbox.minY, bbox.centerX, bbox.maxY],
      VRL: [bbox.maxX, bbox.minY, bbox.maxX, bbox.maxY],
    };
    return { horizontalLines, verticalLines };
  },
};

behaviorManager.register('align', alignBehavior);
