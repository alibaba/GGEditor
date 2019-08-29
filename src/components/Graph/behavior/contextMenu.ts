import G6 from '@antv/g6';
import { EditorEvent } from '@common/constants';
import { ContextMenuState, ContextMenuEvent, CustomBehavior } from '@common/interface';

interface ContextMenuBehavior extends CustomBehavior {
  /** 显示右键菜单 */
  showContextMenu(e: ContextMenuEvent): void;

  /** 隐藏右键菜单 */
  hideContextMenu(): void;

  /** 处理节点右击 */
  handleNodeContextMenu(e: ContextMenuEvent): void;

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

G6.registerBehavior('context-menu', contextMenuBehavior);
