import { TreeGraph, NodeModel } from '@/common/interfaces';
import { BaseCommand, baseCommand } from '@/components/Graph/command/base';

export interface FoldCommandParams {
  id: string;
}

const foldCommand: BaseCommand<FoldCommandParams> = {
  ...baseCommand,

  params: {
    id: '',
  },

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

    if (selectedNodeModel.collapsed) {
      return false;
    }

    return true;
  },

  init(graph) {
    const selectedNode = this.getSelectedNodes(graph)[0];
    const selectedNodeModel = selectedNode.getModel();

    this.params = {
      id: selectedNodeModel.id,
    };
  },

  execute(graph: TreeGraph) {
    const { id } = this.params;

    const sourceData = graph.findDataById(id);

    sourceData.collapsed = !sourceData.collapsed;

    graph.refreshLayout(false);
  },

  undo(graph) {
    this.execute(graph);
  },

  shortcuts: [
    ['metaKey', '/'],
    ['ctrlKey', '/'],
  ],
};

export default foldCommand;
