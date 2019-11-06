import { EditorEvent, ShapeClassName } from '@/common/constants';
import { Behavior, GraphEvent } from '@/common/interfaces';
import behaviorManager from '@/common/behaviorManager';

interface ContextMenuBehavior extends Behavior {
  /** 显示右键菜单 */
  showContextMenu(e: GraphEvent): void;
  /** 隐藏右键菜单 */
  hideContextMenu(): void;
  /** 处理节点右击 */
  handleNodeContextMenu(e: GraphEvent): void;
  /** 处理画布鼠标落下 */
  handleCanvasMousedown(): void;
  /** 处理节点上的菜单按钮点击 */
  handleAppendixClick(e: GraphEvent): void;
}

const contextMenuBehavior: ContextMenuBehavior = {
  getEvents() {
    return {
      'node:contextmenu': 'handleNodeContextMenu',
      'canvas:mousedown': 'handleCanvasMousedown',
      'node:click': 'handleAppendixClick',
    };
  },

  showContextMenu(e) {
    const { graph } = this;

    graph.emit(EditorEvent.onContextMenuStateChange, {
      contextMenuState: {
        visible: true,
        clientX: e.clientX,
        clientY: e.clientY,
      },
    });
  },

  hideContextMenu() {
    const { graph } = this;

    graph.emit(EditorEvent.onContextMenuStateChange, {
      contextMenuState: {
        visible: false,
        clientX: 0,
        clientY: 0,
      },
    });
  },

  handleNodeContextMenu(e) {
    this.showContextMenu(e);
  },

  handleCanvasMousedown() {
    this.hideContextMenu();
  },

  handleAppendixClick(e: GraphEvent): void {
    const { target } = e;
    if (target.get('className') === ShapeClassName.Appendix) {
      this.showContextMenu(e);
    }
  },
};

behaviorManager.register('context-menu', contextMenuBehavior);
