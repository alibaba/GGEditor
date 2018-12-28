import React from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Koni } from '@src';
import EditorMinimap from '../../components/EditorMinimap';
import { KoniContextMenu } from '../../components/EditorContextMenu';
import { KoniToolbar } from '../../components/EditorToolbar';
import { KoniItemPanel } from '../../components/EditorItemPanel';
import { KoniDetailPanel } from '../../components/EditorDetailPanel';
import KoniCustomNode from './shape/nodes/KoniCustomNode';
import styles from './index.less';

class KoniPage extends React.Component {
  renderKoni() {
    return (
      <Koni className={styles.koni} />
    );
  }

  render() {
    return (
      <GGEditor className={styles.editor}>
        <Row type="flex" className={styles.editorHd}>
          <Col span={24}>
            <KoniToolbar />
          </Col>
        </Row>
        <Row type="flex" className={styles.editorBd}>
          <Col span={4} className={styles.editorSidebar}>
            <KoniItemPanel />
          </Col>
          <Col span={16} className={styles.editorContent}>
            {this.renderKoni()}
          </Col>
          <Col span={4} className={styles.editorSidebar}>
            <KoniDetailPanel />
            <EditorMinimap />
          </Col>
        </Row>
        <KoniCustomNode />
        <KoniContextMenu />
      </GGEditor>
    );
  }
}

export default KoniPage;
