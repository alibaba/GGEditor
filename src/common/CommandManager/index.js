import BaseCommand from './Command';

class CommandManager {
  constructor() {
    this.command = {};
    this.commandQueue = [];
    this.commandIndex = 0;
  }

  setGraph = (graph) => {
    this.graph = graph;
  }

  register = ({ name, config = {}, extend = '' }) => {
    this.command[name] = {
      ...this.command[name] || this.command[extend] || BaseCommand,
      ...config,
      name,
    };
  }

  canExecute = (name) => {
    const { graph } = this;

    return this.command[name].canExecute(graph);
  }

  execute = ({ name, params }) => {
    const Command = this.command[name];

    if (!Command) {
      return;
    }

    const command = Object.create(Command);

    if (params) {
      command.params = params;
    }

    const { graph } = this;

    if (!command.canExecute(graph)) {
      return;
    }

    command.beforeExecute(graph);
    command.execute(graph);
    command.afterExecute(graph);

    if (!command.canBack(graph)) {
      return;
    }

    const { commandQueue, commandIndex } = this;

    commandQueue.splice(
      commandIndex,
      commandQueue.length - commandIndex,
      command,
    );

    this.commandIndex += 1;
  }
}

export default new CommandManager();
