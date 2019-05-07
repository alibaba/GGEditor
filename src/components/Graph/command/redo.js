import commandManager from '@common/CommandManager';

commandManager.register({
  name: 'redo',

  config: {
    canExec() {
      const { commandQueue, commandIndex } = commandManager;

      return commandIndex < commandQueue.length;
    },

    canBack() {
      return false;
    },

    exec(graph) {
      const { commandQueue, commandIndex } = commandManager;

      commandQueue[commandIndex].exec(graph);

      commandManager.commandIndex += 1;
    },
  },
});
