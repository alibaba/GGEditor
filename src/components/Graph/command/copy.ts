import global from '@/common/global';
import { BaseCommand, baseCommand } from '@/components/Graph/command/base';

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

    global.clipboard.models = selectedNodes.map(node => node.getModel());
  },

  shortcuts: [
    ['metaKey', 'c'],
    ['ctrlKey', 'c'],
  ],
};

export default copyCommand;
