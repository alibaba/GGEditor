import commandManager from '@common/CommandManager';

commandManager.register({
  name: 'undo',

  config: {
    canExecute() {
      const { commandIndex } = commandManager;

      return commandIndex > 0;
    },

    canBack() {
      return false;
    },

    execute(graph) {
      const { commandQueue, commandIndex } = commandManager;

      commandQueue[commandIndex - 1].back(graph);

      commandManager.commandIndex -= 1;
    },
  },
});
