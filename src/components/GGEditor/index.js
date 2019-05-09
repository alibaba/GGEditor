import React from 'react';
import { pick, addListener } from '@utils';
import {
  GRAPH_STATE_CANVAS_SELECTED,
  EDITOR_EVENTS,
} from '@common/constants';
import commandManager from '@common/CommandManager';
import EditorContext from '@common/EditorContext';

class GGEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: null,
      graphState: GRAPH_STATE_CANVAS_SELECTED,
      setGraph: this.setGraph,
      setGraphState: this.setGraphState,
      canExecuteCommand: this.canExecuteCommand,
      executeCommand: this.executeCommand,
    };
  }

  bindEvent(graph) {
    const { props } = this;

    Object.keys(EDITOR_EVENTS).forEach((event) => {
      addListener(graph, event, props[EDITOR_EVENTS[event]]);
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

  canExecuteCommand = (name) => {
    const { graph } = this.state;

    return commandManager.canExecute({
      name,
      graph,
    });
  }

  executeCommand = ({ name, params }) => {
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
