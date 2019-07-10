import React from 'react';
import { Card } from 'antd';
import { NodePanel, MultiPanel, CanvasPanel } from 'gg-editor';
import DetailForm from './DetailForm';
import styles from './index.less';

const MindDetailPanel = () => {
  return (
    <div className={styles.detailPanel}>
      <NodePanel>
        <DetailForm type="node" />
      </NodePanel>
      <MultiPanel>
        <Card type="inner" size="small" title="Multi Select" bordered={false} />
      </MultiPanel>
      <CanvasPanel>
        <Card type="inner" size="small" title="Canvas" bordered={false} />
      </CanvasPanel>
    </div>
  );
};

export default MindDetailPanel;
