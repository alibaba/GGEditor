import React from 'react';
import GGEditor, { Mind } from 'gg-editor';
import { MindData } from 'gg-editor/lib/common/interfaces';
import styles from './index.less';

const data: MindData = {
  id: '0',
  label: 'Central Topic',
  children: [
    {
      id: '1',
      side: 'left',
      label: 'Main Topic 1',
    },
    {
      id: '2',
      side: 'right',
      label: 'Main Topic 2',
    },
    {
      id: '3',
      side: 'right',
      label: 'Main Topic 3',
    },
  ],
};

function App() {
  return (
    <GGEditor>
      <Mind className={styles.graph} data={data} />
    </GGEditor>
  );
}

export default App;
