import React from 'react';
import { Row, Col } from 'antd';
import GGEditor, { Mind, RegisterNode } from 'gg-editor';
import { MindToolbar } from '../components/EditorToolbar';
import { MindDetailPanel } from '../components/EditorDetailPanel';
import data from '../mock/mind.json';
import styles from '../Flow/index.less';
import { MindContextMenu } from '../components/EditorContextMenu';

const MindPage = () => {
  const mindModes = (mode, behaviors) => {
    return {
      ...behaviors,
      'node-popover': {
        type: 'node-popover',
        formatText(model) {
          return model.errorMsg;
        },
      },
    };
  };

  const customNodeConfig = () => {
    return {
      showMenuIcon() {
        return false;
      },

      afterUpdate(model, item) {
        if (model.isError) {
          item.setState('error', true);
        } else {
          item.setState('error', false);
        }
      },
    };
  };

  return (
    <GGEditor className={styles.editor}>
      <Row type="flex" className={styles.editorHd}>
        <Col span={24}>
          <MindToolbar />
        </Col>
      </Row>
      <Row type="flex" className={styles.editorBd}>
        <Col span={20} className={styles.editorContent}>
          <Mind
            data={data}
            className={styles.mind}
            customModes={mindModes}
            graphConfig={{ defaultNode: { shape: 'custom-mind-node' } }}
          />
        </Col>
        <Col span={4} className={styles.editorSidebar}>
          <MindDetailPanel />
        </Col>
      </Row>
      <MindContextMenu />
      <RegisterNode extend="mind-node" config={customNodeConfig()} name="custom-mind-node" />
    </GGEditor>
  );
};

export default MindPage;
