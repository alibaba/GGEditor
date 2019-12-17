import React from 'react';
import ReactDOM from 'react-dom';
import GGEditor, { Flow, ItemPopover } from '@/index';
import data from '../mock/flow.json';
import styles from './index.less';

class Index extends React.Component {
  renderTitle(/* item: G6.Item */) {
    return 'Title';
  }

  renderContent(/* item: G6.Item */) {
    return 'Content';
  }

  render() {
    return (
      <GGEditor className={styles.editor}>
        <Flow
          className={styles.editorBd}
          data={data}
          graphConfig={{
            defaultNode: {
              shape: 'bizNode',
            },
            defaultEdge: {
              shape: 'bizFlowEdge',
            },
          }}
        />
        <ItemPopover renderTitle={this.renderTitle} renderContent={this.renderContent} />
      </GGEditor>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
