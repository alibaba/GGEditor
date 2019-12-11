import React from 'react';
import ReactDOM from 'react-dom';
import GGEditor, { Flow } from '@/index';
import data from '../mock/flow.json';
import styles from './index.less';

class Index extends React.Component {
  render() {
    return (
      <GGEditor className={styles.editor}>
        <Flow
          className={styles.editorBd}
          data={data}
          graphConfig={{
            defaultNode: {
              shape: 'bizFlowNode',
            },
            defaultEdge: {
              shape: 'bizFlowEdge',
              linkRule: {
                entry: { out: 1, next: ['function', 'slot', 'response', 'assignment', 'invocation', 'switch'] },
                slot: { in: 1, out: 1, next: ['function', 'slot', 'response', 'assignment', 'invocation', 'switch'] },
                switch: { next: ['function', 'slot', 'response', 'assignment', 'invocation', 'switch'] },
                assignment: { out: 1, next: ['function', 'slot', 'response', 'assignment', 'invocation', 'switch'] },
                invocation: { out: 1, next: ['function', 'slot', 'response', 'assignment', 'invocation', 'switch'] },
                function: { next: ['function', 'slot', 'response', 'assignment', 'invocation', 'switch'] },
                response: { next: ['entry'] },
              },
            },
          }}
        />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
