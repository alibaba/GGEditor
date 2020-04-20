import React from 'react';
import { Menu } from 'antd';
import GGEditor, { Flow, ContextMenu } from 'gg-editor';
import styles from './index.less';

const data = {
  nodes: [
    {
      id: '0',
      label: 'Node',
      x: 50,
      y: 50,
    },
    {
      id: '1',
      label: 'Node',
      x: 50,
      y: 200,
    },
  ],
  edges: [
    {
      label: 'Label',
      source: '0',
      sourceAnchor: 1,
      target: '1',
      targetAnchor: 0,
    },
  ],
};

function App() {
  return (
    <GGEditor>
      <Flow className={styles.graph} data={data} />
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

export default App;
