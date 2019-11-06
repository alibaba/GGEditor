import React from 'react';
import ReactDOM from 'react-dom';
import GGEditor, { Flow } from '../../../lib';
import styles from './index.less';

const data = {
  nodes: [
    {
      id: '0',
      label: '起止节点',
      x: 55,
      y: 55,
    },
    {
      id: '1',
      label: '结束节点',
      x: 55,
      y: 255,
    },
  ],
  edges: [
    {
      source: '0',
      target: '1',
      startPoint: {
        x: 1,
        y: 1,
      },
      endPoint: {
        x: 2,
        y: 3,
      },
    },
  ],
};

class Index extends React.Component {
  render() {
    return (
      <GGEditor className={styles.editor}>
        <Flow className={styles.editorBd} data={data} />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
