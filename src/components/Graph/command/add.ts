import { guid } from '@/utils';
import { ItemType } from '@/common/constants';
import { NodeModel, EdgeModel } from '@/common/interfaces';
import { BaseCommand, baseCommand } from '@/components/Graph/command/base';

export interface AddCommandParams {
  type: ItemType;
  model: NodeModel | EdgeModel;
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

    this.setSelectedItems(graph, [model.id]);
  },

  undo(graph) {
    const { model } = this.params;

    graph.remove(model.id);
  },
};

export default addCommand;
