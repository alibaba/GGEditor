import React from 'react';
import { Row, Col, Card } from 'antd';
import GGEditor, {
  Flow,
  Command,
  Minimap,
  Toolbar,
  Item,
  ItemPanel,
  NodePanel,
  EdgePanel,
  GroupPanel,
  MultiPanel,
  CanvasPanel,
  DetailPanel,
} from '@src';
import NodeDetail from '../../components/NodeDetail';
import styles from './index.scss';
import iconfont from '../../theme/iconfont.scss';

class FlowPage extends React.Component {
  flow = null;

  renderFlow() {
    return (
      <Flow
        ref={(component) => {
          if (component) {
            this.flow = component.page;
          }
        }}
        className={styles.flow}
      />
    );
  }

  renderToolbar() {
    return (
      <Toolbar className={styles.toolbar}>
        <Command name="undo">
          <i className={`${iconfont.iconfont} ${iconfont.iconUndo}`} title="撤销" />
        </Command>
        <Command name="redo">
          <i className={`${iconfont.iconfont} ${iconfont.iconRedo}`} title="重做" />
        </Command>

        <Command name="copy">
          <i className={`${iconfont.iconfont} ${iconfont.iconCopyO}`} title="复制" />
        </Command>
        <Command name="paste">
          <i className={`${iconfont.iconfont} ${iconfont.iconPasterO}`} title="粘贴" />
        </Command>
        <Command name="delete">
          <i className={`${iconfont.iconfont} ${iconfont.iconDeleteO}`} title="删除" />
        </Command>

        <Command name="zoomIn">
          <i className={`${iconfont.iconfont} ${iconfont.iconZoomInO}`} title="放大" />
        </Command>
        <Command name="zoomOut">
          <i className={`${iconfont.iconfont} ${iconfont.iconZoomOutO}`} title="缩小" />
        </Command>
        <Command name="autoZoom">
          <i className={`${iconfont.iconfont} ${iconfont.iconFit}`} title="适应画布" />
        </Command>
        <Command name="resetZoom">
          <i className={`${iconfont.iconfont} ${iconfont.iconActualSizeO}`} title="实际尺寸" />
        </Command>

        <Command name="toBack">
          <i className={`${iconfont.iconfont} ${iconfont.iconToBack}`} title="层级后置" />
        </Command>
        <Command name="toFront">
          <i className={`${iconfont.iconfont} ${iconfont.iconToFront}`} title="层级前置" />
        </Command>

        <Command name="multiSelect">
          <i className={`${iconfont.iconfont} ${iconfont.iconSelect}`} title="多选" />
        </Command>
        <Command name="addGroup">
          <i className={`${iconfont.iconfont} ${iconfont.iconGroup}`} title="成组" />
        </Command>
        <Command name="unGroup">
          <i className={`${iconfont.iconfont} ${iconfont.iconUngroup}`} title="解组" />
        </Command>
      </Toolbar>
    );
  }

  renderItemPanel() {
    return (
      <ItemPanel className={styles.itemPanel}>
        <Card bordered={false}>
          <Item
            type="node"
            size="72*72"
            shape="flow-circle"
            model={{
              color: '#FA8C16',
              label: '起止节点',
            }}
            src="https://gw.alipayobjects.com/zos/rmsportal/ZnPxbVjKYADMYxkTQXRi.svg"
          />
          <Item
            type="node"
            size="80*48"
            shape="flow-rect"
            model={{
              color: '#1890FF',
              label: '常规节点',
            }}
            src="https://gw.alipayobjects.com/zos/rmsportal/wHcJakkCXDrUUlNkNzSy.svg"
          />
          <Item
            type="node"
            size="80*72"
            shape="flow-rhombus"
            model={{
              color: '#13C2C2',
              label: '分叉节点',
            }}
            src="https://gw.alipayobjects.com/zos/rmsportal/SnWIktArriZRWdGCnGfK.svg"
          />
          <Item
            type="node"
            size="80*48"
            shape="flow-capsule"
            model={{
              color: '#722ED1',
              label: '模型节点',
            }}
            src="https://gw.alipayobjects.com/zos/rmsportal/rQMUhHHSqwYsPwjXxcfP.svg"
          />
        </Card>
      </ItemPanel>
    );
  }

  renderDetailPanel() {
    return (
      <DetailPanel className={styles.detailPanel}>
        <NodePanel>
          <NodeDetail />
        </NodePanel>
        <EdgePanel>
          <Card type="inner" title="边线属性" bordered={false} />
        </EdgePanel>
        <GroupPanel>
          <Card type="inner" title="群组属性" bordered={false} />
        </GroupPanel>
        <MultiPanel>
          <Card type="inner" title="多选属性" bordered={false} />
        </MultiPanel>
        <CanvasPanel>
          <Card type="inner" title="画布属性" bordered={false} />
        </CanvasPanel>
      </DetailPanel>
    );
  }

  renderMinimap() {
    return (
      <Card type="inner" title="缩略图" bordered={false}>
        <Minimap height={200} />
      </Card>
    );
  }

  render() {
    return (
      <GGEditor className={styles.editor}>
        <Row type="flex" className={styles.editorHd}>
          <Col span={24}>
            {this.renderToolbar()}
          </Col>
        </Row>
        <Row type="flex" className={styles.editorBd}>
          <Col span={4} className={styles.editorSidebar}>
            {this.renderItemPanel()}
          </Col>
          <Col span={16} className={styles.editorContent}>
            {this.renderFlow()}
          </Col>
          <Col span={4} className={styles.editorSidebar}>
            {this.renderDetailPanel()}
            {this.renderMinimap()}
          </Col>
        </Row>
      </GGEditor>
    );
  }
}

export default FlowPage;
