import React from 'react';
import Editor from '@components/Base/Editor';
import { pick } from '@utils';
import { MINIMAP_CONTAINER } from '@common/constants';
import withGGEditorContext from '@common/context/GGEditorContext/withGGEditorContext';

class Minimap extends React.Component {
  get containerId() {
    const { editor } = this.props;

    return `${MINIMAP_CONTAINER}_${editor.id}`;
  }

  componentDidMount() {
    const { editor } = this.props;
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

    return <div id={this.containerId} {...pick(this.props, ['style', 'className'])} />;
  }
}

export default withGGEditorContext(Minimap);
