import commandManager from '@common/CommandManager';

commandManager.register({
  name: 'undo',

  config: {
    isEnableExec() {
      const { commandIndex } = commandManager;

      return commandIndex > 0;
    },

    isEnableBack() {
      return false;
    },

    exec() {
      const { commandQueue, commandIndex } = commandManager;

      commandQueue[commandIndex - 1].back();

      commandManager.commandIndex -= 1;
    },
  },
});
