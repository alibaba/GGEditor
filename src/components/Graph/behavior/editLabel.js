import G6 from '@antv/g6';
import {
  LABEL_STATE_HIDE,
  LABEL_STATE_SHOW,
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

    graph.emit(EDITOR_EVENTS_EDITOR_LABEL, LABEL_STATE_HIDE);
  },

  showLabel() {
    const { graph } = this;

    graph.emit(EDITOR_EVENTS_EDITOR_LABEL, LABEL_STATE_SHOW);
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
