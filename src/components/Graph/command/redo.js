import commandManager from '@common/CommandManager';

commandManager.register({
  name: 'redo',

  config: {
    isEnableExec() {
      const { commandQueue, commandIndex } = commandManager;

      return commandIndex < commandQueue.length;
    },

    isEnableBack() {
      return false;
    },

    exec() {
      const { commandQueue, commandIndex } = commandManager;

      commandQueue[commandIndex].exec();

      commandManager.commandIndex += 1;
    },
  },
});
