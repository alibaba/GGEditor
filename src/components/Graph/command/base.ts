import { ItemType, ItemState } from '@common/constants';
import { Item, Graph, Command } from '@common/interface';
import command from '@common/command';
import commandManager from '@common/commandManager';

export interface BaseCommand<T = object> extends Command<T> {
  /** 获取选中节点 */
  getSelectedNodes: (graph: Graph) => Item[];
  /** 设置选中节点 */
  setSelectedNode: (graph: Graph, id: string) => void;
}

export const baseCommand: BaseCommand = {
  ...command,
  
  getSelectedNodes(graph: Graph) {
    return graph.findAllByState(ItemType.Node, ItemState.Selected);
  },

  setSelectedNode(graph: Graph, id: string) {
    const autoPaint = graph.get('autoPaint');

    graph.setAutoPaint(false);

    const selectedNodes = this.getSelectedNodes(graph);

    selectedNodes.forEach((node) => {
      if (node.hasState(ItemState.Selected)) {
        graph.setItemState(node, ItemState.Selected, false);
      }
    });

    graph.setItemState(id, ItemState.Selected, true);
    graph.setAutoPaint(autoPaint);
    graph.paint();
  },
}

commandManager.register('base', baseCommand);
