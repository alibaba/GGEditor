import G6 from '@antv/g6';
import { GraphEvent, Shape } from '@common/interface';
G6.registerBehavior('drag-add-edge', {
  getDefaultCfg() {
    return { edgeType: 'flowSmooth' };
  },
  getEvents() {
    return {
      mousedown: 'onMousedown',
      mousemove: 'onMousemove',
      mouseup: 'onMouseup',
    };
  },
  isAnchor(ev: GraphEvent) {
    const { target } = ev;
    const targetName = target.get('className');
    if (targetName == 'anchor') return true;
    else return false;
  },
  notThis(ev: GraphEvent) {
    const node = ev.item;
    const model = node.getModel();
    if (this.edge.getSource().get('id') === model.id) return false;
    return true;
  },
  shouldBegin(ev: GraphEvent) {
    const { target } = ev;
    const targetName = target.get('className');
    // 如果点击的不是锚点就结束
    if (targetName === 'anchor') return true;
    else return false;
  },
  onMousedown(ev: GraphEvent) {
    const { edgeType } = this;
    if (!this.shouldBegin.call(this, ev)) return;
    const node = ev.item;
    const graph = this.graph;
    this.sourceNode = node;
    graph.getNodes().forEach((n: Shape) => {
      if (n.get('id') !== node.get('id')) graph.setItemState(n, 'addingEdge', true);
      else graph.setItemState(n, 'addingSource', true);
    });

    const point = { x: ev.x, y: ev.y };
    const model = node.getModel();
    // 如果在添加边的过程中，再次点击另一个节点，结束边的添加
    // 点击节点，触发增加边
    if (!this.addingEdge && !this.edge) {
      const item = {
        shape: edgeType,
        source: model.id,
        target: point,
        sourceAnchor: ev.target.get('index'),
      };
      this.edge = graph.addItem('edge', item);
      this.addingEdge = true;
    }
  },
  onMousemove(ev: GraphEvent) {
    if (this.addingEdge && this.edge) {
      const point = { x: ev.x, y: ev.y };
      !this.edge.hasState('drag') && this.graph.setItemState(this.edge, 'drag', true);
      if (this.isAnchor(ev) && this.notThis(ev)) {
        const node = ev.item;
        const model = node.getModel();
        this.graph.updateItem(this.edge, {
          targetAnchor: ev.target.get('index'),
          target: model.id,
        });
        !this.edge.hasState('onAnchor') && this.graph.setItemState(this.edge, 'onAnchor', true);
      } else {
        this.edge.hasState('onAnchor') && this.graph.setItemState(this.edge, 'onAnchor', false);
        this.graph.updateItem(this.edge, {
          target: point,
        });
      }
    }
  },
  onMouseup(ev: GraphEvent) {
    const { graph, sourceNode } = this;
    const node = ev.item;
    // 隐藏所有节点的锚点
    const hideAnchors = () => {
      graph.getNodes().forEach((n: Shape) => {
        // 清楚所有节点状态
        graph.clearItemStates(n);
      });
      // 奇怪的问题，结束拖拽后源节点的锚点只能这样清除
      //    graph.refreshItem(sourceNode) 无效；
      graph.setItemState(sourceNode, 'addingEdge', true);
      graph.setItemState(sourceNode, 'addingEdge', false);
    };
    const removEdge = () => {
      graph.remove(this.edge);
      this.edge = null;
      this.addingEdge = false;
      hideAnchors();
    };
    if (!this.shouldBegin.call(this, ev)) {
      // 拖拽连线时，未在锚点上放开则取消连线过程
      if (this.edge && this.addingEdge) removEdge();
      return;
    }
    const model = node.getModel();
    if (this.addingEdge && this.edge) {
      // 禁止自己连自己
      if (!this.notThis(ev)) {
        removEdge();
        return;
      }
      this.graph.setItemState(this.edge, 'drag', false);
      graph.updateItem(this.edge, {
        targetAnchor: ev.target.get('index'),
        target: model.id,
      });
      graph.emit('cus_edge:add', this.edge);
      this.edge = null;
      this.addingEdge = false;
      hideAnchors();
    }
  },
});
