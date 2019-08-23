import G6 from '@antv/g6';
import { LabelState, EditorEvent } from '@common/constants';
import { CustomBehavior } from '@common/interface';

interface EditLabelBehavior extends CustomBehavior {
  /** 显示标签编辑 */
  showLabel(): void;
  /** 隐藏标签编辑 */
  hideLabel(): void;
  /** 处理节点点击 */
  handleNodeClick(): void;
  /** 处理节点双击 */
  handleNodeDoubleClick(): void;
  /** 处理画布点击 */
  handleCanvasClick(): void;
}

const editLabelBehavior = {
  getEvents() {
    return {
      'node:click': 'handleNodeClick',
      'node:dblclick': 'handleNodeDoubleClick',
      'canvas:click': 'handleCanvasClick',
    };
  },

  showLabel() {
    const { graph } = this;

    graph.emit(EditorEvent.onBeforeLabelStateChange, {
      labelState: LabelState.Show,
    });
  },

  hideLabel() {
    const { graph } = this;

    graph.emit(EditorEvent.onBeforeLabelStateChange, {
      labelState: LabelState.Hide,
    });
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
} as EditLabelBehavior;

G6.registerBehavior('edit-label', editLabelBehavior);
