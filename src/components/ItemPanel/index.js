import React from 'react';
import Editor from '@components/Base/Editor';
import { pick } from '@utils';
import { ITEM_PANEL_CONTAINER } from '@common/constants';
import BaseComponent from '@components/Base/BaseComponent';
import Item from './item';

Editor.ItemPanel = Editor.Itempannel || Editor.Itempanel;

class ItemPanel extends BaseComponent {
  itemPanel = null;

  get containerId() {
    const { editorId } = this.context;

    return `${ITEM_PANEL_CONTAINER}_${editorId}`;
  }

  componentDidMount() {
    const { editor } = this.context;

    this.itemPanel = new Editor.ItemPanel({
      container: this.containerId,
    });

    editor.add(this.itemPanel);
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

export { Item };

export default ItemPanel;
