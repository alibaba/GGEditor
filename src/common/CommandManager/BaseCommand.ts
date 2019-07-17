import { Command } from '@common/interface';

const BaseCommand: Command = {
  name: '',

  params: {},

  canExecute() {
    return true;
  },

  canUndo() {
    return true;
  },

  init() {},

  execute() {},

  undo() {},

  shortcuts: [],
};

export default BaseCommand;
