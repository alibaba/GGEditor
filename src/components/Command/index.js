import React from 'react';
import BaseComponent from '../Base';

class Command extends BaseComponent {
  render() {
    const { name, children } = this.props;

    return (
      <div className="command" data-command={name}>
        {children}
      </div>
    );
  }
}

export default Command;
