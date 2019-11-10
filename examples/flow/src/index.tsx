import React from 'react';
import ReactDOM from 'react-dom';
import GGEditor, { Flow, RegisterNode } from '../../../src';
import styles from './index.less';

const data = {
  nodes: [
    {
      id: '0',
      label: '起止节点',
      x: 55,
      y: 55,
      statusIconColor: true,
    },
    {
      id: '1',
      label: '结束节点',
      x: 55,
      y: 255,
      statusIconColor: 'brown ',
    },
  ],
  edges: [
    {
      source: '0',
      target: '1',
      startPoint: {
        x: 1,
        y: 1,
      },
      endPoint: {
        x: 2,
        y: 3,
      },
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
        <Flow className={styles.editorBd} data={data} graphConfig={{ defaultNode: { shape: 'customFlowNode' } }} />
        <RegisterNode name="customFlowNode" extend="bizNode" config={nodeShapeConfig} />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
