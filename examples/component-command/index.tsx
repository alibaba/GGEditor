import React from 'react';
import ReactDOM from 'react-dom';
import upperFirst from 'lodash/upperFirst';
import { Divider, Tooltip, Menu } from 'antd';
import GGEditor, { Flow, Mind, Command } from '@/index';
import ContextMenu from '@/plugins/ContextMenu';
import { EditorCommand } from '@/common/constants/index.js';
import EditableLabel from '@/plugins/EditableLabel';
import flowData from '../mock/flow.json';
import mindData from '../mock/mind.json';
import IconFont from './IconFont';
import styles from './index.less';

class Index extends React.Component {
  renderContent = (item: G6.Item, position: { x: number; y: number }, hide: () => void) => {
    const { x: left, y: top } = position;

    return (
      <div className={styles.contextMenu} style={{ position: 'absolute', top, left }}>
        {[EditorCommand.Undo, EditorCommand.Redo, EditorCommand.PasteHere].map(name => {
          return (
            <Command key={name} name={name} className={styles.command} disabledClassName={styles.commandDisabled}>
              <div onClick={hide}>
                <IconFont type={`icon-${name}`} />
                <span>{upperFirst(name)}</span>
              </div>
            </Command>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <GGEditor className={styles.editor}>
        <div className={styles.editorHd}>
          {[
            EditorCommand.Undo,
            EditorCommand.Redo,
            '|',
            EditorCommand.Copy,
            EditorCommand.Paste,
            EditorCommand.Remove,
            '|',
            // EditorCommand.Topic,
            // EditorCommand.Subtopic,
            // '|',
            // EditorCommand.Fold,
            // EditorCommand.Unfold,
            // '|',
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
        <Flow
          className={styles.editorBd}
          data={flowData}
          graphConfig={{
            defaultNode: {
              shape: 'bizFlowNode',
            },
            defaultEdge: {
              shape: 'bizFlowEdge',
            },
          }}
        />
        {/* <Mind className={styles.editorBd} data={mindData} /> */}
        <EditableLabel />
        <ContextMenu renderContent={this.renderContent} />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
