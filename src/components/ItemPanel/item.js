import React from 'react';
import { mapKeys } from '@utils';
import BaseComponent from '../Base/BaseComponent';

class Item extends BaseComponent {
  render() {
    const {
      src,
      type,
      size,
      shape,
      model,
      children,
    } = this.props;

    return (
      <div
        className="getItem"
        data-type={type}
        data-size={size}
        data-shape={shape}
        {
          ...mapKeys(model, (val, key) => `data-${key}`)
        }
        style={{ cursor: 'pointer' }}
      >
        {
          src ? <img alt="" src={src} draggable={false} /> : children
        }
      </div>
    );
  }
}

export default Item;
