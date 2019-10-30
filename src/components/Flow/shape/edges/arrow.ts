/**
 * @author huangtonger@aliyun.com
 */
import globalStyle from '../../common/globalStyle';
const { edgeStyle, arrowRadius } = globalStyle;

//  在线上绘制箭头
function drawArrow(item, group, keyShape, path) {
  const endPoint = { ...item.endPoint };
  if (!endPoint) return;
  const segments = keyShape.get('segments');
  const l = segments.length;
  const lastSegment = segments[l - 1];

  if (!lastSegment || !lastSegment.endTangent) {
    return;
  }
  const endTangent = lastSegment.endTangent();
  if (endTangent[0] === 0 && endTangent[1] === 0) {
    return;
  }
  const normalizeET = normalize([], endTangent);
  const reviseX = arrowRadius * normalizeET[0];
  const reviseY = arrowRadius * normalizeET[1];
  path = parsePathString(path);
  const lastSegmentPath = path[path.length - 1];
  lastSegmentPath[lastSegmentPath.length - 2] -= reviseX;
  lastSegmentPath[lastSegmentPath.length - 1] -= reviseY;
  keyShape.attr('path', path);
  endPoint.x -= reviseX;
  endPoint.y -= reviseY;
  // 画箭头
  const arrow = group.addShape('marker', {
    attrs: {
      symbol: (x, y, r) => {
        const diffY = r / 1.6;
        return [['M', x, y - diffY], ['L', x + arrowRadius, y], ['L', x, y + diffY], ['z']];
      },
      radius: arrowRadius,
      fill: edgeStyle.stroke,
    },
  });
  // 调整箭头方向
  arrowTo(arrow, endPoint.x, endPoint.y, 0, 0, endTangent[0], endTangent[1]);
  return arrow;
}

function arrowTo(element, x, y, x0, y0, x1, y1) {
  const v0 = [1, 0];
  const v = [x1 - x0, y1 - y0];
  const angle = angleTo(v, v0, true);
  element.transform([['r', angle], ['t', x, y]]);
  return element;
}

function angleTo(v1, v2, direct) {
  const angle = calcAngle(v1, v2);
  const angleLargeThanPi = direction(v1, v2) >= 0;
  if (direct) {
    if (angleLargeThanPi) return Math.PI * 2 - angle;
    else return angle;
  } else {
    if (angleLargeThanPi) return angle;
    else return Math.PI * 2 - angle;
  }
}

// v1 v2 夹角
function calcAngle(v1, v2) {
  const theta = dot(v1, v2) / (vlength(v1) * vlength(v2));
  return Math.acos(clamp(theta, -1, 1));
}

// v1 到 v2 夹角的方向
function direction(v1, v2) {
  // >= 0 顺时针 < 0 逆时针
  return v1[0] * v2[1] - v2[0] * v1[1];
}

function dot(v1, v2) {
  return v1[0] * v2[0] + v1[1] * v2[1];
}

function vlength(v) {
  return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
}

function clamp(a, min, max) {
  if (a < min) return min;
  else if (a > max) return max;
  else return a;
}

function normalize(out, a) {
  const x = a[0],
    y = a[1];
  let len = x * x + y * y;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
  }
  return out;
}

// @reference https://github.com/antvis/util/blob/master/src/path/parse-path-string.js
// Parses given path string into an array of arrays of path segments
function parsePathString(pathString) {
  const SPACES =
    '\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029';

  const PATH_COMMAND = new RegExp(
    '([a-z])[' + SPACES + ',]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[' + SPACES + ']*,?[' + SPACES + ']*)+)',
    'ig',
  );
  const PATH_VALUES = new RegExp('(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[' + SPACES + ']*,?[' + SPACES + ']*', 'ig');

  if (!pathString) {
    return null;
  }

  if (typeof pathString === typeof []) {
    return pathString;
  }
  const paramCounts = {
    a: 7,
    c: 6,
    o: 2,
    h: 1,
    l: 2,
    m: 2,
    r: 4,
    q: 4,
    s: 4,
    t: 2,
    v: 1,
    u: 3,
    z: 0,
  };
  const data = [];

  String(pathString).replace(PATH_COMMAND, (a, b, c) => {
    const params = [];
    let name = b.toLowerCase();
    c.replace(PATH_VALUES, function(a, b) {
      b && params.push(+b);
    });
    if (name === 'm' && params.length > 2) {
      data.push([b].concat(params.splice(0, 2)));
      name = 'l';
      b = b === 'm' ? 'l' : 'L';
    }
    if (name === 'o' && params.length === 1) {
      data.push([b, params[0]]);
    }
    if (name === 'r') {
      data.push([b].concat(params));
    } else {
      while (params.length >= paramCounts[name]) {
        data.push([b].concat(params.splice(0, paramCounts[name])));
        if (!paramCounts[name]) {
          break;
        }
      }
    }
    return pathString;
  });

  return data;
}

export default drawArrow;
