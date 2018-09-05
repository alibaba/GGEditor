import React from 'react';
import { pick } from '@utils';
import Editor from '@components/Base/Editor';
import { CONTEXT_MENU_CONTAINER } from '@common/constants';
import BaseComponent from '@components/Base/BaseComponent';
import Menu from './menu';

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

export const NodeMenu = Menu.create('node');
export const EdgeMenu = Menu.create('edge');
export const GroupMenu = Menu.create('group');
export const MultiMenu = Menu.create('multi');
export const CanvasMenu = Menu.create('canvas');

export default ContextMenu;
