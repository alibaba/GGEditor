import React from 'react';
import EditorContext from '@common/context/EditorContext';
import CommandManager from '@components/Command/CommandManager';

class GGEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      init: this.init,
      exec: this.exec,
      graph: null,
    };
  }

  init = ({ graph }) => {
    this.setState({
      graph,
    });
  }

  exec = ({ name, params }) => {
    CommandManager.exec({
      name,
      params,
    });
  }

  render() {
    const { children } = this.props;

    return (
      <EditorContext.Provider value={this.state}>
        {children}
      </EditorContext.Provider>
    );
  }
}

export default GGEditor;
