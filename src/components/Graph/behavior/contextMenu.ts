import G6 from '@antv/g6';
import { ContextMenuState, GraphNodeEvent } from '@common/constants';
import { CustomBehavior } from '@common/interface';

interface ContextMenuBehavior extends CustomBehavior {
  /** 显示右键菜单 */
  showContextMenu(): void;

  /** 隐藏右键菜单 */
  hideContextMenu(): void;

  /** 处理节点右击 */
  handleNodeContextMenu(): void;

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

  showContextMenu() {
    const { graph } = this;

    graph.emit(GraphNodeEvent.onNodeContextMenu, {
      ContextMenuState: ContextMenuState.Show,
    });
  },

  hideContextMenu() {
    const { graph } = this;

    graph.emit(GraphNodeEvent.onNodeContextMenu, {
      ContextMenuState: ContextMenuState.Hide,
    });
  },

  handleNodeContextMenu() {
    this.showContextMenu();
  },

  handleCanvasClick() {
    this.hideContextMenu();
  },
} as ContextMenuBehavior;

G6.registerBehavior('context-menu', contextMenuBehavior);
