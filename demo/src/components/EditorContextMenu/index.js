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

class EditorContextMenu extends React.Component {
  render() {
    return (
      <ContextMenu className={styles.contextMenu}>
        <NodeMenu>
          <Command name="copy">
            <div className={styles.item}>
              <span>复制</span>
              <span>copy</span>
            </div>
          </Command>
          <Command name="delete">
            <div className={styles.item}>
              <span>删除</span>
              <span>delete</span>
            </div>
          </Command>
        </NodeMenu>
        <EdgeMenu>
          <Command name="delete">
            <div className={styles.item}>
              <span>删除</span>
              <span>delete</span>
            </div>
          </Command>
        </EdgeMenu>
        <GroupMenu>
          <Command name="copy">
            <div className={styles.item}>
              <span>复制</span>
              <span>copy</span>
            </div>
          </Command>
          <Command name="delete">
            <div className={styles.item}>
              <span>删除</span>
              <span>delete</span>
            </div>
          </Command>
          <Command name="unGroup">
            <div className={styles.item}>
              <span>解组</span>
              <span>unGroup</span>
            </div>
          </Command>
        </GroupMenu>
        <MultiMenu>
          <Command name="copy">
            <div className={styles.item}>
              <span>复制</span>
              <span>copy</span>
            </div>
          </Command>
          <Command name="paste">
            <div className={styles.item}>
              <span>粘贴</span>
              <span>paste</span>
            </div>
          </Command>
          <Command name="addGroup">
            <div className={styles.item}>
              <span>归组</span>
              <span>addGroup</span>
            </div>
          </Command>
          <Command name="delete">
            <div className={styles.item}>
              <span>删除</span>
              <span>delete</span>
            </div>
          </Command>
        </MultiMenu>
        <CanvasMenu>
          <Command name="undo">
            <div className={styles.item}>
              <span>撤销</span>
              <span>undo</span>
            </div>
          </Command>
          <Command name="redo">
            <div className={styles.item}>
              <span>重做</span>
              <span>redo</span>
            </div>
          </Command>
          <Command name="pasteHere">
            <div className={styles.item}>
              <span>粘贴</span>
              <span>pasteHere</span>
            </div>
          </Command>
        </CanvasMenu>
      </ContextMenu>
    );
  }
}

export default EditorContextMenu;
