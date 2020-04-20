import React from 'react';
import GGEditor, { Mind } from 'gg-editor';
import styles from './index.less';

const data = {
  label: 'Central Topic',
  children: [
    {
      side: 'left',
      label: 'Main Topic 1',
    },
    {
      side: 'right',
      label: 'Main Topic 2',
    },
    {
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
