import G6 from '@antv/g6';
import { GraphEvent, Item, Shape } from '../../../common/interface';
const min = Math.min;
const max = Math.max;
const abs = Math.abs;
const hypot = Math.hypot;
G6.registerBehavior('brush-select', {
  getDefaultCfg() {
    return {
      brushStyle: {
        fill: '#EEF6FF',
        fillOpacity: 0.4,
        stroke: '#DDEEFE',
        lineWidth: 1,
      },
      onSelect() {},
      onDeselect() {},
      selectedState: 'selected',
      includeEdges: true,
      selectedEdges: [],
      selectedNodes: [],
    };
  },
  getEvents() {
    return {
      keyup: 'onKeyUp',
      keydown: 'onKeyDown',
      mousedown: 'onMouseDown',
      mousemove: 'onMouseMove',
      mouseup: 'onMouseUp',
      'canvas:click': 'clearStates',
    };
  },
  onKeyUp(e) {
    const SPACE = 32;
    if (e.keyCode === SPACE) this.keyFlag = false;
  },
  onKeyDown(e) {
    const SPACE = 32;
    if (e.keyCode === SPACE) this.keyFlag = true;
  },
  onMouseDown(e: GraphEvent) {
    if (this.keyFlag) return;
    // 按在node上面拖动时候不应该是框选
    const { item } = e;
    if (item) {
      return;
    }
    if (this.selectedNodes && this.selectedNodes.length !== 0) {
      this.clearStates();
    }

    let brush = this.brush;
    if (!brush) {
      brush = this._createBrush();
    }
    this.originPoint = { x: e.canvasX, y: e.canvasY };
    brush.attr({ width: 0, height: 0 });
    brush.show();
    this.dragging = true;
  },
  onMouseMove(e: GraphEvent) {
    const originPoint = this.originPoint;
    if (!this.dragging || hypot(originPoint.x - e.canvasX, originPoint.y - e.canvasY) < 10) {
      return;
    }
    this._updateBrush(e);
    this.graph.paint();
  },
  onMouseUp(e: GraphEvent) {
    if (!this.brush) {
      return;
    }
    const graph = this.graph;
    const autoPaint = graph.get('autoPaint');
    graph.setAutoPaint(false);
    this.brush.hide();
    this._getSelectedNodes(e);
    this.dragging = false;
    this.graph.paint();
    graph.setAutoPaint(autoPaint);
    setTimeout(() => graph.setMode('default'), 1);
  },
  clearStates() {
    const graph = this.graph;
    const autoPaint = graph.get('autoPaint');
    graph.setAutoPaint(false);
    const selectedState = this.selectedState;

    const nodes = graph.findAllByState('node', selectedState);
    const edges = graph.findAllByState('edge', selectedState);
    nodes.forEach((node: Item) => graph.setItemState(node, selectedState, false));
    edges.forEach((edge: Item) => graph.setItemState(edge, selectedState, false));

    this.selectedNodes = [];

    this.selectedEdges = [];
    this.onDeselect && this.onDeselect(this.selectedNodes, this.selectedEdges);
    graph.paint();
    graph.setAutoPaint(autoPaint);
  },
  _getSelectedNodes(e: GraphEvent) {
    const graph = this.graph;
    const state = this.selectedState;
    const originPoint = this.originPoint;
    const p1 = { x: e.x, y: e.y };
    const p2 = graph.getPointByCanvas(originPoint.x, originPoint.y);
    const left = min(p1.x, p2.x);
    const right = max(p1.x, p2.x);
    const top = min(p1.y, p2.y);
    const bottom = max(p1.y, p2.y);
    const selectedNodes: Item[] = [];
    const shouldUpdate = this.shouldUpdate;
    const selectedIds: string[] = [];
    graph.getNodes().forEach((node: Item) => {
      const bbox = node.getBBox();
      if (bbox.centerX >= left && bbox.centerX <= right && bbox.centerY >= top && bbox.centerY <= bottom) {
        if (shouldUpdate(node, 'select')) {
          selectedNodes.push(node);
          const model: any = node.getModel();
          selectedIds.push(model.id);
          graph.setItemState(node, state, true);
        }
      }
    });

    const selectedEdges: Shape[] = [];
    if (this.includeEdges) {
      // 选中边，边的source和target都在选中的节点中时才选中
      selectedNodes.forEach(node => {
        const edges = node.getEdges();
        edges.forEach(edge => {
          const model = edge.getModel();
          const { source, target } = model;
          if (selectedIds.includes(source) && selectedIds.includes(target) && shouldUpdate(edge, 'select')) {
            selectedEdges.push(edge);
            graph.setItemState(edge, this.selectedState, true);
          }
        });
      });
    }

    this.selectedEdges = selectedEdges;
    this.selectedNodes = selectedNodes;
    this.onSelect && this.onSelect(selectedNodes, selectedEdges);
  },
  _createBrush() {
    const self = this;
    const brush = self.graph.get('canvas').addShape('rect', {
      attrs: self.brushStyle,
      capture: false,
    });
    this.brush = brush;
    return brush;
  },
  _updateBrush(e: GraphEvent) {
    const originPoint = this.originPoint;
    this.brush.attr({
      width: abs(e.canvasX - originPoint.x),
      height: abs(e.canvasY - originPoint.y),
      x: min(e.canvasX, originPoint.x),
      y: min(e.canvasY, originPoint.y),
    });
  },
});
