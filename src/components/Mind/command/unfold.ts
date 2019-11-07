import { MindData } from '@/common/interfaces';
import commandManager from '@/common/commandManager';
import { BaseCommand } from '../../Graph/command/base';
import { foldCommand } from './fold';

interface UnfoldCommandParams {
  id: string;
}

const unfoldCommand: BaseCommand<UnfoldCommandParams> = {
  ...foldCommand,

  canExecute(graph: G6.TreeGraph) {
    const selectedNodes = this.getSelectedNodes(graph);

    if (!selectedNodes.length) {
      return false;
    }

    const selectedNode = selectedNodes[0];
    const selectedNodeModel = selectedNode.getModel<MindData>();

    if (!selectedNodeModel.children || !selectedNodeModel.children.length) {
      return false;
    }

    if (!selectedNodeModel.collapsed) {
      return false;
    }

    return true;
  },

  shortcuts: [['metaKey', '/'], ['ctrlKey', '/']],
};

commandManager.register('unfold', unfoldCommand);
