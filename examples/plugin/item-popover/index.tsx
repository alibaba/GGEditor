import React from 'react';
import { Popover } from 'antd';
import GGEditor, { Flow, ItemPopover } from 'gg-editor';
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

export default App;
