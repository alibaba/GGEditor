import { GraphType } from '@/common/constants';
import { Behavior, GraphEvent } from '@/common/interface';
import behaviorManager from '@/common/behaviorManager';

interface ClickSelectBehavior extends Behavior {}

interface DefaultConfig {
  multiple: boolean;
  keyCode: number;
}

const clickSelect: ClickSelectBehavior & ThisType<ClickSelectBehavior & DefaultConfig> = {
  graphType: GraphType.Flow,

  getDefaultCfg(): DefaultConfig {
    return {
      multiple: true,
      keyCode: 17,
    };
  },

  getEvents() {
    return {
      'node:click': 'onClick',
      'edge:click': 'onClick',
      'canvas:click': 'resetState',
      keyup: 'onKeyUp',
      keydown: 'onKeyDown',
    };
  },

  onClick(e: GraphEvent) {
    const self = this;
    const item = e.item;
    const graph = self.graph;
    const autoPaint = graph.get('autoPaint');
    graph.setAutoPaint(false);
    if (!self.keydown || !self.multiple) {
      const selectedNode = graph.findAllByState('node', 'selected');
      const selectedEdge = graph.findAllByState('edge', 'selected');
      const selected = [...selectedNode, ...selectedEdge];
      selected.forEach(shape => {
        if (shape !== item) {
          graph.setItemState(shape, 'selected', false);
        }
      });
    }
    if (self.shouldUpdate.call(self, e)) {
      graph.setItemState(item, 'selected', true);
    }
    graph.setAutoPaint(autoPaint);
    graph.paint();
  },

  resetState(e: GraphEvent) {
    const graph = this.graph;
    const autoPaint = graph.get('autoPaint');
    graph.setAutoPaint(false);
    const selectedNode = graph.findAllByState('node', 'selected');
    const selectedEdge = graph.findAllByState('edge', 'selected');
    const selected = [...selectedNode, ...selectedEdge];
    selected.forEach(node => graph.setItemState(node, 'selected', false));
    graph.paint();
    graph.setAutoPaint(autoPaint);
  },

  onKeyDown(e: GraphEvent) {
    const code = e.keyCode || e.which;
    if (code === this.keyCode) this.keydown = true;
    else this.keydown = false;
  },

  onKeyUp() {
    this.keydown = false;
  },
};

behaviorManager.register('click-select', clickSelect);
