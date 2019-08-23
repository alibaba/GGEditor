import G6 from '@antv/g6';
import { simplifyPolyline, getPolylinePoints, getPathWithBorderRadiusByPolyline } from './polyline';

G6.registerEdge(
  'polylineRound',
  {
    offset: 10,
    borderRadius: 9,
    getPathByPoints(points, source, target) {
      const polylinePoints = simplifyPolyline(
        getPolylinePoints(points[0], points[points.length - 1], source, target, this.offset),
      );
      // FIXME default
      return getPathWithBorderRadiusByPolyline(polylinePoints, this.borderRadius);
    },
  },
  'polyline',
);
