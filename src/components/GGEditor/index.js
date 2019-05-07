import React from 'react';
import pick from 'lodash/pick';
import { GRAPH_STATUS_CANVAS_SELECTED } from '@common/constants';
import commandManager from '@common/CommandManager';
import EditorContext from '@common/EditorContext';


class GGEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: null,
      graphStatus: GRAPH_STATUS_CANVAS_SELECTED,
      setGraph: this.setGraph,
      setGraphStatus: this.setGraphStatus,
      executeCommand: this.executeCommand,
    };
  }

  setGraph = (graph) => {
    this.setState({
      graph,
    });

    commandManager.setGraph(graph);
  }

  setGraphStatus = (graphStatus) => {
    this.setState({
      graphStatus,
    });
  }

  executeCommand = (name, params) => {
    commandManager.execute({
      name,
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
