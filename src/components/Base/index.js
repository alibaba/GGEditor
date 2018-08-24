import React from 'react';
import PropTypes from 'prop-types';

class BaseComponent extends React.Component {
  static contextTypes = {
    editor: PropTypes.object,
    editorId: PropTypes.number,
    getCurrentPage: PropTypes.func,
    getSelected: PropTypes.func,
    addItem: PropTypes.func,
    removeItem: PropTypes.func,
    updateItem: PropTypes.func,
    findItem: PropTypes.func,
  }

  render() {
    return null;
  }
}

export default BaseComponent;
