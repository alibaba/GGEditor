import pick from 'lodash/pick';
import commandManager from '@/common/commandManager';
import { baseCommand, BaseCommand } from '@/components/Graph/command/base';
import { Graph, TreeGraph } from '@/common/interface';

interface UpdateCommandParams {
  id: string;
  originModel: object;
  updateModel: object;
  forceRefreshLayout: boolean;
}

const updateCommand: BaseCommand<UpdateCommandParams, Graph & TreeGraph> = {
  ...baseCommand,

  params: {
    id: '',
    originModel: {},
    updateModel: {},
    forceRefreshLayout: false,
  },

  canExecute(graph) {
    const selectedNodes = this.getSelectedNodes(graph);
    const selectedEdges = this.getSelectedEdges(graph);
    return (selectedNodes.length || selectedEdges.length) && (selectedNodes.length === 1 || selectedEdges.length === 1)
      ? true
      : false;
  },

  init(graph) {
    const { id, updateModel } = this.params;

    const updatePaths = Object.keys(updateModel);
    const originModel = pick(graph.findById(id).getModel(), updatePaths);

    this.params.originModel = originModel;
  },

  execute(graph) {
    const { id, updateModel, forceRefreshLayout } = this.params;

    graph.updateItem(id, updateModel);

    if (forceRefreshLayout) {
      graph.refreshLayout && graph.refreshLayout();
    }
  },

  undo(graph) {
    const { id, originModel } = this.params;

    graph.updateItem(id, originModel);
  },
};

commandManager.register('update', updateCommand);
