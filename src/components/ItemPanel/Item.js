import React from 'react';
import BaseComponent from '@components/Base/BaseComponent';

class Item extends BaseComponent {
  constructor(props, context) {
    super(props, context);

    this.bindEvent({ context });
  }

  handleMouseDown = () => {
    const { type, size, shape, model } = this.props;

    if (this.page) {
      this.page.beginAdd(type, {
        type,
        size,
        shape,
        ...model,
      });
    }
  }

  bindEvent({ context }) {
    const { onAfterAddPage } = context;

    onAfterAddPage(({ page }) => {
      this.page = page;
    });
  }

  render() {
    const { src, shape, children } = this.props;

    return (
      <div style={{ cursor: 'pointer' }} onMouseDown={this.handleMouseDown}>
        {src ? <img src={src} alt={shape} draggable={false} /> : children}
      </div>
    );
  }
}

export default Item;
