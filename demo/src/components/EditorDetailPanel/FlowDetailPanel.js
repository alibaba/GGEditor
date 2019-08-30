import React from 'react';
import { NodePanel, EdgePanel } from 'gg-editor';
import FlowDetailForm from './FlowDetailForm';
import styles from './index.less';

const FlowDetailPanel = () => {
  return (
    <div className={styles.detailPanel}>
      <NodePanel>
        <FlowDetailForm type="node" />
      </NodePanel>
      <EdgePanel>
        <FlowDetailForm type="edge" />
      </EdgePanel>
    </div>
  );
};

export default FlowDetailPanel;
