import React from 'react';
import ReactDOM from 'react-dom';
import GGEditor, { Flow, EditableLabel } from '@/index';
import WrappedClassComponent from './WrappedClassComponent';
import WrappedFunctionComponent from './WrappedFunctionComponent';
import data from '../mock/flow.json';
import styles from './index.less';

class Index extends React.Component {
  render() {
    return (
      <GGEditor className={styles.editor}>
        <Flow
          className={styles.editorBd}
          ref={component => {
            if (component) {
              console.log('graph:', component.graph);
            }
          }}
          data={data}
        />
        <EditableLabel />
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
}

ReactDOM.render(<Index />, document.getElementById('root'));
