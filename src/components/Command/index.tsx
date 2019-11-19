import React from 'react';
import { EditorEvent } from '@/common/constants';
import { GraphStateEvent } from '@/common/interfaces';
import commandManager from '@/common/commandManager';
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

  componentDidUpdate(prevProps: CommandProps) {
    const { graph, name } = this.props;

    if (graph === prevProps.graph) {
      return;
    }

    this.setState({
      disabled: !commandManager.canExecute(graph, name),
    });

    graph.on<GraphStateEvent>(EditorEvent.onGraphStateChange, () => {
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
