import React from 'react';
import commandManager from '@common/CommandManager';
import withEditorContext from '@common/EditorContext/withEditorContext';

class Command extends React.Component {
  state = {
    graphStatus: '',
    disabled: false,
  }

  static getDerivedStateFromProps(props, state) {
    const { graphStatus } = props.editor;

    if (graphStatus !== state.graphStatus) {
      return {
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
