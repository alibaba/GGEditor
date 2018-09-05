import React from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Mind } from '@src';
import EditorMinimap from '../../components/EditorMinimap';
import { MindContextMenu } from '../../components/EditorContextMenu';
import { MindToolbar } from '../../components/EditorToolbar';
import { MindDetailPanel } from '../../components/EditorDetailPanel';
import data from '../../mock/worldCup2018.json';
import styles from './index.scss';

class MindPage extends React.Component {
  renderMind() {
    return (
      <Mind
        data={data}
        className={styles.mind}
      />
    );
  }

  render() {
    return (
      <GGEditor className={styles.editor}>
        <Row type="flex" className={styles.editorHd}>
          <Col span={24}>
            <MindToolbar />
          </Col>
        </Row>
        <Row type="flex" className={styles.editorBd}>
          <Col span={20} className={styles.editorContent}>
            {this.renderMind()}
          </Col>
          <Col span={4} className={styles.editorSidebar}>
            <MindDetailPanel />
            <EditorMinimap />
          </Col>
        </Row>
        <MindContextMenu />
      </GGEditor>
    );
  }
}

export default MindPage;
