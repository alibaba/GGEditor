import React from 'react';
import GGEditor, { Flow, RegisterNode, setAnchorPointsState } from 'gg-editor';
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
        data={data}
        graphConfig={{ defaultNode: { type: 'customNode' } }}
        // graphConfig={{ defaultNode: { type: 'customStartNode' } }}
        // graphConfig={{ defaultNode: { type: 'customInternalNode', size: 50 } }}
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
    </GGEditor>
  );
}

export default App;
