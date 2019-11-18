import React from 'react';
import ReactDOM from 'react-dom';
import GGEditor, { Flow } from '@/index';
import data from '../mock/flow.json';
import styles from './index.less';

class Index extends React.Component {
  render() {
    return (
      <GGEditor className={styles.editor}>
        <RegisterNode name="customFlowNode" extend="bizNode" config={nodeShapeConfig} />
        <Flow
          className={styles.editorBd}
          data={data}
          graphConfig={{
            defaultNode: {
              shape: 'bizNode',
            },
            defaultEdge: {
              shape: 'bizFlowEdge',
            },
            defaultNode: {
              shape: 'customFlowNode',
            },
          }}
        />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
