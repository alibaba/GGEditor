import React from 'react';
import Editor from '@antv/g6-editor';
import { pick } from '@utils';
import { ITEM_PANNEL_CONTAINER } from '@common/constants';
import BaseComponent from '../Base';
import Item from './item';

class ItemPannel extends BaseComponent {
  itemPannel = null;

  get containerId() {
    const { editorId } = this.context;

    return `${ITEM_PANNEL_CONTAINER}_${editorId}`;
  }

  componentDidMount() {
    const { editor } = this.context;

    this.itemPannel = new Editor.Itempannel({
      container: this.containerId,
    });

    editor.add(this.itemPannel);
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

export default ItemPannel;
