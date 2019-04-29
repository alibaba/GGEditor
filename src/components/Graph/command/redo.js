import commandManager from '@common/CommandManager';

commandManager.register({
  name: 'redo',

  config: {
    enable() {
      const { commandQueue, commandIndex } = commandManager;

      return commandIndex < commandQueue.length;
    },

    exec() {
      const { commandQueue, commandIndex } = commandManager;

      commandQueue[commandIndex].exec();

      commandManager.commandIndex += 1;
    },

    queue() {
      return false;
    },
  },
});
