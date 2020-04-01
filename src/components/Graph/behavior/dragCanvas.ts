import { Behavior, GraphEvent } from '@/common/interfaces';
import behaviorManager from '@/common/behaviorManager';

interface DragCanvasBehavior extends Behavior {
  /** 开始拖拽坐标 */
  origin: {
    x: number;
    y: number;
  } | null;
  /** 当前按键码值 */
  keyCode: number | null;
  /** 正在拖拽标识 */
  dragging: boolean;
  /** 是否能够拖拽 */
  canDrag(): boolean;
  /** 更新当前窗口 */
  updateViewport(e: GraphEvent): void;
  /** 处理画布拖拽开始 */
  handleCanvasDragStart(e: GraphEvent): void;
  /** 处理画布拖拽 */
  handleCanvasDrag(e: GraphEvent): void;
  /** 处理画布拖拽结束 */
  handleCanvasDragEnd(e?: GraphEvent): void;
  /** 处理窗口鼠标弹起 */
  handleWindowMouseUp: (e: MouseEvent) => void | null;
  /** 处理鼠标移出画布 */
  handleCanvasMouseLeave(e: GraphEvent): void;
  /** 处理画布鼠标右键 */
  handleCanvasContextMenu(e: GraphEvent): void;
  /** 处理按键按下 */
  handleKeyDown(e: KeyboardEvent): void;
  /** 处理按键抬起 */
  handleKeyUp(e: KeyboardEvent): void;
}

interface DefaultConfig {
  /** 允许拖拽 KeyCode */
  allowKeyCode: number[];
  /** 禁止拖拽 KeyCode */
  notAllowKeyCode: number[];
}

const dragCanvasBehavior: DragCanvasBehavior & ThisType<DragCanvasBehavior & DefaultConfig> = {
  origin: null,

  keyCode: null,

  dragging: false,

  handleWindowMouseUp: null,

  getDefaultCfg(): DefaultConfig {
    return {
      allowKeyCode: [],
      notAllowKeyCode: [16],
    };
  },

  getEvents() {
    return {
      'canvas:dragstart': 'handleCanvasDragStart',
      'canvas:drag': 'handleCanvasDrag',
      'canvas:dragend': 'handleCanvasDragEnd',
      'canvas:mouseleave': 'handleCanvasMouseLeave',
      'canvas:contextmenu': 'handleCanvasContextMenu',
      keydown: 'handleKeyDown',
      keyup: 'handleKeyUp',
    };
  },

  canDrag() {
    const { keyCode, allowKeyCode, notAllowKeyCode } = this;

    let isAllow = !!!allowKeyCode.length;

    if (!keyCode) {
      return isAllow;
    }

    if (allowKeyCode.length && allowKeyCode.includes(keyCode)) {
      isAllow = true;
    }

    if (notAllowKeyCode.includes(keyCode)) {
      isAllow = false;
    }

    return isAllow;
  },

  updateViewport(e) {
    const { clientX, clientY } = e;

    const dx = clientX - this.origin.x;
    const dy = clientY - this.origin.y;

    this.origin = {
      x: clientX,
      y: clientY,
    };

    this.graph.translate(dx, dy);
    this.graph.paint();
  },

  handleCanvasDragStart(e) {
    if (!this.shouldBegin.call(this, e)) {
      return;
    }

    if (!this.canDrag()) {
      return;
    }

    this.origin = {
      x: e.clientX,
      y: e.clientY,
    };

    this.dragging = false;
  },

  handleCanvasDrag(e) {
    if (!this.shouldUpdate.call(this, e)) {
      return;
    }

    if (!this.canDrag()) {
      return;
    }

    if (!this.origin) {
      return;
    }

    if (!this.dragging) {
      this.dragging = true;
    } else {
      this.updateViewport(e);
    }
  },

  handleCanvasDragEnd(e) {
    if (!this.shouldEnd.call(this, e)) {
      return;
    }

    if (!this.canDrag()) {
      return;
    }

    this.origin = null;
    this.dragging = false;

    if (this.handleWindowMouseUp) {
      document.body.removeEventListener('mouseup', this.handleWindowMouseUp, false);
      this.handleWindowMouseUp = null;
    }
  },

  handleCanvasMouseLeave() {
    const canvasElement = this.graph.get('canvas').get('el');

    if (this.handleWindowMouseUp) {
      return;
    }

    this.handleWindowMouseUp = e => {
      if (e.target !== canvasElement) {
        this.handleCanvasDragEnd();
      }
    };

    document.body.addEventListener('mouseup', this.handleWindowMouseUp, false);
  },

  handleCanvasContextMenu() {
    this.origin = null;
    this.dragging = false;
  },

  handleKeyDown(e) {
    this.keyCode = e.keyCode || e.which;
  },

  handleKeyUp() {
    this.keyCode = null;
  },
};

behaviorManager.register('drag-canvas', dragCanvasBehavior);
