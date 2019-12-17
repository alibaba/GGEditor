import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from 'antd';
import GGEditor, { Flow, ContextMenu } from '@/index';
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
              shape: 'bizNode',
            },
            defaultEdge: {
              shape: 'bizFlowEdge',
            },
          }}
        />
        <ContextMenu
          renderContent={(item, position, hide) => {
            const { x: left, y: top } = position;

            return (
              <div style={{ position: 'absolute', top, left }}>
                <Menu mode="vertical" selectable={false} onClick={hide}>
                  <Menu.Item>Option 1</Menu.Item>
                  <Menu.Item>Option 2</Menu.Item>
                  <Menu.Item>Option 3</Menu.Item>
                </Menu>
              </div>
            );
          }}
        />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
