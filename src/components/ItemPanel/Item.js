import React from 'react';
import withEditorContext from '@common/EditorContext/withEditorContext';

class Item extends React.PureComponent {
  constructor(props) {
    super(props);

    this.bindEvent();
  }

  handleMouseDown = () => {
    const { type, size, shape, model, graph } = this.props;
    console.log(this.props);
    graph.add(type, {
      size: size.split('*'),
      shape,
      ...model,
    });
  };

  bindEvent() {
    /* const { onAfterAddPage } = this.props;

     onAfterAddPage(({ page }) => {
       this.page = page;
     });*/
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

export default withEditorContext(Item);
