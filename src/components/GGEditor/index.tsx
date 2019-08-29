import React from 'react';
import isArray from 'lodash/isArray';
import pick from 'lodash/pick';
import { addListener } from '@utils';
import Global from '@common/Global';
import { GraphState, LabelState, EditorEvent, GraphCommonEvent } from '@common/constants';
import { Graph, CommandEvent, LabelStateEvent, EventHandle } from '@common/interface';
import commandManager from '@common/commandManager';
import EditorContext from '@common/context/EditorContext';
import EditorPrivateContext, { EditorPrivateContextProps } from '@common/context/EditorPrivateContext';

interface GGEditorProps {
  [EditorEvent.onBeforeExecuteCommand]?: EventHandle<CommandEvent>;
  [EditorEvent.onAfterExecuteCommand]?: EventHandle<CommandEvent>;
}

interface GGEditorState extends EditorPrivateContextProps {}

class GGEditor extends React.Component<GGEditorProps, GGEditorState> {
  static setTrackable(trackable: boolean) {
    Global.setTrackable(trackable);
  }

  constructor(props: GGEditorProps) {
    super(props);

    this.state = {
      graph: null,
      graphState: GraphState.CanvasSelected,
      labelState: LabelState.Hide,
      setGraph: this.setGraph,
      setGraphState: this.setGraphState,
      setLabelState: this.setLabelState,
      canExecuteCommand: this.canExecuteCommand,
      executeCommand: this.executeCommand,
    };
  }

  bindEvent(graph: Graph) {
    const { props } = this;

    addListener<EventHandle<CommandEvent>>(
      graph,
      EditorEvent.onBeforeExecuteCommand,
      props[EditorEvent.onBeforeExecuteCommand],
    );
    addListener<EventHandle<CommandEvent>>(
      graph,
      EditorEvent.onAfterExecuteCommand,
      props[EditorEvent.onAfterExecuteCommand],
    );
    addListener<EventHandle<LabelStateEvent>>(graph, EditorEvent.onBeforeLabelStateChange, ({ labelState }) => {
      if (labelState === this.state.labelState) {
        return;
      }

      this.setLabelState(labelState);
    });
  }

  bindShortcut(graph: Graph) {
    graph.on(GraphCommonEvent.onKeyDown, (e: KeyboardEvent) => {
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

            return (e as any)[item];
          });
        });

        if (flag) {
          if (this.canExecuteCommand(name)) {
            this.executeCommand(name);
            return true;
          }
        }

        return false;
      });
    });
  }

  setGraph = (graph: Graph) => {
    this.setState({
      graph,
    });

    this.bindEvent(graph);
    this.bindShortcut(graph);
  };

  setGraphState = (graphState: GraphState) => {
    this.setState({
      graphState,
    });
  };

  setLabelState = (labelState: LabelState) => {
    this.setState({
      labelState,
    });
  };

  canExecuteCommand = (name: string) => {
    const { graph } = this.state;

    if (graph) {
      return commandManager.canExecute(graph, name);
    }

    return false;
  };

  executeCommand = (name: string, params?: object) => {
    const { graph } = this.state;

    if (graph) {
      commandManager.execute(graph, name, params);
    }
  };

  render() {
    const { children } = this.props;
    const { graph, executeCommand } = this.state;

    return (
      <EditorContext.Provider
        value={{
          graph,
          executeCommand,
        }}
      >
        <EditorPrivateContext.Provider value={this.state}>
          <div {...pick(this.props, ['className', 'style'])}>{children}</div>
        </EditorPrivateContext.Provider>
      </EditorContext.Provider>
    );
  }
}

export default GGEditor;
