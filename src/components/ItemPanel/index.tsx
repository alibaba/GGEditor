import React from 'react';
import pick from 'lodash/pick';
import Item from './Item';

interface ItemPanelProps {}

interface ItemPanelState {}

class ItemPanel extends React.PureComponent<ItemPanelProps, ItemPanelState> {
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
    }); */
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp);
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

export { Item };

export default ItemPanel;
