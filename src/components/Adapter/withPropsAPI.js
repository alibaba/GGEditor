import React from 'react';
import PropTypes from 'prop-types';

export default function (WrappedComponent) {
  return class extends React.Component {
    static contextTypes = {
      propsAPI: PropTypes.object,
    };

    render() {
      return <WrappedComponent propsAPI={this.context.propsAPI} {...this.props} />;
    }
  };
}
