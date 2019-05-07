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
      graphStatus: '',
      setGraph: this.setGraph,
      setGraphStatus: this.setGraphStatus,
      executeCommand: this.executeCommand,
    };
  }

  setGraph = (graph) => {
    this.setState({
      graph,
      graphStatus: GRAPH_STATUS_CANVAS_SELECTED,
    });

    commandManager.setGraph(graph);
  }

  setGraphStatus = (graphStatus) => {
    setTimeout(() => {
      this.setState({
        graphStatus,
      });
    }, 0);
  }

  executeCommand = (name, params) => {
    commandManager.exec({
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
