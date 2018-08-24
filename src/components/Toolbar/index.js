import React from 'react';
import Editor from '@antv/g6-editor';
import { pick } from '@utils';
import { TOOLBAR_CONTAINER } from '@common/constants';
import BaseComponent from '../Base';

class Toolbar extends BaseComponent {
  toolbar = null;

  componentDidMount() {
    const { editor } = this.context;

    this.toolbar = new Editor.Toolbar({
      container: TOOLBAR_CONTAINER,
    });

    editor.add(this.toolbar);
  }

  render() {
    const { children } = this.props;

    return (
      <div id={TOOLBAR_CONTAINER} {...pick(this.props, ['style', 'className'])}>
        {children}
      </div>
    );
  }
}

export default Toolbar;
