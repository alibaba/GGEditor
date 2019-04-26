import React from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Mind } from 'gg-editor';
import data from '../mock/worldCup2018.json';
import styles from './index.less';

const MindPage = () => {
  return (
    <GGEditor className={styles.editor}>
      <Row type="flex" className={styles.editorBd}>
        <Col span={20} className={styles.editorContent}>
          <Mind data={data} className={styles.mind} />
        </Col>
        <Col span={4} className={styles.editorSidebar} />
      </Row>
    </GGEditor>
  );
};

export default MindPage;
