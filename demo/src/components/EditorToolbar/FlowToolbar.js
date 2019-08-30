import React from 'react';
import { Divider } from 'antd';
import Button from './Button';
import styles from './index.less';

const FlowToolbar = () => {
  return (
    <div className={styles.toolbar}>
      <Button command="undo" />
      <Button command="redo" />
      <Divider type="vertical" />
      <Button command="remove" icon="delete" />
    </div>
  );
};

export default FlowToolbar;
