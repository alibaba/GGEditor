import React from 'react';
import withEditorContext from '@common/EditorContext/withEditorContext';

class Command extends React.Component {
  state = {
    lastGraphState: '',
    lastCommandIndex: 0,
    disabled: false,
  }

  static getDerivedStateFromProps(props, state) {
    const { name, editor } = props;
    const { graphState, commandIndex } = editor;

    if (graphState !== state.lastGraphState || commandIndex !== state.lastCommandIndex) {
      return {
        lastGraphState: graphState,
        lastCommandIndex: commandIndex,
        disabled: !editor.canExecuteCommand(name),
      };
    }

    return null;
  }

  handleClick = () => {
    const { name, editor } = this.props;

    editor.executeCommand({
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
