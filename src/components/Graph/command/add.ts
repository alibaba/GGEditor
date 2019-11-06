import { guid } from '@/utils';
import { ItemType } from '@/common/constants';
import { ItemModel } from '@/common/interfaces';
import commandManager from '@/common/commandManager';
import { baseCommand, BaseCommand } from './base';

interface AddCommandParams {
  type: ItemType;
  model: ItemModel;
}

const addCommand: BaseCommand<AddCommandParams> = {
  ...baseCommand,

  params: {
    type: ItemType.Node,
    model: {
      id: '',
    },
  },

  init() {
    const { model } = this.params;

    if (model.id) {
      return;
    }

    model.id = guid();
  },

  execute(graph) {
    const { type, model } = this.params;

    graph.add(type, model);

    this.setSelectedNode(graph, model.id);
  },

  undo(graph) {
    const { model } = this.params;

    graph.remove(model.id);
  },
};

commandManager.register('add', addCommand);
