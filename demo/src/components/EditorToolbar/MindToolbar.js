import React from 'react';
import { Tooltip, Divider } from 'antd';
import { Toolbar, Command } from '@src';
import styles from './index.less';
import iconfont from '../../theme/iconfont.less';

class FlowToolbar extends React.Component {
  render() {
    return (
      <Toolbar className={styles.toolbar}>
        <Command name="undo">
          <Tooltip title="撤销" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconUndo}`} />
          </Tooltip>
        </Command>
        <Command name="redo">
          <Tooltip title="重做" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconRedo}`} />
          </Tooltip>
        </Command>
        <Divider type="vertical" />
        <Command name="zoomIn">
          <Tooltip title="放大" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconZoomInO}`} />
          </Tooltip>
        </Command>
        <Command name="zoomOut">
          <Tooltip title="缩小" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconZoomOutO}`} />
          </Tooltip>
        </Command>
        <Command name="autoZoom">
          <Tooltip title="适应画布" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconFit}`} />
          </Tooltip>
        </Command>
        <Command name="resetZoom">
          <Tooltip title="实际尺寸" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.iconfont} ${iconfont.iconActualSizeO}`} />
          </Tooltip>
        </Command>
        <Divider type="vertical" />
        <Command name="append">
          <Tooltip title="插入同级" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.biIcon} ${iconfont.iconInsertSibling}`} />
          </Tooltip>
        </Command>
        <Command name="appendChild">
          <Tooltip title="插入子级" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.biIcon} ${iconfont.iconInsertChild}`} />
          </Tooltip>
        </Command>
        <Divider type="vertical" />
        <Command name="collapse">
          <Tooltip title="折叠" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.biIcon} ${iconfont.iconCollapseSubtree}`} />
          </Tooltip>
        </Command>
        <Command name="expand">
          <Tooltip title="展开" placement="bottom" overlayClassName={styles.tooltip}>
            <i className={`${iconfont.biIcon} ${iconfont.iconExpandSubtree}`} />
          </Tooltip>
        </Command>
      </Toolbar>
    );
  }
}

export default FlowToolbar;
