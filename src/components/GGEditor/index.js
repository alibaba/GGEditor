import React from 'react';
import pick from 'lodash/pick';
import EditorContext from '@common/EditorContext';
import commandManager from '@common/CommandManager';

class GGEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initGraph: this.initGraph,
      execCommand: this.execCommand,
    };
  }

  initGraph = ({ graph }) => {
    this.setState({
      graph,
    });
  }

  execCommand = ({ name, params }) => {
    const { graph } = this.state;

    commandManager.exec({
      name,
      params,
      editor: {
        graph,
      },
    });
  }

  render() {
    const { children } = this.props;

    return (
      <EditorContext.Provider value={this.state}>
        <div {...pick(this.props, ['className', 'style'])}>
          {children}
        </div>
      </EditorContext.Provider>
    );
  }
}

export default GGEditor;
