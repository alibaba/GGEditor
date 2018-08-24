import React from 'react';
import BaseComponent from '@components/Base';

class Pannel extends BaseComponent {
  static create = function (type) {
    return class TypedPannel extends Pannel {
      constructor(props) {
        super(props, type);
      }
    };
  }

  constructor(props, type) {
    super(props);

    this.type = type;
  }

  render() {
    const { status, items, children } = this.props;
    const { type } = this;

    return (
      <div style={{ display: `${type}-selected` === status ? 'block' : 'none' }}>
        {
          React.Children.toArray(children).map(child => React.cloneElement(child, {
            items,
            ...this.context,
          }))
        }
      </div>
    );
  }
}

export default Pannel;
