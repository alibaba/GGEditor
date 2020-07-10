import isPlainObject from 'lodash/isPlainObject';
import { guid } from '@/utils';
import { ItemType, ItemState, GraphType, AnchorPointState, GraphCustomEvent } from '@/common/constants';
import { Node, Edge, Behavior, GraphEvent, EdgeModel, AnchorPoint } from '@/common/interfaces';
import behaviorManager from '@/common/behaviorManager';

interface DragAddEdgeBehavior extends Behavior {
  edge: Edge | null;
  isEnabledAnchorPoint(e: GraphEvent): boolean;
  isNotSelf(e: GraphEvent): boolean;
  canFindTargetAnchorPoint(e: GraphEvent): boolean;
  shouldAddDelegateEdge(e: GraphEvent): boolean;
  shouldAddRealEdge(): boolean;
  handleNodeMouseEnter(e: GraphEvent): void;
  handleNodeMouseLeave(e: GraphEvent): void;
  handleNodeMouseDown(e: GraphEvent): void;
  handleMouseMove(e: GraphEvent): void;
  handleMouseUp(e: GraphEvent): void;
}

interface DefaultConfig {
  /** 边线类型 */
  edgeType: string;
  /** 获取来源节点锚点状态 */
  getAnchorPointStateOfSourceNode(sourceNode: Node, sourceAnchorPoint: AnchorPoint): AnchorPointState;
  /** 获取目标节点锚点状态 */
  getAnchorPointStateOfTargetNode(
    sourceNode: Node,
    sourceAnchorPoint: AnchorPoint,
    targetNode: Node,
    targetAnchorPoint: AnchorPoint,
  ): AnchorPointState;
}

const dragAddEdgeBehavior: DragAddEdgeBehavior & ThisType<DragAddEdgeBehavior & DefaultConfig> = {
  edge: null,

  graphType: GraphType.Flow,

  getDefaultCfg(): DefaultConfig {
    return {
      edgeType: 'bizFlowEdge',
      getAnchorPointStateOfSourceNode: () => AnchorPointState.Enabled,
      getAnchorPointStateOfTargetNode: () => AnchorPointState.Enabled,
    };
  },

  getEvents() {
    return {
      'node:mouseenter': 'handleNodeMouseEnter',
      'node:mouseleave': 'handleNodeMouseLeave',
      'node:mousedown': 'handleNodeMouseDown',
      mousemove: 'handleMouseMove',
      mouseup: 'handleMouseUp',
    };
  },

  isEnabledAnchorPoint(e) {
    const { target } = e;

    return !!target.get('isAnchorPoint') && target.get('anchorPointState') === AnchorPointState.Enabled;
  },

  isNotSelf(e) {
    const { edge } = this;
    const { item } = e;

    return item.getModel().id !== edge.getSource().getModel().id;
  },

  getTargetNodes(sourceId: string) {
    const { graph } = this;

    const nodes = graph.getNodes();

    return nodes.filter(node => node.getModel().id !== sourceId);
  },

  canFindTargetAnchorPoint(e) {
    return this.isEnabledAnchorPoint(e) && this.isNotSelf(e);
  },

  shouldAddDelegateEdge(e) {
    return this.isEnabledAnchorPoint(e);
  },

  shouldAddRealEdge() {
    const { edge } = this;

    const target = edge.getTarget();

    return !isPlainObject(target);
  },

  handleNodeMouseEnter(e) {
    const { graph, getAnchorPointStateOfSourceNode } = this;

    const sourceNode = e.item as Node;
    const sourceAnchorPoints = sourceNode.getAnchorPoints() as AnchorPoint[];
    const sourceAnchorPointsState = [];

    sourceAnchorPoints.forEach(sourceAnchorPoint => {
      sourceAnchorPointsState.push(getAnchorPointStateOfSourceNode(sourceNode, sourceAnchorPoint));
    });

    sourceNode.set('anchorPointsState', sourceAnchorPointsState);

    graph.setItemState(sourceNode, ItemState.ActiveAnchorPoints, true);
  },

  handleNodeMouseLeave(e) {
    const { graph, edge } = this;
    const { item } = e;

    if (!edge) {
      item.set('anchorPointsState', []);
      graph.setItemState(item, ItemState.ActiveAnchorPoints, false);
    }
  },

  handleNodeMouseDown(e) {
    if (!this.shouldBegin(e) || !this.shouldAddDelegateEdge(e)) {
      return;
    }

    const { graph, edgeType, getAnchorPointStateOfTargetNode } = this;
    const { target } = e;

    const sourceNode = e.item as Node;
    const sourceNodeId = sourceNode.getModel().id;
    const sourceAnchorPointIndex = target.get('anchorPointIndex');
    const sourceAnchorPoint = sourceNode.getAnchorPoints()[sourceAnchorPointIndex] as AnchorPoint;

    const model: EdgeModel = {
      id: guid(),
      type: edgeType,
      source: sourceNodeId,
      sourceAnchor: sourceAnchorPointIndex,
      target: {
        x: e.x,
        y: e.y,
      } as any,
    };

    this.edge = graph.addItem(ItemType.Edge, model);

    graph.getNodes().forEach(targetNode => {
      if (targetNode.getModel().id === sourceNodeId) {
        return;
      }

      const targetAnchorPoints = targetNode.getAnchorPoints() as AnchorPoint[];
      const targetAnchorPointsState = [];

      targetAnchorPoints.forEach(targetAnchorPoint => {
        targetAnchorPointsState.push(
          getAnchorPointStateOfTargetNode(sourceNode, sourceAnchorPoint, targetNode, targetAnchorPoint),
        );
      });

      targetNode.set('anchorPointsState', targetAnchorPointsState);

      graph.setItemState(targetNode, ItemState.ActiveAnchorPoints, true);
    });
  },

  handleMouseMove(e) {
    const { graph, edge } = this;

    if (!edge) {
      return;
    }

    if (this.canFindTargetAnchorPoint(e)) {
      const { item, target } = e;

      const targetId = item.getModel().id;
      const targetAnchor = target.get('anchorPointIndex');

      graph.updateItem(edge, {
        target: targetId,
        targetAnchor,
      });
    } else {
      graph.updateItem(edge, {
        target: {
          x: e.x,
          y: e.y,
        } as any,
        targetAnchor: undefined,
      });
    }
  },

  handleMouseUp() {
    const { graph, edge } = this;

    if (!edge) {
      return;
    }

    if (!this.shouldAddRealEdge()) {
      graph.removeItem(this.edge);
    }

    graph.emit(GraphCustomEvent.onAfterConnect, {
      edge: this.edge,
    });

    this.edge = null;

    graph.getNodes().forEach(node => {
      node.set('anchorPointsState', []);
      graph.setItemState(node, ItemState.ActiveAnchorPoints, false);
    });
  },
};

behaviorManager.register('drag-add-edge', dragAddEdgeBehavior);
