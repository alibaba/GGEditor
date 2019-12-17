import React from 'react';
import ReactDOM from 'react-dom';
import { Popover } from 'antd';
import GGEditor, { Flow, ItemPopover } from '@/index';
import data from '../mock/flow.json';
import styles from './index.less';

class Index extends React.Component {
  render() {
    return (
      <GGEditor className={styles.editor}>
        <div className={styles.editorHd} />
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
          }}
        />
        <ItemPopover
          renderContent={(item, position) => {
            const { minY: top, centerX: left } = position;

            return (
              <Popover visible={true} title="Title" content="Content">
                <div style={{ position: 'absolute', top, left }} />
              </Popover>
            );
          }}
        />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
