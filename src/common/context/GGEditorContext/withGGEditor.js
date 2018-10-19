import React from 'react';
import GGEditorContext from '@common/context/GGEditorContext';

export default function (WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <GGEditorContext.Consumer>
          {GGEditor => <WrappedComponent {...GGEditor} {...this.props} />}
        </GGEditorContext.Consumer>
      );
    }
  };
}
