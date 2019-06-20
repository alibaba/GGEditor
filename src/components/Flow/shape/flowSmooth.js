/**
 * @fileOverview smooth edges
 * @author leungwensen@gmail.com
 * @reference https://lark.alipay.com/antv/blog/an-approach-to-draw-smooth-cubic-bezier-curves-in-graphs
 * */
import G6 from '@antv/g6';
import globalStyle from '../common/globalStyle';

const { edgeStyle } = globalStyle;

function _isHorizontal(port, bbox) {
  const dx = Math.abs(port.x - bbox.centerX);
  const dy = Math.abs(port.y - bbox.centerY);
  return dx / bbox.width > dy / bbox.height;
}

function _getOffset(cx, sx, tx, offset) {
  const minOffset = offset ? offset / 2 : 30;
  const maxOffset = offset;
  if ((cx <= sx && sx <= tx) || (cx >= sx && sx >= tx)) {
    const dx = (tx - sx) / 2;
    const abs = Math.abs(dx);
    if (dx === 0) {
      if (cx === sx) {
        return 0;
      }
      return ((sx - cx) / Math.abs(sx - cx)) * minOffset;
    }
    if (abs > maxOffset) {
      const temp = (dx / abs) * maxOffset;
      return Math.abs(temp) < minOffset ? (dx / abs) * minOffset : temp;
    }
    if (abs < minOffset) {
      return (dx / abs) * minOffset;
    }
    return dx;
  }
  let dx = minOffset;
  if (Math.abs(sx - tx) < 2 * Math.abs(sx - cx)) {
    dx = (offset * Math.abs(sx - tx)) / (2 * Math.abs(sx - cx));
  } else {
    dx = offset;
  }
  if (dx > maxOffset) {
    dx = maxOffset;
  }
  if (dx < minOffset) {
    dx = minOffset;
  }
  return sx > cx ? dx : -dx;
}

function _getOffsetPoint(node, port, targetPort, anotherNode) {
  const bbox = node.getBBox();
  const isHorizontal = _isHorizontal(port, bbox);
  let dx;
  let dy;
  dx = dy = 0;
  let offset = Math.min(bbox.height, bbox.width);
  if (anotherNode && anotherNode.bbox) {
    offset = Math.min(offset, anotherNode.bbox.height, anotherNode.bbox.width);
  }
  if (isHorizontal) {
    dx = _getOffset(bbox.centerX, port.x, targetPort.x, offset);
  } else {
    dy = _getOffset(bbox.centerY, port.y, targetPort.y, offset);
  }
  return {
    x: port.x + dx,
    y: port.y + dy,
  };
}

const TINY_OFFSET_SCALE = 0.1;
function _getStraightOffsetPoint(start, end) {
  // to get a tiny offset to provide angle for arrows
  const x0 = start.x;
  const y0 = start.y;
  const x1 = end.x;
  const y1 = end.y;
  return {
    x: x0 + (x1 - x0) * TINY_OFFSET_SCALE,
    y: y0 + (y1 - y0) * TINY_OFFSET_SCALE,
  };
}

function getCubicControlPoints(from, to, source, target) {
  // algorithm: https://lark.alipay.com/antv/blog/an-approach-to-draw-smooth-cubic-bezier-curves-in-graphs
  return [
    source && source.getBBox()
      ? _getOffsetPoint(source, from, to, target)
      : _getStraightOffsetPoint(from, to),
    target && target.getBBox()
      ? _getOffsetPoint(target, to, from, source)
      : _getStraightOffsetPoint(to, from),
  ];
}

/**
 * get cubic bezier curve
 * @param {array}    points set of points
 * @param {Node}     source source node
 * @param {Node}     target target node
 * @return {array}   path   path segments
 * */
function getCubicBezierCurve(points, source, target) {
  const start = points[0];
  const end = points[points.length - 1];
  const M = ['M', start.x, start.y];
  // automatically get the rest two control points
  const controlPoints = getCubicControlPoints(start, end, source, target);
  const sub = ['C'];
  const path = [M];

  controlPoints.forEach(point => sub.push(point.x, point.y));
  sub.push(end.x, end.y);
  path.push(sub);
  return path;
}

G6.registerEdge(
  'flowSmooth',
  {
    draw(cfg, group) {
      const path = this.getPath(cfg);
      return group.addShape('path', {
        attrs: { path, ...edgeStyle },
      });
    },
    getPath(item) {
      const points = [item.startPoint, item.endPoint];
      const source = item.sourceNode;
      const target = item.targetNode;
      return getCubicBezierCurve(points, source, target);
    },
  },
);


