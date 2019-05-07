import React from 'react';
import { GRAPH_STATUS_CANVAS_SELECTED } from '@common/constants';
import commandManager from '@common/CommandManager';
import withEditorContext from '@common/EditorContext/withEditorContext';

class Command extends React.Component {
  state = {
    graph: null,
    graphStatus: GRAPH_STATUS_CANVAS_SELECTED,
    disabled: false,
  }

  static getDerivedStateFromProps(props, state) {
    const { graph, graphStatus } = props.editor;

    if (graph !== state.graph || graphStatus !== state.graphStatus) {
      return {
        graph,
        graphStatus,
        disabled: !commandManager.canExecute(props.name),
      };
    }

    return null;
  }

  handleClick = () => {
    const { name } = this.props;

    commandManager.execute({
      name,
    });
  }

  render() {
    const { children } = this.props;
    const { disabled } = this.state;

    return (
      <div className={`command${disabled ? ' command-disabled' : ''}`} onClick={this.handleClick}>
        {children}
      </div>
    );
  }
}

export default withEditorContext(Command);
