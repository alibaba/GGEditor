import G6 from '@antv/g6';
import { ContextMenuState, EditorEvent } from '@common/constants';
import { ContextMenuEvent, CustomBehavior } from '@common/interface';

interface ContextMenuBehavior extends CustomBehavior {
  /** 显示右键菜单 */
  showContextMenu(e: ContextMenuEvent): void;

  /** 隐藏右键菜单 */
  hideContextMenu(): void;

  /** 处理节点右击 */
  handleNodeContextMenu(e: ContextMenuEvent): void;

  /** 处理画布点击 */
  handleCanvasClick(): void;
}

const contextMenuBehavior = {
  getEvents() {
    return {
      'node:contextmenu': 'handleNodeContextMenu',
      'canvas:click': 'handleCanvasClick',
    };
  },

  showContextMenu(e) {
    const { graph } = this;

    graph.emit(EditorEvent.onContextMenuStateChange, {
      contextMenuState: ContextMenuState.Show,
      ...e,
    });
  },

  hideContextMenu() {
    const { graph } = this;

    graph.emit(EditorEvent.onContextMenuStateChange, {
      contextMenuState: ContextMenuState.Hide,
    });
  },

  handleNodeContextMenu(e) {
    this.showContextMenu(e);
  },

  handleCanvasClick() {
    this.hideContextMenu();
  },
} as ContextMenuBehavior;

G6.registerBehavior('context-menu', contextMenuBehavior);
