import command from '@common/command';
import commandManager from '@common/CommandManager';

commandManager.register('redo', {
  ...command,

  canExecute() {
    const { commandQueue, commandIndex } = commandManager;

    return commandIndex < commandQueue.length;
  },

  canUndo() {
    return false;
  },

  execute(graph) {
    const { commandQueue, commandIndex } = commandManager;

    commandQueue[commandIndex].execute(graph);

    commandManager.commandIndex += 1;
  },

  shortcuts: [
    ['metaKey', 'shiftKey', 'z'],
    ['ctrlKey', 'shiftKey', 'z'],
  ],
});
