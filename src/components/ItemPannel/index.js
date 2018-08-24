import React from 'react';
import Editor from '@antv/g6-editor';
import { pick } from '@utils';
import { ITEM_PANNEL_CONTAINER } from '@common/constants';
import BaseComponent from '@components/Base';
import Item from './item';

class ItemPannel extends BaseComponent {
  itemPannel = null;

  componentDidMount() {
    const { editor } = this.context;

    this.itemPannel = new Editor.Itempannel({
      container: ITEM_PANNEL_CONTAINER,
    });

    editor.add(this.itemPannel);
  }

  render() {
    const { children } = this.props;

    return (
      <div id={ITEM_PANNEL_CONTAINER} {...pick(this.props, ['style', 'className'])}>
        {children}
      </div>
    );
  }
}

export { Item };

export default ItemPannel;
