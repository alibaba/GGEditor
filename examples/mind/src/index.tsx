import React from 'react';
import ReactDOM from 'react-dom';
import GGEditor, { Mind } from '../../../lib';
import styles from './index.less';

const data = {
  label: '中心主题',
  children: [
    {
      label: '分支主题 1',
    },
    {
      label: '分支主题 2',
    },
    {
      label: '分支主题 3',
    },
  ],
};

class Index extends React.Component {
  render() {
    return (
      <GGEditor className={styles.editor}>
        <Mind className={styles.editorBd} data={data} />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
