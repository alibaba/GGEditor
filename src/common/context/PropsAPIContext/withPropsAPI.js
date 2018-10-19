import React from 'react';
import PropsAPIContext from '@common/context/PropsAPIContext';

export default function (WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <PropsAPIContext.Consumer>
          {propsAPI => <WrappedComponent propsAPI={propsAPI} {...this.props} />}
        </PropsAPIContext.Consumer>
      );
    }
  };
}
