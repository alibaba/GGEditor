import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from 'antd';
import GGEditor, { Flow, ContextMenu } from '@/index';
import data from '../mock/flow.json';
import styles from './index.less';

class Index extends React.Component {
  renderContent(item: G6.Item, hide: () => void) {
    return (
      <Menu mode="vertical" selectable={false} onClick={hide}>
        <Menu.Item>Option 1</Menu.Item>
        <Menu.Item>Option 2</Menu.Item>
        <Menu.Item>Option 3</Menu.Item>
      </Menu>
    );
  }

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
        <ContextMenu renderContent={this.renderContent} />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
