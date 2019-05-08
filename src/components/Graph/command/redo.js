import commandManager from '@common/CommandManager';

commandManager.register({
  name: 'redo',

  config: {
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
  },
});
