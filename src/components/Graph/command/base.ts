import { executeBatch, isMind, getSelectedNodes, getSelectedEdges } from '@/utils';
import { ItemState, LabelState, EditorEvent } from '@/common/constants';
import { Command } from '@/common/interfaces';
import commandManager from '@/common/commandManager';

export interface BaseCommand<P = object, G = G6.Graph> extends Command<P, G> {
  /** 判断是否脑图 */
  isMind(graph: G): boolean;
  /** 获取选中节点 */
  getSelectedNodes(graph: G): G6.Node[];
  /** 获取选中连线 */
  getSelectedEdges(graph: G): G6.Edge[];
  /** 设置选中节点 */
  setSelectedNodes(graph: G, ids: string[]): void;
  /** 编辑选中节点 */
  editSelectedNode(graph: G): void;
}

export const baseCommand: BaseCommand = {
  name: '',

  params: {},

  canExecute() {
    return true;
  },

  shouldExecute() {
    return true;
  },

  canUndo() {
    return true;
  },

  init() {},

  execute() {},

  undo() {},

  shortcuts: [],

  isMind,

  getSelectedNodes,

  getSelectedEdges,

  setSelectedNodes(graph, ids) {
    executeBatch(graph, () => {
      const selectedNodes = this.getSelectedNodes(graph);

      selectedNodes.forEach(node => {
        if (node.hasState(ItemState.Selected)) {
          graph.setItemState(node, ItemState.Selected, false);
        }
      });

      ids.forEach(id => {
        graph.setItemState(id, ItemState.Selected, true);
      });
    });
  },

  editSelectedNode(graph) {
    graph.emit(EditorEvent.onLabelStateChange, {
      labelState: LabelState.Show,
    });
  },
};

commandManager.register('base', baseCommand);
