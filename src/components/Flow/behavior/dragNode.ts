import { GraphType, ItemType, ItemState } from '@/common/constants';
import { G } from '@antv/g6/types/g';
import { Behavior, GraphEvent } from '@/common/interfaces';
import behaviorManager from '@/common/behaviorManager';
import globalStyle from '../common/globalStyle';

const { delegateStyle } = globalStyle;
const { body } = document;

interface DragNodeBehavior extends Behavior {
  onDragStart(e: GraphEvent): void;
  onDrag(e: GraphEvent): void;
  onDragEnd(e: GraphEvent): void;
  onOutOfRange(e: GraphEvent): void;
  _update(e: GraphEvent, force: boolean): void;
  _updateDelegate(item: G6.Node, x: number, y: number): void;
  drawMultipleDelegate(): void;
}

interface DefaultConfig {
  updateEdge: boolean;
  showDelegate: boolean;
  delegateStyle: object;
}
interface ThisProps {
  origin?: {
    x: number;
    y: number;
  };
  target?: G6.Item;
  selectedNodes?: G6.Node[];
  multipleDelegate: G.Shape;
  fn: EventListenerObject;
  mdOrigin: { x: number; y: number };
}

const dragNode: DragNodeBehavior & ThisType<DragNodeBehavior & DefaultConfig & ThisProps> = {
  graphType: GraphType.Flow,

  getEvents() {
    return {
      'node:dragstart': 'onDragStart',
      'node:drag': 'onDrag',
      'node:dragend': 'onDragEnd',
      'canvas:mouseleave': 'onOutOfRange',
    };
  },

  getDefaultCfg(): DefaultConfig {
    return {
      updateEdge: true,
      showDelegate: true,
      delegateStyle: {},
    };
  },

  shouldBegin(e) {
    // 锚点上不触发拖拽；
    if (e.target.get('className') == 'anchor') return false;
    else return true;
  },

  onDragStart(e) {
    if (!this.shouldBegin(e)) return;
    const { graph } = this;
    this.origin = {
      x: e.x,
      y: e.y,
    };
    this.target = e.item;
    // 单节点拖拽当做多节点拖拽的特例
    this.selectedNodes = graph.findAllByState(ItemType.Node, ItemState.Selected) || [];
    if (this.selectedNodes.length == 0) this.selectedNodes.push(e.item as G6.Node);
  },

  onDrag(e) {
    if (!this.shouldUpdate.call(this, e)) return;
    if (!this.origin) return;
    this._update(e, false);
  },

  onDragEnd(e) {
    if (!this.shouldEnd.call(this, e)) return;
    if (!this.origin) return;
    const { selectedNodes } = this;
    // 清理委托图形与对齐线
    selectedNodes
      .map((item: G6.Node) => item.get('delegateShape'))
      .forEach((ds: any) => {
        if (ds) {
          ['HTL', 'HCL', 'HBL', 'VLL', 'VCL', 'VRL'].forEach(lname => {
            ds['_' + lname] && ds['_' + lname].remove();
            ds['_' + lname] = void 0;
          });
          ds.remove();
        }
      });

    selectedNodes.forEach((node: G6.Node) => node.set('delegateShape', null));
    this._update(e, true);
    if (this.multipleDelegate) {
      this.multipleDelegate.remove(false);
      this.multipleDelegate = void 0;
    }
    this.origin = null;
    // 终止时需要判断此时是否在监听画布外的 mouseup 事件，若有则解绑
    const fn = this.fn;
    if (fn) {
      body.removeEventListener('mouseup', fn, false);
      this.fn = null;
    }
  },

  // 若在拖拽时，鼠标移出画布区域，此时放开鼠标无法终止 drag 行为。在画布外监听 mouseup 事件，放开则终止
  onOutOfRange(e) {
    const self = this;
    if (this.origin) {
      const canvasElement = self.graph.get('canvas').get('el');
      const fn: any = (ev: GraphEvent) => {
        if (ev.target !== canvasElement) {
          self.onDragEnd(e);
        }
      };
      this.fn = fn;
      body.addEventListener('mouseup', fn, false);
    }
  },

  _update(e: GraphEvent, force: boolean) {
    const { selectedNodes, showDelegate, origin } = this;
    const offsetX = e.x - origin.x;
    const offsetY = e.y - origin.y;
    const moveXY = (item: G6.Node) => {
      const model = item.getModel();
      const bbox = item.getBBox();
      const x = model.x - bbox.width / 2 + offsetX;
      const y = model.y - bbox.height / 2 + offsetY;
      return { x, y };
    };
    if (showDelegate && !force) {
      // 当选中的节点大于 1 时，绘制一个大的矩形框住所有节点
      if (selectedNodes.length > 1 && !this.multipleDelegate) this.drawMultipleDelegate();
      // this._updateDelegate(item, x, y);
      // 更新所有委托图形的位置;
      selectedNodes.forEach((node: G6.Node) => {
        const { x, y } = moveXY(node);
        this._updateDelegate(node, x, y);
      });

      if (this.multipleDelegate) {
        const { x, y } = this.mdOrigin;
        this.multipleDelegate.attr({ x: x + offsetX, y: y + offsetY });
      }
      this.graph.paint();
      return;
    }
    if (this.updateEdge) {
      selectedNodes.forEach((node: G6.Node) => {
        const model = node.getModel();
        const x = model.x + offsetX;
        const y = model.y + offsetY;
        this.graph.updateItem(node, { x, y });
      });
    } else {
      selectedNodes.forEach((node: G6.Node) => {
        const model = node.getModel();
        const x = model.x + offsetX;
        const y = model.y + offsetY;
        node.updatePosition({ x, y });
      });
      this.graph.paint();
    }
  },

  _updateDelegate(item: G6.Node, x: number, y: number) {
    let shape = item.get('delegateShape');
    const bbox = item.get('keyShape').getBBox();

    if (!shape) {
      // 在组外画框框
      const parent = this.graph.get('group');
      const attrs = delegateStyle;
      // model上的x, y是相对于图形中心的，delegateShape是g实例，x,y是绝对坐标
      shape = parent.addShape('rect', {
        attrs: {
          width: bbox.width,
          height: bbox.height,
          x,
          y,
          ...attrs,
        },
      });
      shape.set('capture', false);
      item.set('delegateShape', shape);
    }

    // 拖拽过程中处于吸附状态
    const isAttach = () =>
      (shape.attachFlag === 'Y' && Math.abs(y - shape.attr('y')) <= shape.attachTolerance) ||
      (shape.attachFlag === 'X' && Math.abs(x - shape.attr('x')) <= shape.attachTolerance);

    const setAttr = ({ x, y }: { x?: number; y?: number }) => {
      if (x && y) shape.attr({ x, y });
      if (x) shape.attr({ x });
      if (y) shape.attr({ y });
    };
    if (isAttach()) {
      if (shape.attachFlag === 'Y') setAttr({ x });
      if (shape.attachFlag === 'X') setAttr({ y });
    } else {
      setAttr({ x, y });
      // 超出范围取消吸附状态
      shape.attachFlag = '';
    }
  },

  // 绘制所有选中节点的最小外接矩形
  drawMultipleDelegate() {
    if (this.multipleDelegate) return;
    const nodes = this.selectedNodes;
    const xs: number[] = [];
    const ys: number[] = [];
    nodes.forEach((n: G6.Node) => {
      const { minX, minY, maxX, maxY } = n.getBBox();
      xs.push(minX, maxX);
      ys.push(minY, maxY);
    });
    // 矩形左上角
    const minX = Math.min(...xs);
    const minY = Math.min(...ys);
    const maxX = Math.max(...xs);
    const maxY = Math.max(...ys);
    const parent = this.graph.get('group');
    const attrs = delegateStyle;
    const padding = 20;
    this.mdOrigin = { x: minX - padding, y: minY - padding };

    this.multipleDelegate = parent.addShape('rect', {
      attrs: {
        width: Math.floor(maxX - minX) + padding * 2,
        height: Math.floor(maxY - minY) + padding * 2,
        x: minX - padding,
        y: minY - padding,
        ...attrs,
        stroke: '#ff9800',
      },
    });
  },
};

behaviorManager.register('drag-node', dragNode);
