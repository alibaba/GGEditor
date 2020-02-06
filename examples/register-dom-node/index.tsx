import React from 'react';
import ReactDOM from 'react-dom';
import GGEditor, { Flow, RegisterNode, EditableLabel } from '@/index';
import data from '../mock/flow.json';
import styles from './index.less';

class Index extends React.Component {
  render() {
    return (
      <GGEditor className={styles.editor}>
        <Flow
          className={styles.editorBd}
          data={data}
          graphConfig={{ renderer: 'svg', defaultNode: { shape: 'customDomNode' } }}
        />
        <RegisterNode
          name="customDomNode"
          config={{
            draw(model, group) {
              const { label } = model;

              return group.addShape('dom', {
                attrs: {
                  x: 0,
                  y: 0,
                  width: 70,
                  height: 50,
                  html: `<h1>${label}</h1>`,
                },
              });
            },
            getAnchorPoints() {
              return [
                [0, 0.5],
                [1, 0.5],
                [0.5, 0],
                [0.5, 1],
              ];
            },
          }}
          extend="single-shape"
        />
        <EditableLabel />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
