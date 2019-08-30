import React from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Flow } from 'gg-editor';
import { FlowToolbar } from '../components/EditorToolbar';
import { FlowDetailPanel } from '../components/EditorDetailPanel';
import data from '../mock/flow.json';
import styles from './index.less';
import FlowItemPanel from '../components/EditorItemPanel/FlowItemPanel';

const FlowPage = () => {
  return (
    <GGEditor className={styles.editor}>
      <Row type="flex" className={styles.editorHd}>
        <Col span={24}>
          <FlowToolbar />
        </Col>
      </Row>
      <Row type="flex" className={styles.editorBd}>
        <Col span={4} className={styles.editorContent}>
          <FlowItemPanel />
        </Col>
        <Col span={16} className={styles.editorContent}>
          <Flow data={data} className={styles.flow} />
        </Col>
        <Col span={4} className={styles.editorSidebar}>
          <FlowDetailPanel />
        </Col>
      </Row>
    </GGEditor>
  );
};

export default FlowPage;
