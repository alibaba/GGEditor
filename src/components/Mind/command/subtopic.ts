import { TreeGraph, MindNodeModel, Node } from '@/common/interfaces';
import commandManager from '@/common/commandManager';
import { BaseCommand } from '../../Graph/command/base';
import { topicCommand } from './topic';

interface SubtopicCommandParams {
  id: string;
  model: MindNodeModel;
}

const subtopicCommand: BaseCommand<SubtopicCommandParams, TreeGraph> = {
  ...topicCommand,

  canExecute(graph) {
    return this.getSelectedNodes(graph)[0] ? true : false;
  },

  execute(graph) {
    const { id, model } = this.params;

    const parent = graph.findById<Node>(id);

    // 添加节点
    graph.addChild(model, parent);

    // 选中节点
    this.setSelectedNode(graph, model.id);

    // 编辑节点
    this.editSelectedNode(graph);
  },

  shortcuts: ['Tab'],
};

commandManager.register('subtopic', subtopicCommand);
