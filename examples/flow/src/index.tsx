import React from 'react';
import ReactDOM from 'react-dom';
import GGEditor, { Flow, RegisterNode } from '../../../src';
import styles from './index.less';

const data = {
  nodes: [
    {
      id: '0',
      label: '开始节点',
      x: 55,
      y: 55,
      statusIconColor: true,
    },
    {
      id: '1',
      label: '结束节点',
      x: 55,
      y: 255,
      statusIconColor: 'brown',
    },
  ],
  edges: [
    {
      label: '测试文案',
      source: '0',
      target: '1',
    },
  ],
};

/* 自定义节点shape配置 */
const nodeShapeConfig = {
  themeColor: 'brown',
  showMenuIcon: true,
};

class Index extends React.Component {
  render() {
    return (
      <GGEditor className={styles.editor}>
        <RegisterNode name="customFlowNode" extend="bizNode" config={nodeShapeConfig} />
        <Flow
          className={styles.editorBd}
          data={data}
          graphConfig={{
            defaultEdge: {
              shape: 'bizFlowEdge',
            },
            defaultNode: {
              shape: 'customFlowNode',
            },
          }}
        />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
