import { TreeGraph, NodeModel } from '@/common/interfaces';
import { BaseCommand } from '@/components/Graph/command/base';
import foldCommand from './fold';

export interface UnfoldCommandParams {
  id: string;
}

const unfoldCommand: BaseCommand<UnfoldCommandParams> = {
  ...foldCommand,

  canExecute(graph: TreeGraph) {
    const selectedNodes = this.getSelectedNodes(graph);

    if (!selectedNodes.length) {
      return false;
    }

    const selectedNode = selectedNodes[0];
    const selectedNodeModel = selectedNode.getModel() as NodeModel;

    if (!selectedNodeModel.children || !selectedNodeModel.children.length) {
      return false;
    }

    if (!selectedNodeModel.collapsed) {
      return false;
    }

    return true;
  },

  shortcuts: [
    ['metaKey', '/'],
    ['ctrlKey', '/'],
  ],
};

export default unfoldCommand;
