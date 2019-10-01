import { GraphType } from '@common/constants';
import { GraphEvent } from '@common/interface';
import behaviorManager from '@common/behaviorManager';

const abs = Math.abs;
const DRAG_OFFSET = 10;
const body = document.body;

behaviorManager.register('flow-drag-canvas', {
  graphType: GraphType.Flow,
  getDefaultCfg() {
    return {
      direction: 'both',
    };
  },
  getEvents() {
    return {
      keyup: 'onKeyUp',
      keydown: 'onKeyDown',
      'canvas:mousedown': 'onMouseDown',
      'canvas:mousemove': 'onMouseMove',
      'canvas:mouseup': 'onMouseUp',
      'canvas:click': 'onMouseUp',
      'canvas:mouseleave': 'onOutOfRange',
    };
  },
  updateViewport(e: GraphEvent) {
    const origin = this.origin;
    const clientX = +e.clientX;
    const clientY = +e.clientY;
    if (isNaN(clientX) || isNaN(clientY)) {
      return;
    }
    let dx = clientX - origin.x;
    let dy = clientY - origin.y;
    if (this.get('direction') === 'x') {
      dy = 0;
    } else if (this.get('direction') === 'y') {
      dx = 0;
    }
    this.origin = {
      x: clientX,
      y: clientY,
    };
    this.graph.translate(dx, dy);
    this.graph.paint();
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
    if (!this.keyFlag) return;
    this.origin = { x: e.clientX, y: e.clientY };
    this.dragging = false;
  },
  onMouseMove(e: GraphEvent) {
    const graph = this.graph;
    if (!this.origin) {
      return;
    }
    if (this.origin && !this.dragging) {
      if (abs(this.origin.x - e.clientX) + abs(this.origin.y - e.clientY) < DRAG_OFFSET) {
        return;
      }
      if (this.shouldBegin.call(this, e)) {
        e.type = 'dragstart';
        graph.emit('canvas:dragstart', e);
        this.dragging = true;
      }
    }
    if (this.dragging) {
      e.type = 'drag';
      graph.emit('canvas:drag', e);
    }
    if (this.shouldUpdate.call(this, e)) {
      this.updateViewport(e);
    }
  },
  onMouseUp(e: GraphEvent) {
    if (!this.dragging) {
      this.origin = null;
      return;
    }
    const graph = this.graph;
    if (this.shouldEnd.call(this, e)) {
      this.updateViewport(e);
    }
    e.type = 'dragend';
    graph.emit('canvas:dragend', e);
    this.endDrag();
  },
  endDrag() {
    if (this.dragging) {
      this.origin = null;
      this.dragging = false;
      // 终止时需要判断此时是否在监听画布外的 mouseup 事件，若有则解绑
      const fn = this.fn;
      if (fn) {
        body.removeEventListener('mouseup', fn, false);
        this.fn = null;
      }
    }
  },
  // 若在拖拽时，鼠标移出画布区域，此时放开鼠标无法终止 drag 行为。在画布外监听 mouseup 事件，放开则终止
  onOutOfRange(e: GraphEvent) {
    if (this.dragging) {
      const self = this;
      const canvasElement = self.graph.get('canvas').get('el');
      const fn = (ev: GraphEvent) => {
        if (ev.target !== canvasElement) {
          self.onMouseUp(e);
        }
      };
      this.fn = fn;
      body.addEventListener('mouseup', fn, false);
    }
  },
});
