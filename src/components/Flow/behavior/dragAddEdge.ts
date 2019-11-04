import { guid } from '@/utils';
import { GraphType, ItemType } from '@/common/constants';
import { Node, Edge, Behavior, GraphEvent } from '@/common/interfaces';
import behaviorManager from '@/common/behaviorManager';

interface DragAddEdgeBehavior extends Behavior {
  edge?: Edge;
  addingEdge?: boolean;
  sourceNode?: Node;
  isAnchor(e: GraphEvent): boolean;
  notThis(e: GraphEvent): boolean;
  onMousedown(e: GraphEvent): void;
  onMousemove(e: GraphEvent): void;
  onMouseup(e: GraphEvent): void;
}

interface DefaultConfig {
  edgeType: string;
}

const dragAddEdge: DragAddEdgeBehavior & ThisType<DragAddEdgeBehavior & DefaultConfig> = {
  graphType: GraphType.Flow,

  getDefaultCfg(): DefaultConfig {
    return {
      edgeType: 'flowSmooth',
    };
  },

  getEvents() {
    return {
      mousedown: 'onMousedown',
      mousemove: 'onMousemove',
      mouseup: 'onMouseup',
    };
  },

  isAnchor(e: GraphEvent) {
    const { target } = e;
    const targetName = target.get('className');
    if (targetName == 'anchor') return true;
    else return false;
  },

  notThis(e: GraphEvent) {
    const node = e.item;
    const model = node.getModel();
    if (this.edge.getSource().get('id') === model.id) return false;
    return true;
  },

  shouldBegin(e: GraphEvent) {
    const { target } = e;
    const targetName = target.get('className');
    // 如果点击的不是锚点就结束
    if (targetName === 'anchor') return true;
    else return false;
  },

  onMousedown(e) {
    const { edgeType } = this;
    if (!this.shouldBegin.call(this, e)) return;
    const node = e.item as Node;
    const graph = this.graph;
    this.sourceNode = node;
    graph.getNodes().forEach(node => {
      if (node.get('id') !== node.get('id')) graph.setItemState(node, 'addingEdge', true);
      else graph.setItemState(node, 'addingSource', true);
    });

    const point = { x: e.x, y: e.y };
    const model = node.getModel();
    // 如果在添加边的过程中，再次点击另一个节点，结束边的添加
    // 点击节点，触发增加边
    if (!this.addingEdge && !this.edge) {
      const item = {
        id: guid(),
        shape: edgeType,
        source: model.id,
        target: point,
        sourceAnchor: e.target.get('index'),
      };
      this.edge = graph.addItem(ItemType.Edge, item);
      this.addingEdge = true;
    }
  },

  onMousemove(e) {
    if (this.addingEdge && this.edge) {
      const point = { x: e.x, y: e.y };
      !this.edge.hasState('drag') && this.graph.setItemState(this.edge, 'drag', true);
      if (this.isAnchor(e) && this.notThis(e)) {
        const node = e.item;
        const model = node.getModel();
        this.graph.updateItem(this.edge, {
          targetAnchor: e.target.get('index'),
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

  onMouseup(e) {
    const { graph, sourceNode } = this;
    const node = e.item;
    // 隐藏所有节点的锚点
    const hideAnchors = () => {
      graph.getNodes().forEach(node => {
        // 清楚所有节点状态
        graph.clearItemStates(node);
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
    if (!this.shouldBegin.call(this, e)) {
      // 拖拽连线时，未在锚点上放开则取消连线过程
      if (this.edge && this.addingEdge) removEdge();
      return;
    }
    const model = node.getModel();
    if (this.addingEdge && this.edge) {
      // 禁止自己连自己
      if (!this.notThis(e)) {
        removEdge();
        return;
      }
      this.graph.setItemState(this.edge, 'drag', false);
      graph.updateItem(this.edge, {
        targetAnchor: e.target.get('index'),
        target: model.id,
      });
      this.edge = null;
      this.addingEdge = false;
      hideAnchors();
    }
  },
};

behaviorManager.register('drag-add-edge', dragAddEdge);
