import React from 'react';
import { pick } from '@utils';
import Editor from '@antv/g6-editor';
import { CONTEXT_MENU_CONTAINER } from '@common/constants';
import BaseComponent from '@components/Base';

class ContextMenu extends BaseComponent {
  contextMenu = null;

  get containerId() {
    const { editorId } = this.context;

    return `${CONTEXT_MENU_CONTAINER}_${editorId}`;
  }

  componentDidMount() {
    const { editor } = this.context;

    this.contextMenu = new Editor.Contextmenu({
      container: this.containerId,
    });

    editor.add(this.contextMenu);
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

export default ContextMenu;
