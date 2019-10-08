import React from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Mind } from 'gg-editor';
import { MindToolbar } from '../components/EditorToolbar';
import { MindDetailPanel } from '../components/EditorDetailPanel';
import data from '../mock/mind.json';
import styles from '../Flow/index.less';
import { MindContextMenu } from '../components/EditorContextMenu';

const MindPage = () => {
  return (
    <GGEditor className={styles.editor}>
      <Row type="flex" className={styles.editorHd}>
        <Col span={24}>
          <MindToolbar />
        </Col>
      </Row>
      <Row type="flex" className={styles.editorBd}>
        <Col span={20} className={styles.editorContent}>
          <Mind data={data} className={styles.mind} />
        </Col>
        <Col span={4} className={styles.editorSidebar}>
          <MindDetailPanel />
        </Col>
      </Row>
      <MindContextMenu />
    </GGEditor>
  );
};

export default MindPage;
