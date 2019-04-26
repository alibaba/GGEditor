import React from 'react';

class GGEditor extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>{children}</div>
    );
  }
}

export default GGEditor;
