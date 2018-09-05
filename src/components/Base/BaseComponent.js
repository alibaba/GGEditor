import React from 'react';
import PropTypes from 'prop-types';

class BaseComponent extends React.Component {
  static contextTypes = {
    editor: PropTypes.object,
    editorId: PropTypes.number,
    propsAPI: PropTypes.object,
  }

  render() {
    return null;
  }
}

export default BaseComponent;
