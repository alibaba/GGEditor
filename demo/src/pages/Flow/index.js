import React from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Flow } from '@src';
import EditorMinimap from '../../components/EditorMinimap';
import { FlowContextMenu } from '../../components/EditorContextMenu';
import { FlowToolbar } from '../../components/EditorToolbar';
import { FlowItemPanel } from '../../components/EditorItemPanel';
import { FlowDetailPanel } from '../../components/EditorDetailPanel';
import styles from './index.less';

class FlowPage extends React.Component {
  renderFlow() {
    return (
      <Flow className={styles.flow} />
    );
  }

  render() {
    return (
      <GGEditor className={styles.editor}>
        <Row type="flex" className={styles.editorHd}>
          <Col span={24}>
            <FlowToolbar />
          </Col>
        </Row>
        <Row type="flex" className={styles.editorBd}>
          <Col span={4} className={styles.editorSidebar}>
            <FlowItemPanel />
          </Col>
          <Col span={16} className={styles.editorContent}>
            {this.renderFlow()}
          </Col>
          <Col span={4} className={styles.editorSidebar}>
            <FlowDetailPanel />
            <EditorMinimap />
          </Col>
        </Row>
        <FlowContextMenu />
      </GGEditor>
    );
  }
}

export default FlowPage;
