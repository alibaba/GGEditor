import { uuid } from '@utils';
import { NODE_DEFAULT_LABEL } from '@common/constants';
import { ItemModel } from '@common/interface';
import commandManager from '@common/commandManager';
import { baseCommand, BaseCommand } from '@components/Graph/command/base';

interface TopicCommandParams {
  id: string;
  model: ItemModel;
}

export const topicCommand: BaseCommand<TopicCommandParams> = {
  ...baseCommand,

  params: {
    id: '',
    model: {
      id: '',
    },
  },

  canExecute(graph) {
    const selectedNodes = this.getSelectedNodes(graph);

    return selectedNodes.length && selectedNodes.length === 1 && selectedNodes[0].get('parent');
  },

  init(graph) {
    if (this.params.id) {
      return;
    }

    const selectedNode = this.getSelectedNodes(graph)[0];

    this.params = {
      id: selectedNode.get('id'),
      model: {
        id: uuid(),
        label: NODE_DEFAULT_LABEL,
      },
    };
  },

  execute(graph) {
    const { id, model } = this.params;

    const parent = graph.findById(id).get('parent');

    graph.addChild(model, parent);

    this.setSelectedNode(graph, model.id);
  },

  undo(graph) {
    const { id, model } = this.params;

    this.setSelectedNode(graph, id);

    graph.removeChild(model.id);
  },

  shortcuts: [
    'Enter',
  ],
}

commandManager.register('topic', topicCommand);
