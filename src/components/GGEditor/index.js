import React from 'react';
import { pick } from '@utils';
import { GRAPH_STATE_CANVAS_SELECTED } from '@common/constants';
import commandManager from '@common/CommandManager';
import EditorContext from '@common/EditorContext';


class GGEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // graph
      graph: null,
      graphState: '',
      setGraph: this.setGraph,
      setGraphState: this.setGraphState,

      // command
      commandQueue: [],
      commandIndex: 0,
      canExecuteCommand: this.canExecuteCommand,
      executeCommand: this.executeCommand,
    };
  }

  setGraph = (graph) => {
    this.setState({
      graph,
      graphState: GRAPH_STATE_CANVAS_SELECTED,
    });

    commandManager.setGraph(graph);
  }

  setGraphState = (graphState) => {
    this.setState({
      graphState,
    });
  }

  canExecuteCommand = (name) => {
    return commandManager.canExecute(name);
  }

  executeCommand = ({ name, params }) => {
    commandManager.execute({
      name,
      params,
    });

    const {
      commandQueue,
      commandIndex,
    } = commandManager;

    this.setState({
      commandQueue,
      commandIndex,
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
