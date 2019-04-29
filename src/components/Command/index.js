import React from 'react';
import withEditorContext from '@common/EditorContext/withEditorContext';
import commandManager from '@common/CommandManager';

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
      editor: {
        graph: editor.graph,
      },
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div className="command" onClick={this.handleClick}>
        {children}
      </div>
    );
  }
}

export default withEditorContext(Command);
