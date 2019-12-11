import React from 'react';
import ReactDOM from 'react-dom';
import { Divider, Tooltip } from 'antd';
import upperFirst from 'lodash/upperFirst';
import GGEditor, { Mind, Command } from '@/index';
import { EditorCommand } from '@/common/constants/index.js';
import EditableLabel from '@/plugins/EditableLabel';
import data from '../mock/mind.json';
import IconFont from './IconFont';
import styles from './index.less';

class Index extends React.Component {
  render() {
    return (
      <GGEditor className={styles.editor}>
        <div className={styles.editorHd}>
          {[
            EditorCommand.Undo,
            EditorCommand.Redo,
            '|',
            EditorCommand.Remove,
            '|',
            EditorCommand.Topic,
            EditorCommand.Subtopic,
            '|',
            EditorCommand.Fold,
            EditorCommand.Unfold,
            '|',
            EditorCommand.ZoomIn,
            EditorCommand.ZoomOut,
          ].map(name => {
            if (name === '|') {
              return <Divider type="vertical" />;
            }

            return (
              <Command key={name} name={name} className={styles.command} disabledClassName={styles.commandDisabled}>
                <Tooltip title={upperFirst(name)}>
                  <IconFont type={`icon-${name}`} />
                </Tooltip>
              </Command>
            );
          })}
        </div>
        <Mind className={styles.editorBd} data={data} />
        <EditableLabel />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
