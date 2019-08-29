import React from 'react';
import { NodeMenu, CanvasMenu, ContextMenu } from 'gg-editor';
import MenuItem from './MenuItem';
import styles from './index.less';

const MindContextMenu = () => {
  return (
    <ContextMenu className={styles.contextMenu}>
      <NodeMenu>
        <MenuItem command="topic" text="Topic" />
        <MenuItem command="subtopic" icon="append-child" text="Subtopic" />
      </NodeMenu>
    </ContextMenu>
  );
};

export default MindContextMenu;
