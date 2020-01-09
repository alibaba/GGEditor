import React from 'react';
import ReactDOM from 'react-dom';
import GGEditor, { Flow } from '@/index';
import EditableLabel from '@/plugins/EditableLabel';
import data from '../mock/flow.json';
import { NodePanel, EdgePanel, MultiPanel, CanvasPanel } from './Panel';
import styles from './index.less';

class Index extends React.Component {
  render() {
    return (
      <GGEditor className={styles.editor}>
        <Flow className={styles.editorBd} data={data} />
        <div className={styles.editorFt}>
          <NodePanel />
          <EdgePanel />
          <MultiPanel />
          <CanvasPanel />
        </div>
        <EditableLabel />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
