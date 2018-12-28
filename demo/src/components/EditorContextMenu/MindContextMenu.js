import React from 'react';
import {
  Command,
  NodeMenu,
  CanvasMenu,
  ContextMenu,
} from '@src';
import styles from './index.less';
import iconfont from '../../theme/iconfont.less';

class MindContextMenu extends React.Component {
  render() {
    return (
      <ContextMenu className={styles.contextMenu}>
        <NodeMenu>
          <Command name="append">
            <div className={styles.item}>
              <i className={`${iconfont.biIcon} ${iconfont.iconInsertSibling}`} />
              <span>插入同级</span>
            </div>
          </Command>
          <Command name="appendChild">
            <div className={styles.item}>
              <i className={`${iconfont.biIcon} ${iconfont.iconInsertChild}`} />
              <span>插入子级</span>
            </div>
          </Command>
          <Command name="collapse">
            <div className={styles.item}>
              <i className={`${iconfont.biIcon} ${iconfont.iconCollapseSubtree}`} />
              <span>折叠</span>
            </div>
          </Command>
          <Command name="expand">
            <div className={styles.item}>
              <i className={`${iconfont.biIcon} ${iconfont.iconExpandSubtree}`} />
              <span>展开</span>
            </div>
          </Command>
          <Command name="delete">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont.iconDeleteO}`} />
              <span>删除</span>
            </div>
          </Command>
        </NodeMenu>
        <CanvasMenu>
          <Command name="undo">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont.iconUndo}`} />
              <span>撤销</span>
            </div>
          </Command>
          <Command name="redo">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont.iconRedo}`} />
              <span>重做</span>
            </div>
          </Command>
        </CanvasMenu>
      </ContextMenu>
    );
  }
}

export default MindContextMenu;
