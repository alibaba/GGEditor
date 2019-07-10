import G6 from '@antv/g6';
import {
  LabelState,
  EDITOR_EVENTS_EDITOR_LABEL,
} from '@common/constants';

G6.registerBehavior('edit-label', {
  getEvents() {
    return {
      'node:click': 'handleNodeClick',
      'node:dblclick': 'handleNodeDoubleClick',
      'canvas:click': 'handleCanvasClick',
    };
  },

  hideLabel() {
    const { graph } = this;

    graph.emit(EDITOR_EVENTS_EDITOR_LABEL, LabelState.Hide);
  },

  showLabel() {
    const { graph } = this;

    graph.emit(EDITOR_EVENTS_EDITOR_LABEL, LabelState.Show);
  },

  handleNodeClick() {
    this.hideLabel();
  },

  handleNodeDoubleClick() {
    this.showLabel();
  },

  handleCanvasClick() {
    this.hideLabel();
  },
});
