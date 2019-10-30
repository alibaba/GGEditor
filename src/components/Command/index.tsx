import React from 'react';
import { EditorPrivateContextProps, withEditorPrivateContext } from '@/common/context/EditorPrivateContext';

interface CommandProps extends EditorPrivateContextProps {
  name: string;
}

interface CommandState {}

class Command extends React.Component<CommandProps, CommandState> {
  state = {
    disabled: false,
  };

  handleClick = () => {
    const { name, executeCommand } = this.props;

    executeCommand(name);
  };

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

export default withEditorPrivateContext<CommandProps>(Command);
