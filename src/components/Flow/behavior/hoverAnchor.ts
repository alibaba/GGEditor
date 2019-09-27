import G6 from '@antv/g6';
import { GraphEvent } from '@common/interface';
import behaviorManager from '@common/behaviorManager';

behaviorManager.registerFlowBehavior('hover-anchor', {
  getEvents() {
    return {
      mouseenter: 'onEnterAnchor',
      mouseleave: 'onLeaveAnchor',
    };
  },
  shouldBegin(ev: GraphEvent) {
    const { target } = ev;
    const targetName = target.get('className');
    // 如果点击的不是锚点就结束
    if (targetName === 'anchor') return true;
    return false;
  },
  onEnterAnchor(e: GraphEvent) {
    if (!this.shouldBegin(e)) return;
    const graph = this.graph;
    const node = e.item;
    const { target } = e;
    graph.setItemState(node, 'activeAnchor', target);
  },
  onLeaveAnchor(e: GraphEvent) {
    if (!this.shouldBegin(e)) return;
    const graph = this.graph;
    const node = e.item;
    const { target } = e;
    graph.setItemState(node, 'activeAnchor', false);
  },
});
