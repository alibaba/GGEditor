import React from 'react';
import { Toolbar, Command } from '@src';
import styles from './index.scss';
import iconfont from '../../theme/iconfont.scss';

class EditorToolbar extends React.Component {
  render() {
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
}

export default EditorToolbar;
