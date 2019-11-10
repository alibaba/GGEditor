import React from 'react';
import ReactDOM from 'react-dom';
import GGEditor, { Flow } from '../../../src';
import styles from './index.less';

const data = {
  nodes: [
    {
      id: '0',
      shape: 'bizFlowNode',
      label: '开始节点',
      x: 55,
      y: 55,
    },
    {
      id: '1',
      shape: 'bizFlowNode',
      label: '结束节点',
      x: 55,
      y: 255,
    },
  ],
  edges: [
    {
      label: '测试文案',
      source: '0',
      target: '1',
    },
  ],
};

class Index extends React.Component {
  render() {
    return (
      <GGEditor className={styles.editor}>
        <Flow
          className={styles.editorBd}
          data={data}
          graphConfig={{
            defaultEdge: {
              shape: 'bizFlowEdge',
            },
          }}
        />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
