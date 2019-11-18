import React from 'react';
import ReactDOM from 'react-dom';
import GGEditor, { Mind } from '@/index';
import data from '../mock/mind.json';
import styles from './index.less';

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
