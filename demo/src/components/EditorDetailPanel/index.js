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
import styles from './index.scss';

class EditorDetailPanel extends React.Component {
  render() {
    return (
      <DetailPanel className={styles.detailPanel}>
        <NodePanel>
          <NodeDetail />
        </NodePanel>
        <EdgePanel>
          <Card type="inner" title="边线属性" bordered={false} />
        </EdgePanel>
        <GroupPanel>
          <Card type="inner" title="群组属性" bordered={false} />
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

export default EditorDetailPanel;
