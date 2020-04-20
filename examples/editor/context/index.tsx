import React from 'react';
import GGEditor, { Flow } from 'gg-editor';
import WrappedClassComponent from './WrappedClassComponent';
import WrappedFunctionComponent from './WrappedFunctionComponent';
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
      <Flow
        className={styles.graph}
        ref={component => {
          if (component) {
            console.log('graph:', component.graph);
          }
        }}
        data={data}
      />
      <WrappedClassComponent
        ref={component => {
          console.log('wrappedClassComponentRef:', component);
        }}
      />
      <WrappedFunctionComponent
        ref={el => {
          console.log('wrappedFunctionComponentRef:', el);
        }}
      />
    </GGEditor>
  );
}

export default App;
