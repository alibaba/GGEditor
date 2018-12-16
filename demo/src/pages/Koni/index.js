import React from 'react';
import {Row, Col} from 'antd';
import GGEditor, {Koni, RegisterCommand, RegisterNode} from '@src';
import EditorMinimap from '../../components/EditorMinimap';
import {KoniContextMenu} from '../../components/EditorContextMenu';
import {KoniToolbar} from '../../components/EditorToolbar';
import {KoniItemPanel} from '../../components/EditorItemPanel';
import {KoniDetailPanel} from '../../components/EditorDetailPanel';
import styles from './index.scss';
class KoniPage extends React.Component {
    saveRemoteConfig = {
        queue: false,  // 命令是否进入队列，默认是 true
        // 命令是否可用
        enable(editor) {
            return true
        },
        // 正向命令
        execute(editor) {
            console.log("editor save", editor.getCurrentPage().save());
        },
        // 反向命令
        back(editor) {
            console.log("editor back", editor);
        }
    };
    graphModelConfig = {
        draw(item) {
            const keyShape = this.drawKeyShape(item);
            this.drawIcon(item);
            return keyShape;
        },
        drawIcon(item) {
            const group = item.getGraphicGroup();
            const model = item.getModel();
            const { icon } = model;

            group.addShape('image', {
                attrs: {
                    x: -7,
                    y: -7,
                    img: icon
                }
            });
        }
    };

    renderKoni() {
        return (
            <Koni className={styles.koni}/>
        );
    }

    render() {
        return (
            <GGEditor className={styles.editor}>
                <Row type="flex" className={styles.editorHd}>
                    <Col span={24}>
                        <KoniToolbar/>
                    </Col>
                </Row>
                <Row type="flex" className={styles.editorBd}>
                    <Col span={4} className={styles.editorSidebar}>
                        <KoniItemPanel/>
                    </Col>
                    <Col span={16} className={styles.editorContent}>
                        {this.renderKoni()}
                    </Col>
                    <Col span={4} className={styles.editorSidebar}>
                        <KoniDetailPanel/>
                        <EditorMinimap/>
                    </Col>
                </Row>
                <KoniContextMenu/>
                <RegisterCommand name="saveRemote" config={this.saveRemoteConfig}/>
                <RegisterNode name="graph-model" config={this.graphModelConfig}/>
            </GGEditor>
        );
    }
}

export default KoniPage;
