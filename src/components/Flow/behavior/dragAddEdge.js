import G6 from '@antv/g6';
import { SHPAE_CLASSNAME_ANCHOR } from '@common/constants';

G6.registerBehavior('drag-add-edge', {
  getEvents() {
    return {
      mousedown: 'onMousedown',
      mousemove: 'onMousemove',
      mouseup: 'onMouseup',
    };
  },
  shouldBegin(ev) {
    const { target } = ev;
    const targetName = target.get('className');
    // 如果点击的不是锚点就结束
    if (targetName === SHPAE_CLASSNAME_ANCHOR) return true;
    return false;
  },
  onMousedown(ev) {
    if (!this.shouldBegin.call(this, ev)) return;
    const node = ev.item;
    const graph = this.graph;

    // 点亮其它所有节点
    graph.getNodes().forEach((n) => {
      if (n.get('id') !== node.get('id')) graph.setItemState(n, 'addingEdge', true);
    });

    const point = { x: ev.x, y: ev.y };
    const model = node.getModel();
    // 如果在添加边的过程中，再次点击另一个节点，结束边的添加
    // 点击节点，触发增加边
    if (!this.addingEdge && !this.edge) {
      this.edge = graph.addItem('edge', {
        shape: 'polyline-round',
        source: model.id,
        target: point,
        sourceAnchor: ev.target.get('index'),
      });
      this.addingEdge = true;
    }
  },
  onMousemove(ev) {
    const point = { x: ev.x, y: ev.y };
    if (this.addingEdge && this.edge) {
      // 增加边的过程中，移动时边跟着移动
      this.graph.updateItem(this.edge, {
        target: point,
      });
    }
  },
  onMouseup(ev) {
    if (!this.shouldBegin(ev)) return;
    const graph = this.graph;
    const node = ev.item;
    const model = node.getModel();
    // 隐藏所有节点的锚点

    if (this.addingEdge && this.edge) {
      graph.updateItem(this.edge, {
        targetAnchor: ev.target.get('index'),
        target: model.id,
      });
      this.edge = null;
      this.addingEdge = false;
    }
    graph.getNodes().forEach((n) => {
      graph.refreshItem(n);
      graph.setItemState(n, 'addingEdge', false);
    });
  },
});
