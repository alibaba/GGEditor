import React from 'react';
import { Divider } from 'antd';
import Button from './Button';
import styles from './index.less';

const MindToolbar = () => {
  return (
    <div className={styles.toolbar}>
      <Button command="undo" />
      <Button command="redo" />
      <Divider type="vertical" />
      {/* <Button command="zoomIn" icon="zoom-in" text="Zoom In" /> */}
      {/* <Button command="zoomOut" icon="zoom-out" text="Zoom Out" /> */}
      {/* <Button command="autoZoom" icon="fit-map" text="Fit Map" /> */}
      {/* <Button command="resetZoom" icon="actual-size" text="Actual Size" /> */}
      <Divider type="vertical" />
      <Button command="topic" icon="append" />
      <Button command="subtopic" icon="append-child" />
      <Divider type="vertical" />
      <Button command="fold" icon="collapse" text="Fold" />
      <Button command="unfold" icon="expand" text="Unfold" />
    </div>
  );
};

export default MindToolbar;
