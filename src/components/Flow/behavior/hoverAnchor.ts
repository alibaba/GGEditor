import { GraphType } from '@/common/constants';
import { Behavior, GraphEvent } from '@/common/interfaces';
import behaviorManager from '@/common/behaviorManager';

interface HoverAnchorBehavior extends Behavior {
  onEnterAnchor(e: GraphEvent): void;
  onLeaveAnchor(e: GraphEvent): void;
}

const hoverAnchor: HoverAnchorBehavior = {
  graphType: GraphType.Flow,

  getEvents() {
    return {
      mouseenter: 'onEnterAnchor',
      mouseleave: 'onLeaveAnchor',
    };
  },

  shouldBegin(e) {
    const { target } = e;
    const targetName = target.get('className');
    // 如果点击的不是锚点就结束
    if (targetName === 'anchor') return true;
    return false;
  },

  onEnterAnchor(e) {
    if (!this.shouldBegin(e)) return;
    const graph = this.graph;
    const node = e.item;
    graph.setItemState(node, 'activeAnchor', true);
  },

  onLeaveAnchor(e) {
    if (!this.shouldBegin(e)) return;
    const graph = this.graph;
    const node = e.item;
    graph.setItemState(node, 'activeAnchor', false);
  },
};

behaviorManager.register('hover-anchor', hoverAnchor);
