import React from 'react';
import {
  Command,
  NodeMenu,
  EdgeMenu,
  GroupMenu,
  MultiMenu,
  CanvasMenu,
  ContextMenu,
} from '@src';
import styles from './index.scss';
import iconfont from '../../theme/iconfont.scss';

class FlowContextMenu extends React.Component {
  render() {
    return (
      <ContextMenu className={styles.contextMenu}>
        <NodeMenu>
          <Command name="copy">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont.iconCopyO}`} />
              <span>复制</span>
            </div>
          </Command>
          <Command name="delete">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont.iconDeleteO}`} />
              <span>删除</span>
            </div>
          </Command>
        </NodeMenu>
        <EdgeMenu>
          <Command name="delete">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont.iconDeleteO}`} />
              <span>删除</span>
            </div>
          </Command>
        </EdgeMenu>
        <GroupMenu>
          <Command name="copy">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont.iconCopyO}`} />
              <span>复制</span>
            </div>
          </Command>
          <Command name="delete">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont.iconDeleteO}`} />
              <span>删除</span>
            </div>
          </Command>
          <Command name="unGroup">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont.iconUngroup}`} />
              <span>解组</span>
            </div>
          </Command>
        </GroupMenu>
        <MultiMenu>
          <Command name="copy">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont.iconCopyO}`} />
              <span>复制</span>
            </div>
          </Command>
          <Command name="paste">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont.iconPasterO}`} />
              <span>粘贴</span>
            </div>
          </Command>
          <Command name="addGroup">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont.iconGroup}`} />
              <span>成组</span>
            </div>
          </Command>
          <Command name="delete">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont.iconDeleteO}`} />
              <span>删除</span>
            </div>
          </Command>
        </MultiMenu>
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
          <Command name="pasteHere">
            <div className={styles.item}>
              <i className={`${iconfont.iconfont} ${iconfont.iconPasterO}`} />
              <span>粘贴</span>
            </div>
          </Command>
        </CanvasMenu>
      </ContextMenu>
    );
  }
}

export default FlowContextMenu;
