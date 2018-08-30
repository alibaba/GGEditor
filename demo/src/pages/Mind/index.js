import React from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Mind } from '@src';
import EditorMinimap from '../../components/EditorMinimap';
import EditorContextMenu from '../../components/EditorContextMenu';
import EditorToolbar from '../../components/EditorToolbar';
import EditorDetailPanel from '../../components/EditorDetailPanel';
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
            <EditorToolbar />
          </Col>
        </Row>
        <Row type="flex" className={styles.editorBd}>
          <Col span={20} className={styles.editorContent}>
            {this.renderMind()}
          </Col>
          <Col span={4} className={styles.editorSidebar}>
            <EditorDetailPanel />
            <EditorMinimap />
          </Col>
        </Row>
        <EditorContextMenu />
      </GGEditor>
    );
  }
}

export default MindPage;
