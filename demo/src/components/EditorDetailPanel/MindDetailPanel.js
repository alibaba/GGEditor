import React from 'react';
import { Card } from 'antd';
import {
  NodePanel,
  CanvasPanel,
  DetailPanel,
} from '@src';
import NodeDetail from '../NodeDetail';
import styles from './index.less';

class MindDetailPanel extends React.Component {
  render() {
    return (
      <DetailPanel className={styles.detailPanel}>
        <NodePanel>
          <NodeDetail />
        </NodePanel>
        <CanvasPanel>
          <Card type="inner" title="画布属性" bordered={false} />
        </CanvasPanel>
      </DetailPanel>
    );
  }
}

export default MindDetailPanel;
