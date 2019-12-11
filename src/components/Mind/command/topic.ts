import { guid } from '@/utils';
import { LABEL_DEFAULT_TEXT } from '@/common/constants';
import { MindData } from '@/common/interfaces';
import commandManager from '@/common/commandManager';
import { BaseCommand, baseCommand } from '@/components/Graph/command/base';

interface TopicCommandParams {
  id: string;
  model: MindData;
}

export const topicCommand: BaseCommand<TopicCommandParams, G6.TreeGraph> = {
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
        id: guid(),
        label: LABEL_DEFAULT_TEXT,
      },
    };
  },

  execute(graph) {
    const { id, model } = this.params;

    const parent = graph.findById(id).get('parent');

    // 添加节点
    graph.addChild(model, parent);

    // 选中节点
    this.setSelectedNode(graph, model.id);

    // 编辑节点
    this.editSelectedNode(graph);
  },

  undo(graph) {
    const { id, model } = this.params;

    this.setSelectedNode(graph, id);

    graph.removeChild(model.id);
  },

  shortcuts: ['Enter'],
};

commandManager.register('topic', topicCommand);
