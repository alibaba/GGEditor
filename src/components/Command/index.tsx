import React from 'react';
import commandManager from '@/common/commandManager';
import { EditorContextProps, withEditorContext } from '@/components/EditorContext';

interface CommandProps extends EditorContextProps {
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
    const { graph, name, children } = this.props;

    if (!graph) {
      return null;
    }

    return (
      <div
        className={`command${commandManager.canExecute(graph, name) ? '' : ' command-disabled'}`}
        onClick={this.handleClick}
      >
        {children}
      </div>
    );
  }
}

export default withEditorContext<CommandProps>(Command);
