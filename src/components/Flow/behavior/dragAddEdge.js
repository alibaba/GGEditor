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
    graph.getNodes().forEach(n => {
      if (n.get('id') !== node.get('id')) graph.setItemState(n, 'addingEdge', true);
      else graph.setItemState(n, 'addingSource', true);
    });

    const point = { x: ev.x, y: ev.y };
    const model = node.getModel();
    // 如果在添加边的过程中，再次点击另一个节点，结束边的添加
    // 点击节点，触发增加边
    if (!this.addingEdge && !this.edge) {
      this.edge = graph.addItem('edge', {
        shape: 'flowSmooth',
        source: model.id,
        target: point,
        sourceAnchor: ev.target.get('index')
      });
      this.addingEdge = true;
    }
  },
  onMousemove(ev) {
    const point = { x: ev.x, y: ev.y };
    if (this.addingEdge && this.edge) {
      // 增加边的过程中，移动时边跟着移动
      this.graph.updateItem(this.edge, {
        target: point
      });
    }
  },
  onMouseup(ev) {
    const graph = this.graph;
    const node = ev.item;

    // 隐藏所有节点的锚点
    const hideAnchors = () => {
      graph.getNodes().forEach(n => {
        // 清楚所有节点状态
        graph.clearItemStates(n);
        graph.refreshItem(n);
      });
    };

    if (!this.shouldBegin(ev)) {
      // 拖拽连线时，未在锚点上放开则取消连线过程
      if (this.edge && this.addingEdge) {
        graph.remove(this.edge);
        this.edge = null;
        this.addingEdge = false;
        hideAnchors();
      }
      return;
    }

    const model = node.getModel();

    if (this.addingEdge && this.edge) {
      graph.updateItem(this.edge, {
        targetAnchor: ev.target.get('index'),
        target: model.id
      });
      this.edge = null;
      this.addingEdge = false;
    }
    hideAnchors();
  }
});
