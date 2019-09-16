import G6 from '@antv/g6';
import { GGEditorEvent } from 'gg-editor';
import behaviorManager from '../../../common/behaviorManager';

behaviorManager.registerFlowBehavior('active-edge', {
  getEvents() {
    return {
      'edge:mouseenter': 'setAllItemStates',
      'edge:mouseleave': 'clearAllItemStates',
    };
  },
  shouldBegin(e: GGEditorEvent) {
    // 拖拽过程中没有目标节点，只有 x, y 坐标，不点亮
    if (e.item.getTarget().x) return false;
    return true;
  },
  setAllItemStates(e: GGEditorEvent) {
    if (!this.shouldBegin(e)) return;
    // 1.激活当前选中的边
    const graph = this.get('graph');
    const item = e.item;
    graph.setItemState(item, 'active', true);

    // 2. 激活边关联的 sourceNode 与 targetNode
    graph.setItemState(e.item.getTarget(), 'active', true);
    graph.setItemState(e.item.getSource(), 'active', true);
  },
  clearAllItemStates(e: GGEditorEvent) {
    if (!this.shouldBegin(e)) return;
    // 状态还原
    const graph = this.get('graph');
    const item = e.item;
    graph.setItemState(item, 'active', false);
    graph.setItemState(e.item.getTarget(), 'active', false);
    graph.setItemState(e.item.getSource(), 'active', false);
  },
});
