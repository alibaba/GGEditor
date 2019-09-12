import { EditorEvent } from '../../../common/constants';
import { Behavior, GraphEvent } from '../../../common/interface';
import behaviorManager from '../../../common/behaviorManager';

interface ContextMenuBehavior extends Behavior {
  /** 显示右键菜单 */
  showContextMenu(e: GraphEvent): void;

  /** 隐藏右键菜单 */
  hideContextMenu(): void;

  /** 处理节点右击 */
  handleNodeContextMenu(e: GraphEvent): void;

  /** 处理画布鼠标落下 */
  handleCanvasMousedown(): void;
}

const contextMenuBehavior = {
  getEvents() {
    return {
      'node:contextmenu': 'handleNodeContextMenu',
      'canvas:mousedown': 'handleCanvasMousedown',
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
} as ContextMenuBehavior;

behaviorManager.registerBehavior('context-menu', contextMenuBehavior);
