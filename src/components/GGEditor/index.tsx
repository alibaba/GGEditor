import React from 'react';
import { addListener, isArray, pick } from '@utils';
import { GraphState, LabelState, EditorEvent } from '@common/constants';
import { Graph, CommandEvent, LabelStateEvent, EventHandle } from '@common/interface';
import commandManager from '@common/CommandManager';
import EditorContext from '@common/EditorContext';

interface GGEditorProps {
  [EditorEvent.onBeforeExecuteCommand]?: EventHandle<CommandEvent>;
  [EditorEvent.onAfterExecuteCommand]?: EventHandle<CommandEvent>;
}

interface GGEditorState {
  graph: Graph | null;
  graphState: GraphState;
  labelState: LabelState;
}

class GGEditor extends React.Component<GGEditorProps, GGEditorState> {
  constructor(props) {
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

  bindEvent(graph) {
    const { props } = this;

    addListener<EventHandle<CommandEvent>>(graph, EditorEvent.onBeforeExecuteCommand, props[EditorEvent.onBeforeExecuteCommand]);
    addListener<EventHandle<CommandEvent>>(graph, EditorEvent.onAfterExecuteCommand, props[EditorEvent.onAfterExecuteCommand]);
    addListener<EventHandle<LabelStateEvent>>(graph, EditorEvent.onBeforeLabelStateChange, ({ labelState }) => {
      if (labelState === this.state.labelState) {
        return;
      }

      this.setLabelState(labelState);
    });
  }

  bindShortcut(graph) {
    graph.on('keydown', (e) => {
      Object.values(commandManager.command).some((command) => {
        const { name, shortcuts } = command;

        const flag = shortcuts.some((shortcut) => {
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
          this.executeCommand(name);
          return true;
        }

        return false;
      });
    });
  }

  setGraph = (graph) => {
    this.setState({
      graph,
    });

    this.bindEvent(graph);
    this.bindShortcut(graph);
  }

  setGraphState = (graphState) => {
    this.setState({
      graphState,
    });
  }

  setLabelState = (labelState) => {
    this.setState({
      labelState,
    });
  }

  canExecuteCommand = (name) => {
    const { graph } = this.state;

    return commandManager.canExecute(graph, name);
  }

  executeCommand = (name, params) => {
    const { graph } = this.state;

    commandManager.execute(graph, name, params);
  }

  render() {
    const { children } = this.props;

    return (
      <EditorContext.Provider value={this.state}>
        <div {...pick(this.props, ['className', 'style'])}>
          {children}
        </div>
      </EditorContext.Provider>
    );
  }
}

export default GGEditor;
