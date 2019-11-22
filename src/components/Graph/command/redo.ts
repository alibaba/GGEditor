import commandManager from '@/common/commandManager';

commandManager.register('redo', {
  name: 'redo',

  params: {},

  canExecute() {
    const { commandQueue, commandIndex } = commandManager;

    return commandIndex < commandQueue.length;
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

    commandQueue[commandIndex].execute(graph);

    commandManager.commandIndex += 1;
  },

  undo() {},

  shortcuts: [
    ['metaKey', 'shiftKey', 'z'],
    ['ctrlKey', 'shiftKey', 'z'],
  ],
});
