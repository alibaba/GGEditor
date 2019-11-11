import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from 'antd';
import GGEditor, { Flow, RegisterNode } from '../../../src';
import ItemPopover from '../../../src/plugins/ItemPopover';
import ContextMenu from '../../../src/plugins/ContextMenu';
import styles from './index.less';

const data = {
  nodes: [
    {
      id: '0',
      label: 'Node',
      x: 55,
      y: 55,
      statusIconColor: true,
    },
    {
      id: '1',
      label: 'Node',
      x: 55,
      y: 255,
      statusIconColor: 'brown',
    },
  ],
  edges: [
    {
      label: 'Label',
      source: '0',
      target: '1',
    },
  ],
};

/* 自定义节点shape配置 */
const nodeShapeConfig = {
  themeColor: 'brown',
  showMenuIcon: true,
};

class Index extends React.Component {
  renderItemPopoverContent(/* item: G6.Item */) {
    return 'Content';
  }

  renderContextMenuContent(item: G6.Item, hide: () => void) {
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
        <RegisterNode name="customFlowNode" extend="bizNode" config={nodeShapeConfig} />
        <Flow
          className={styles.editorBd}
          data={data}
          graphConfig={{
            defaultEdge: {
              shape: 'bizFlowEdge',
            },
            defaultNode: {
              shape: 'customFlowNode',
            },
          }}
        />
        <ItemPopover renderContent={this.renderItemPopoverContent} />
        <ContextMenu renderContent={this.renderContextMenuContent} />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
