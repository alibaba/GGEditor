import React from 'react';
import { pick } from '@utils';
import withEditorContext from '@common/EditorContext/withEditorContext';
import Item from './Item';

class ItemPanel extends React.PureComponent {

  constructor(props) {
    super(props);
    this.bindEvent();
  }

  handleMouseUp = () => {
    this.page.cancelAdd();
  };

  bindEvent() {
   /* const { onAfterAddPage } = this.props;

    onAfterAddPage(({ page }) => {
      this.page = page;

      document.addEventListener('mouseup', this.handleMouseUp);
    });*/
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  render() {
    const { children } = this.props;
    console.log(this.props)

    return (
      <div id={this.containerId} {...pick(this.props, ['style', 'className'])}>
        {children}
      </div>
    );
  }
}

export { Item };

export default withEditorContext(ItemPanel, ({ graph, graphState }) => ({
  graph,
  graphState,
}));
