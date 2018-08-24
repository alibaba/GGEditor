import React from 'react';
import Editor from '@antv/g6-editor';
import { MINIMAP_CONTAINER } from '@common/constants';
import BaseComponent from '@components/Base';

class Minimap extends BaseComponent {
  componentDidMount() {
    const { editor } = this.context;
    const {
      container,
      width,
      height,
      viewportWindowStyle,
      viewportBackStyle,
    } = this.props;

    editor.add(new Editor.Minimap({
      container: container || MINIMAP_CONTAINER,
      width,
      height,
      viewportWindowStyle,
      viewportBackStyle,
    }));
  }

  render() {
    const { container } = this.props;

    if (container) {
      return null;
    }

    return (
      <div id={MINIMAP_CONTAINER} />
    );
  }
}

export default Minimap;
