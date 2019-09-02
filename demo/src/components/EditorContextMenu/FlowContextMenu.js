import React from 'react';
import { NodeMenu, ContextMenu } from 'gg-editor';
import MenuItem from './MenuItem';
import styles from './index.less';

const FlowContextMenu = () => {
  return (
    <ContextMenu className={styles.contextMenu}>
      <NodeMenu>
        <MenuItem command="copy" />
        <MenuItem command="delete" />
      </NodeMenu>
    </ContextMenu>
  );
};

export default FlowContextMenu;
