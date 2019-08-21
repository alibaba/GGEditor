import { ItemType, ItemState } from '@common/constants';
import { Node, Edge, Graph, Command } from '@common/interface';
import command from '@common/command';
import commandManager from '@common/commandManager';
import { isMind, getSelectedNodes, getSelectedEdges } from '@utils';

export interface BaseCommand<P = object> extends Command<P> {
  /** 判断是否脑图 */
  isMind(graph: Graph): boolean;
  /** 获取选中节点 */
  getSelectedNodes(graph: Graph): Node[];
  /** 获取选中连线 */
  getSelectedEdges(graph: Graph): Edge[];
  /** 设置选中节点 */
  setSelectedNode(graph: Graph, id: string): void;
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
};

commandManager.register('base', baseCommand);
