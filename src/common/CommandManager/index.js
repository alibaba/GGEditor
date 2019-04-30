import BaseCommand from './Command';

class CommandManager {
  constructor() {
    this.command = {};
    this.commandQueue = [];
    this.commandIndex = 0;
  }

  register = ({ name, config, extend }) => {
    const SuperClass = this.command[name] || this.command[extend] || BaseCommand;

    class Command extends SuperClass {}

    Object.assign(Command.prototype, config);

    this.command[name] = Command;
  }

  exec = ({ name, params, editor }) => {
    const Command = this.command[name];

    if (!Command) {
      return;
    }

    const command = new Command({
      name,
      params,
      editor,
    });

    if (!command.isEnable()) {
      return;
    }

    command.init();
    command.exec();

    if (!command.isJoinQueue()) {
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
