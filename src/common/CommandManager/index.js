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

  canExec = (name) => {
    const { graph } = this;

    return this.command[name].canExec(graph);
  }

  exec = ({ name, params }) => {
    const Command = this.command[name];

    if (!Command) {
      return;
    }

    const command = Object.create(Command);

    if (params) {
      command.params = params;
    }

    const { graph } = this;

    if (!command.canExec(graph)) {
      return;
    }

    command.init(graph);
    command.exec(graph);

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
