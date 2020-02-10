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

              const keyShape = group.addShape('rect', {
                attrs: {
                  x: 0,
                  y: 0,
                  width: 100,
                  height: 50,
                  fill: '#5487ea',
                  radius: 8,
                },
              });

              group.addShape('dom', {
                attrs: {
                  x: 15,
                  y: 0,
                  width: 70,
                  height: 50,
                  html: `<h1 style="color: #ffffff; line-height: 50px"}>${label}</h1>`,
                },
              });

              return keyShape;
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
