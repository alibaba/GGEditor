import {
  EditorEvent
} from '@common/constants';
import { Graph, Command } from '@common/interface';
import BaseCommand from './BaseCommand';

class CommandManager {
  /** 命令集合 */
  command: {
    [propName: string]: Command
  };

  /** 执行堆栈 */
  commandQueue: Command[];

  /** 堆栈索引 */
  commandIndex: number;

  constructor() {
    this.command = {};
    this.commandQueue = [];
    this.commandIndex = 0;
  }

  /**
   * 注册命令
   */
  register = ({ name, config = {}, extend = '' }: {
    name: string;
    config: object;
    extend: string;
  }) => {
    this.command[name] = {
      ...this.command[name] || this.command[extend] || BaseCommand,
      ...config,
      name,
    };
  }

  /**
   * 是否可以执行
   */
  canExecute = ({ name, graph }: {
    name: string;
    graph: Graph;
  }) => {
    return this.command[name].canExecute(graph);
  }

  /**
   * 执行命令
   */
  execute = ({ name, graph, params }: {
    name: string;
    graph: Graph;
    params: object;
  }) => {
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
