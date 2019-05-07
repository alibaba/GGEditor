import commandManager from '@common/CommandManager';

commandManager.register({
  name: 'undo',

  config: {
    canExec() {
      const { commandIndex } = commandManager;

      return commandIndex > 0;
    },

    canBack() {
      return false;
    },

    exec(graph) {
      const { commandQueue, commandIndex } = commandManager;

      commandQueue[commandIndex - 1].back(graph);

      commandManager.commandIndex -= 1;
    },
  },
});
