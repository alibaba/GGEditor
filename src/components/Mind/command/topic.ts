import { uuid } from '../../../utils';
import { NODE_DEFAULT_LABEL, EditorEvent, LabelState } from '../../../common/constants';
import { TreeGraph, MindNodeModel } from '../../../common/interface';
import commandManager from '../../../common/commandManager';
import { baseCommand, BaseCommand } from '../../Graph/command/base';

interface TopicCommandParams {
  id: string;
  model: MindNodeModel;
}

export const topicCommand: BaseCommand<TopicCommandParams, TreeGraph> = {
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

    // 添加节点
    graph.addChild(model, parent);

    // 选中节点
    this.setSelectedNode(graph, model.id);

    // 编辑节点
    graph.emit(EditorEvent.onBeforeLabelStateChange, {
      labelState: LabelState.Show,
    });
  },

  undo(graph) {
    const { id, model } = this.params;

    this.setSelectedNode(graph, id);

    graph.removeChild(model.id);
  },

  shortcuts: ['Enter'],
};

commandManager.register('topic', topicCommand);
