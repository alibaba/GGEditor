import React from 'react';
import Editor from '@components/Base/Editor';
import { pick } from '@utils';
import { TOOLBAR_CONTAINER } from '@common/constants';
import BaseComponent from '@components/Base/BaseComponent';

class Toolbar extends BaseComponent {
  toolbar = null;

  get containerId() {
    const { editor } = this.context;

    return `${TOOLBAR_CONTAINER}_${editor.id}`;
  }

  constructor(props, context) {
    super(props);

    const { editor, onAfterAddPage } = context;

    onAfterAddPage(() => {
      this.toolbar = new Editor.Toolbar({
        container: this.containerId,
      });

      editor.add(this.toolbar);
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div id={this.containerId} {...pick(this.props, ['style', 'className'])}>
        {children}
      </div>
    );
  }
}

export default Toolbar;
