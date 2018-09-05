import React from 'react';
import Editor from '@components/Base/Editor';
import { pick } from '@utils';
import { MINIMAP_CONTAINER } from '@common/constants';
import BaseComponent from '@components/Base/BaseComponent';

class Minimap extends BaseComponent {
  get containerId() {
    const { editorId } = this.context;

    return `${MINIMAP_CONTAINER}_${editorId}`;
  }

  componentDidMount() {
    const { editor } = this.context;
    const {
      container = this.containerId,
      width,
      height,
      viewportWindowStyle,
      viewportBackStyle,
    } = this.props;

    const { clientWidth, clientHeight } = document.getElementById(container);

    editor.add(new Editor.Minimap({
      container,
      width: width || clientWidth,
      height: height || clientHeight,
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
      <div id={this.containerId} {...pick(this.props, ['style', 'className'])} />
    );
  }
}

export default Minimap;
