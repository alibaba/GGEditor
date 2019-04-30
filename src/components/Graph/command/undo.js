import commandManager from '@common/CommandManager';

commandManager.register({
  name: 'undo',

  config: {
    isEnable() {
      const { commandIndex } = commandManager;

      return commandIndex > 0;
    },

    exec() {
      const { commandQueue, commandIndex } = commandManager;

      commandQueue[commandIndex - 1].back();

      commandManager.commandIndex -= 1;
    },

    isJoinQueue() {
      return false;
    },
  },
});
