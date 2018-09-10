import React from 'react';
import { pick } from '@utils';
import { EVENT_AFTER_ADD_PAGE } from '@common/constants';
import BaseComponent from '@components/Base/BaseComponent';
import Item from './item';

class ItemPanel extends BaseComponent {
  page = null;

  constructor(props, context) {
    super(props, context);

    this.bindEvent({ context });
  }

  handleMouseUp = () => {
    this.page.cancelAdd();
  }

  bindEvent({ context }) {
    const { editor } = context;

    editor.on(EVENT_AFTER_ADD_PAGE, ({ page }) => {
      this.page = page;

      document.addEventListener('mouseup', this.handleMouseUp);
    });
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp);
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
