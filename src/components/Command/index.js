import React from 'react';
import withEditorContext from '@common/context/EditorContext/withEditorContext';
import commandManager from './CommandManager';

class Command extends React.Component {
  static defaultProps = {
    name: '',
    params: {},
  }

  handleClick = () => {
    const { name, params, editor } = this.props;

    commandManager.exec({
      name,
      params,
      editor,
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div onClick={this.handleClick}>
        {children}
      </div>
    );
  }
}

export default withEditorContext(Command);
