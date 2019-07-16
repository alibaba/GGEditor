import {
  EditorEvent
} from '@common/constants';
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

  canExecute = ({ name, graph }) => {
    return this.command[name].canExecute(graph);
  }

  execute = ({ name, graph, params }) => {
    const Command = this.command[name];

    if (!Command) {
      return;
    }

    const command = Object.create(Command);

    if (params) {
      command.params = {
        ...command.params,
        ...params,
      };
    }

    if (!command.canExecute(graph)) {
      return;
    }

    command.init(graph);

    graph.emit(EditorEvent.onBeforeExecuteCommand, {
      name: command.name,
      params: command.params,
    });

    command.execute(graph);

    graph.emit(EditorEvent.onAfterExecuteCommand, {
      name: command.name,
      params: command.params,
    });

    if (!command.canUndo(graph)) {
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
