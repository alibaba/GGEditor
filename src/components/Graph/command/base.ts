import { isMind, getSelectedNodes, getSelectedEdges } from '@/utils';
import { ItemState, LabelState, EditorEvent } from '@/common/constants';
import { Node, Edge, Graph, Command } from '@/common/interface';
import command from '@/common/command';
import commandManager from '@/common/commandManager';

export interface BaseCommand<P = object, G = Graph> extends Command<P, G> {
  /** 判断是否脑图 */
  isMind(graph: G): boolean;
  /** 获取选中节点 */
  getSelectedNodes(graph: G): Node[];
  /** 获取选中连线 */
  getSelectedEdges(graph: G): Edge[];
  /** 设置选中节点 */
  setSelectedNode(graph: G, id: string): void;
  /** 编辑选中节点 */
  editSelectedNode(graph: G): void;
}

export const baseCommand: BaseCommand = {
  ...command,

  isMind,

  getSelectedNodes,

  getSelectedEdges,

  setSelectedNode(graph: Graph, id: string) {
    const autoPaint = graph.get('autoPaint');

    graph.setAutoPaint(false);

    const selectedNodes = this.getSelectedNodes(graph);

    selectedNodes.forEach(node => {
      if (node.hasState(ItemState.Selected)) {
        graph.setItemState(node, ItemState.Selected, false);
      }
    });

    graph.setItemState(id, ItemState.Selected, true);
    graph.setAutoPaint(autoPaint);
    graph.paint();
  },

  editSelectedNode(graph: Graph) {
    const modes = graph.get('modes');
    const mode = graph.getCurrentMode();
    const behaviors = modes[mode];

    if (
      behaviors.some((behavior: any) => {
        return behavior === 'edit-label' || behavior.type === 'edit-label';
      })
    ) {
      graph.emit(EditorEvent.onLabelStateChange, {
        labelState: LabelState.Show,
      });
    }
  },
};

commandManager.register('base', baseCommand);
