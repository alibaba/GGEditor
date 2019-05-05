import BaseCommand from './Command';

class CommandManager {
  constructor() {
    this.command = {};
    this.commandQueue = [];
    this.commandIndex = 0;
  }

  register = ({ name, config = {}, extend = '' }) => {
    this.command[name] = {
      ...this.command[name] || this.command[extend] || BaseCommand,
      ...config,
      name,
    };
  }

  exec = ({ name, params, editor }) => {
    const Command = this.command[name];

    if (!Command) {
      return;
    }

    const command = Object.create(Command);

    command.params = params;
    command.editor = editor;

    if (!command.isEnableExec()) {
      return;
    }

    command.init();
    command.exec();

    if (!command.isEnableBack()) {
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
