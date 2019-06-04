import commandManager from '@common/CommandManager';

commandManager.register({
  name: 'undo',

  config: {
    canExecute() {
      const { commandIndex } = commandManager;

      return commandIndex > 0;
    },

    canUndo() {
      return false;
    },

    execute(graph) {
      const { commandQueue, commandIndex } = commandManager;

      commandQueue[commandIndex - 1].undo(graph);

      commandManager.commandIndex -= 1;
    },

    shortcuts: [
      ['metaKey', 'z'],
      ['ctrlKey', 'z'],
    ],
  },
});
