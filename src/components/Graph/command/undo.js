import commandManager from '@common/CommandManager';

commandManager.register({
  name: 'undo',

  config: {
    enable() {
      const { commandIndex } = commandManager;

      return commandIndex > 0;
    },

    exec() {
      const { commandQueue, commandIndex } = commandManager;

      commandQueue[commandIndex - 1].back();

      commandManager.commandIndex -= 1;
    },

    queue() {
      return false;
    },
  },
});
