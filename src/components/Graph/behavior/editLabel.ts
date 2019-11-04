import { LabelState, EditorEvent, GraphState } from '@/common/constants';
import { Behavior } from '@/common/interfaces';
import behaviorManager from '@/common/behaviorManager';

interface EditLabelBehavior extends Behavior {
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

const editLabelBehavior: EditLabelBehavior = {
  getEvents() {
    return {
      'node:click': 'handleNodeClick',
      'node:dblclick': 'handleNodeDoubleClick',
      'canvas:click': 'handleCanvasClick',
    };
  },

  showLabel() {
    const { graph } = this;

    graph.emit(EditorEvent.onLabelStateChange, {
      labelState: LabelState.Show,
    });
  },

  hideLabel() {
    const { graph } = this;

    graph.emit(EditorEvent.onLabelStateChange, {
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
    const { graph } = this;

    graph.emit(EditorEvent.onLabelStateChange, {
      graphState: GraphState.CanvasSelected,
      labelState: LabelState.Hide,
    });
  },
};

behaviorManager.register('edit-label', editLabelBehavior);
