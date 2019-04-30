import React from 'react';
import withEditorContext from '@common/EditorContext/withEditorContext';

class Command extends React.Component {
  static defaultProps = {
    name: '',
    params: {},
  }

  handleClick = () => {
    const { name, params, editor } = this.props;

    editor.executeCommand({
      name,
      params,
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
