import Command from './Command';

class CommandManager {
  constructor() {
    this.command = {};
    this.commandQueue = [];
    this.commandIndex = 0;
  }

  register = ({ name, config, extend }) => {
    let command = {
      ...Command,
      name,
    };

    if (config) {
      command = {
        ...command,
        ...config,
      };
    }

    if (extend && this.command[extend]) {
      command = {
        ...this.command[extend],
        ...command,
      };
    }

    if (this.command[name]) {
      command = {
        ...this.command[name],
        ...command,
      };
    }

    this.command[name] = command;
  }

  exec = ({ name, params, editor }) => {
    let command = this.command[name];

    if (!command) {
      return;
    }

    command = {
      ...command,
      ...params,
    };

    const { graph } = editor;

    if (!command.enable({ graph })) {
      return;
    }

    const { commandQueue, commandIndex } = this;

    commandQueue.splice(
      commandIndex,
      commandQueue.length - commandIndex,
      command,
    );

    command.exec({ graph });
  }
}

export default new CommandManager();
