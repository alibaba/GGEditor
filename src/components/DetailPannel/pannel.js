import React from 'react';
import { pick } from '@utils';
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
    const { status, children } = this.props;
    const { type } = this;

    if (`${type}-selected` !== status) {
      return null;
    }

    return (
      <div {...pick(this.props, ['style', 'className'])}>
        {
          React.Children.toArray(children).map(child => React.cloneElement(child, {
            ...this.context.propsAPI,
          }))
        }
      </div>
    );
  }
}

export default Pannel;
