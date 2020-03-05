import React from 'react';
import { EditorEvent } from '@/common/constants';
import CommandManager from '@/common/CommandManager';
import { EditorContextProps, withEditorContext } from '@/components/EditorContext';

interface CommandProps extends EditorContextProps {
  name: string;
  className?: string;
  disabledClassName?: string;
}

interface CommandState {}

class Command extends React.Component<CommandProps, CommandState> {
  static defaultProps = {
    className: 'command',
    disabledClassName: 'command-disabled',
  };

  state = {
    disabled: false,
  };

  componentDidMount() {
    const { graph, name } = this.props;

    const commandManager: CommandManager = graph.get('commandManager');

    this.setState({
      disabled: !commandManager.canExecute(graph, name),
    });

    graph.on(EditorEvent.onGraphStateChange, () => {
      this.setState({
        disabled: !commandManager.canExecute(graph, name),
      });
    });
  }

  handleClick = () => {
    const { name, executeCommand } = this.props;

    executeCommand(name);
  };

  render() {
    const { graph } = this.props;

    if (!graph) {
      return null;
    }

    const { className, disabledClassName, children } = this.props;
    const { disabled } = this.state;

    return (
      <div className={`${className}${disabled ? ` ${disabledClassName}` : ''}`} onClick={this.handleClick}>
        {children}
      </div>
    );
  }
}

export default withEditorContext<CommandProps>(Command);
