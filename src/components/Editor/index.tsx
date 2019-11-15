import React from 'react';
import isArray from 'lodash/isArray';
import pick from 'lodash/pick';
import Global from '@/common/Global';
import { EditorEvent, GraphCommonEvent } from '@/common/constants';
import { CommandEvent } from '@/common/interfaces';
import commandManager from '@/common/commandManager';
import EditorContext, { EditorContextProps } from '@/components/EditorContext';

import '@/components/Graph/shape/nodes/bizNode';

interface EditorProps {
  className?: string;
  style?: React.CSSProperties;
  [EditorEvent.onBeforeExecuteCommand]?: (e: CommandEvent) => void;
  [EditorEvent.onAfterExecuteCommand]?: (e: CommandEvent) => void;
}

interface EditorState extends EditorContextProps {}

class Editor extends React.Component<EditorProps, EditorState> {
  static setTrackable(trackable: boolean) {
    Global.setTrackable(trackable);
  }

  static defaultProps = {
    [EditorEvent.onBeforeExecuteCommand]: () => {},
    [EditorEvent.onAfterExecuteCommand]: () => {},
  };

  lastMousedownTarget: EventTarget | null = null;

  constructor(props: EditorProps) {
    super(props);

    this.state = {
      graph: null,
      setGraph: this.setGraph,
      executeCommand: this.executeCommand,
    };

    this.lastMousedownTarget = null;
  }

  bindEvent(graph: G6.Graph) {
    const { props } = this;

    graph.on<CommandEvent>(EditorEvent.onBeforeExecuteCommand, props[EditorEvent.onBeforeExecuteCommand]);
    graph.on<CommandEvent>(EditorEvent.onAfterExecuteCommand, props[EditorEvent.onAfterExecuteCommand]);
  }

  bindShortcut(graph: G6.Graph) {
    window.addEventListener(GraphCommonEvent.onMouseDown, e => {
      this.lastMousedownTarget = e.target;
    });

    graph.on(GraphCommonEvent.onKeyDown, (e: any) => {
      const canvasElement = graph.get('canvas').get('el');

      if (this.lastMousedownTarget !== canvasElement) {
        return;
      }

      Object.values(commandManager.command).some(command => {
        const { name, shortcuts } = command;

        const flag = shortcuts.some((shortcut: string | string[]) => {
          const { key } = e;

          if (!isArray(shortcut)) {
            return shortcut === key;
          }

          return shortcut.every((item, index) => {
            if (index === shortcut.length - 1) {
              return item === key;
            }

            return e[item];
          });
        });

        if (flag) {
          if (commandManager.canExecute(graph, name)) {
            // Prevent default
            e.preventDefault();

            // Execute command
            this.executeCommand(name);

            return true;
          }
        }

        return false;
      });
    });
  }

  setGraph = (graph: G6.Graph) => {
    this.setState({
      graph,
    });

    this.bindEvent(graph);
    this.bindShortcut(graph);
  };

  executeCommand = (name: string, params?: object) => {
    const { graph } = this.state;

    if (graph) {
      commandManager.execute(graph, name, params);
    }
  };

  render() {
    const { children } = this.props;

    return (
      <EditorContext.Provider value={this.state}>
        <div {...pick(this.props, ['className', 'style'])}>{children}</div>
      </EditorContext.Provider>
    );
  }
}

export default Editor;
