import React from 'react';
import ReactDOM from 'react-dom';
import GGEditor, { Flow, RegisterNode, EditableLabel, setAnchorPointsState } from '@/index';
import data from '../mock/flow.json';
import styles from './index.less';

class Index extends React.Component {
  render() {
    return (
      <GGEditor className={styles.editor}>
        <Flow
          className={styles.editorBd}
          data={data}
          // graphConfig={{ defaultNode: { type: 'customNode' } }}
          // graphConfig={{ defaultNode: { type: 'customStartNode' } }}
          graphConfig={{ defaultNode: { type: 'customInternalNode', size: 50 } }}
        />
        <RegisterNode
          name="customNode"
          config={{
            getCustomConfig(model) {
              return {
                wrapperStyle: {
                  fill: '#000000',
                },
              };
            },
          }}
          extend="bizFlowNode"
        />
        <RegisterNode
          name="customStartNode"
          config={{
            getCustomConfig(model) {
              return {
                size: [80, 40],
                wrapperStyle: {
                  fill: '#5E6A7D',
                },
                contentStyle: {
                  fill: '#5E6A7D',
                },
                labelStyle: {
                  fill: '#FFFFFF',
                },
              };
            },
            getAnchorPoints() {
              return [
                [0.5, 0],
                [0.5, 1],
                [0, 0.5],
                [1, 0.5],
              ];
            },
          }}
          extend="bizFlowNode"
        />
        <RegisterNode
          name="customInternalNode"
          config={{
            setState(name, value, item) {
              setAnchorPointsState.call(
                this,
                name,
                value,
                item,
                (item, anchorPoint) => {
                  const { width, height } = item.getKeyShape().getBBox();

                  const [x, y] = anchorPoint;

                  return {
                    x: width * x - width / 2,
                    y: height * y - height / 2,
                  };
                },
                (item, anchorPoint) => {
                  const { width, height } = item.getKeyShape().getBBox();

                  const [x, y] = anchorPoint;

                  return {
                    x: width * x - width / 2,
                    y: height * y - height / 2,
                  };
                },
              );
            },
            getAnchorPoints() {
              return [
                [0.5, 0],
                [0.5, 1],
                [0, 0.5],
                [1, 0.5],
              ];
            },
          }}
          extend="circle"
        />
        <EditableLabel />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
