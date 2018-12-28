import React from 'react';
import { Card } from 'antd';
import {
  NodePanel,
  EdgePanel,
  GroupPanel,
  MultiPanel,
  CanvasPanel,
  DetailPanel,
} from '@src';
import NodeDetail from '../NodeDetail';
import EdgeDetail from '../EdgeDetail';
import GroupDetail from '../GroupDetail';
import styles from './index.less';

class FlowDetailPanel extends React.Component {
  render() {
    return (
      <DetailPanel className={styles.detailPanel}>
        <NodePanel>
          <NodeDetail />
        </NodePanel>
        <EdgePanel>
          <EdgeDetail />
        </EdgePanel>
        <GroupPanel>
          <GroupDetail />
        </GroupPanel>
        <MultiPanel>
          <Card type="inner" title="多选属性" bordered={false} />
        </MultiPanel>
        <CanvasPanel>
          <Card type="inner" title="画布属性" bordered={false} />
        </CanvasPanel>
      </DetailPanel>
    );
  }
}

export default FlowDetailPanel;
