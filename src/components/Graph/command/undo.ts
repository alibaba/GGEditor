import commandManager from '@/common/commandManager';

commandManager.register('undo', {
  name: 'undo',

  params: {},

  canExecute() {
    const { commandIndex } = commandManager;

    return commandIndex > 0;
  },

  shouldExecute() {
    return true;
  },

  canUndo() {
    return false;
  },

  init() {},

  execute(graph) {
    const { commandQueue, commandIndex } = commandManager;

    commandQueue[commandIndex - 1].undo(graph);

    commandManager.commandIndex -= 1;
  },

  undo() {},

  shortcuts: [
    ['metaKey', 'z'],
    ['ctrlKey', 'z'],
  ],
});
