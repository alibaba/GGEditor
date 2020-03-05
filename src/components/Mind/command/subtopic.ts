import { TreeGraph, MindData } from '@/common/interfaces';
import { BaseCommand } from '@/components/Graph/command/base';
import topicCommand from './topic';

export interface SubtopicCommandParams {
  id: string;
  model: MindData;
}

const subtopicCommand: BaseCommand<SubtopicCommandParams, TreeGraph> = {
  ...topicCommand,

  canExecute(graph) {
    return this.getSelectedNodes(graph)[0] ? true : false;
  },

  execute(graph) {
    const { id, model } = this.params;

    // 添加节点
    graph.addChild(model, id);

    // 选中节点
    this.setSelectedItems(graph, [model.id]);

    // 编辑节点
    this.editSelectedNode(graph);
  },

  shortcuts: ['Tab'],
};

export default subtopicCommand;
