import React from 'react';
import { ContextMenu, Command } from '@src';
import styles from './index.scss';

class EditorContextMenu extends React.Component {
  render() {
    return (
      <ContextMenu className={styles.contextMenu}>
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
      </ContextMenu>
    );
  }
}

export default EditorContextMenu;
