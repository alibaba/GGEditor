import React from 'react';
import Editor from '@antv/g6-editor';
import { pick } from '@utils';
import { TOOLBAR_CONTAINER } from '@common/constants';
import BaseComponent from '../Base';

class Toolbar extends BaseComponent {
  toolbar = null;

  get containerId() {
    const { editorId } = this.context;

    return `${TOOLBAR_CONTAINER}_${editorId}`;
  }

  componentDidMount() {
    const { editor } = this.context;

    this.toolbar = new Editor.Toolbar({
      container: this.containerId,
    });

    editor.add(this.toolbar);
  }

  render() {
    const { children } = this.props;

    return (
      <div id={this.containerId} {...pick(this.props, ['style', 'className'])}>
        {children}
      </div>
    );
  }
}

export default Toolbar;
