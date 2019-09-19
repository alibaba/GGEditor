import { EditorEvent, LabelState } from '../../../common/constants';
import { TreeGraph, MindNodeModel, Node } from '../../../common/interface';
import commandManager from '../../../common/commandManager';
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
    graph.emit(EditorEvent.onBeforeLabelStateChange, {
      labelState: LabelState.Show,
    });
  },

  shortcuts: ['Tab'],
};

commandManager.register('subtopic', subtopicCommand);
