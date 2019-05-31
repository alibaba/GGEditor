import React from 'react';
import { pick, addListener } from '@utils';
import {
  LABEL_STATE_HIDE,
  GRAPH_STATE_CANVAS_SELECTED,
  EDITOR_EVENTS,
  EDITOR_EVENTS_EDITOR_LABEL,
} from '@common/constants';
import commandManager from '@common/CommandManager';
import EditorContext from '@common/EditorContext';

class GGEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: null,
      graphState: GRAPH_STATE_CANVAS_SELECTED,
      labelState: LABEL_STATE_HIDE,
      setGraph: this.setGraph,
      setGraphState: this.setGraphState,
      setLabelState: this.setLabelState,
      canExecuteCommand: this.canExecuteCommand,
      executeCommand: this.executeCommand,
    };
  }

  bindEvent(graph) {
    const { props } = this;

    Object.keys(EDITOR_EVENTS).forEach((event) => {
      addListener(graph, event, props[EDITOR_EVENTS[event]]);
    });

    addListener(graph, EDITOR_EVENTS_EDITOR_LABEL, (labelState) => {
      if (labelState === this.state.labelState) {
        return;
      }

      this.setLabelState(labelState);
    });
  }

  setGraph = (graph) => {
    this.setState({
      graph,
    });

    this.bindEvent(graph);
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

    return commandManager.canExecute({
      name,
      graph,
    });
  }

  executeCommand = (name, params) => {
    const { graph } = this.state;

    commandManager.execute({
      name,
      graph,
      params,
    });
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
