import pick from 'lodash/pick';
import { BaseCommand, baseCommand } from '@/components/Graph/command/base';

export interface UpdateCommandParams {
  id: string;
  originModel: object;
  updateModel: object;
  forceRefreshLayout: boolean;
}

const updateCommand: BaseCommand<UpdateCommandParams, G6.Graph & G6.TreeGraph> = {
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
      graph.refreshLayout && graph.refreshLayout(false);
    }
  },

  undo(graph) {
    const { id, originModel } = this.params;

    graph.updateItem(id, originModel);
  },
};

export default updateCommand;
