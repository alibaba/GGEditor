import cloneDeep from 'lodash/cloneDeep';
import global from '@/common/global';
import { BaseCommand, baseCommand } from '@/components/Graph/command/base';
import { NodeModel } from '@/common/interfaces';

const copyCommand: BaseCommand = {
  ...baseCommand,

  canExecute(graph) {
    return !!this.getSelectedNodes(graph).length;
  },

  canUndo() {
    return false;
  },

  execute(graph) {
    const selectedNodes = this.getSelectedNodes(graph);

    global.clipboard.models = cloneDeep(selectedNodes.map(node => node.getModel() as NodeModel));
  },

  shortcuts: [
    ['metaKey', 'c'],
    ['ctrlKey', 'c'],
  ],
};

export default copyCommand;
