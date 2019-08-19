import pick from 'lodash/pick';
import commandManager from '@common/commandManager';
import { baseCommand, BaseCommand } from '@components/Graph/command/base';

interface UpdateCommandParams {
  id: string;
  originModel: object;
  updateModel: object;
}

const updateCommand: BaseCommand<UpdateCommandParams> = {
  ...baseCommand,

  params: {
    id: '',
    originModel: {},
    updateModel: {},
  },

  canExecute(graph) {
    const selectedNodes = this.getSelectedNodes(graph);

    return selectedNodes.length && selectedNodes.length === 1 ? true : false;
  },

  init(graph) {
    const { id, updateModel } = this.params;

    const updatePaths = Object.keys(updateModel);
    const originModel = pick(graph.findById(id).getModel(), updatePaths);

    this.params.originModel = originModel;
  },

  execute(graph) {
    const { id, updateModel } = this.params;

    graph.updateItem(id, updateModel);
  },

  undo(graph) {
    const { id, originModel } = this.params;

    graph.updateItem(id, originModel);
  },
};

commandManager.register('update', updateCommand);
