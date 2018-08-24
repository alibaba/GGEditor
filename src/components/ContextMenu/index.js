import React from 'react';
import Editor from '@antv/g6-editor';
import { CONTEXT_MENU_CONTAINER } from '@common/constants';
import BaseComponent from '@components/Base';

class ContextMenu extends BaseComponent {
  contextMenu = null;

  componentDidMount() {
    const { editor } = this.context;

    this.contextMenu = new Editor.Contextmenu({
      container: CONTEXT_MENU_CONTAINER,
    });

    editor.add(this.contextMenu);
  }

  render() {
    const { children } = this.props;

    return (
      <div id={CONTEXT_MENU_CONTAINER} style={{ display: 'none' }}>
        {children}
      </div>
    );
  }
}

export default ContextMenu;
