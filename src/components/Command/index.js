import React from 'react';
import withEditorContext from '@common/EditorContext/withEditorContext';

class Command extends React.PureComponent {
  state = {
    disabled: false,
  }

  handleClick = () => {
    const { name, executeCommand } = this.props;

    executeCommand(name);
  }

  render() {
    const { name, graph, canExecuteCommand, children } = this.props;

    if (!graph) {
      return null;
    }

    return (
      <div className={`command${canExecuteCommand(name) ? '' : ' command-disabled'}`} onClick={this.handleClick}>
        {children}
      </div>
    );
  }
}

export default withEditorContext(Command, ({
  graph,
  graphState,
  canExecuteCommand,
  executeCommand,
}) => ({
  graph,
  graphState,
  canExecuteCommand,
  executeCommand,
}));
