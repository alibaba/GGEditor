import React from 'react';
import withGGEditor from '@common/context/GGEditorContext/withGGEditor';

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.bindEvent();
  }

  handleMouseDown = () => {
    const { type, size, shape, model } = this.props;

    if (this.page) {
      this.page.beginAdd(type, {
        type,
        size,
        shape,
        ...model,
      });
    }
  }

  bindEvent() {
    const { onAfterAddPage } = this.props;

    onAfterAddPage(({ page }) => {
      this.page = page;
    });
  }

  render() {
    const { src, shape, children } = this.props;

    return (
      <div style={{ cursor: 'pointer' }} onMouseDown={this.handleMouseDown}>
        {src ? <img src={src} alt={shape} draggable={false} /> : children}
      </div>
    );
  }
}

export default withGGEditor(Item);
