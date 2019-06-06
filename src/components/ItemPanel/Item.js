import React from 'react';
import withEditorContext from '@common/EditorContext/withEditorContext';

class Item extends React.PureComponent {
  constructor(props) {
    super(props);
    this.itemOfPanel = React.createRef();
    this.state = {
      shadowShape: null,
    };

    this.bindEvent();
  }

  handleMouseDown = (ev) => {
    // console.log(this.props);

    /* executeCommand('add', {
       type,
       model: {
         ...model,
         shape,
         size: size.split('*'),
       },
     }); */
    const shadowShape = this.createShadowShape();
    this.setState({
      shadowShape,
    });
  };

  createShadowShape() {
    const { type, size, model, executeCommand, shape, graph, src } = this.props;

    const Img = document.createElement('img');
    Img.src = src;
    const shadowShape = document.createElement('div');
    const styleObj = `
      width: ${Img.width}px;
      height: ${Img.height}px;
      border: dashed 3px #1890FF;
      position: absolute;
      opacity: 0.9;
      background-color: rgba(242,248,252,0.5);
      top: ${this.itemOfPanel.current.getBoundingClientRect().top}px;
      left: ${this.itemOfPanel.current.getBoundingClientRect().left}px;
      z-index: 9999;  
      background-color: '#ccc';
      cursor: pointer;
    `;

    shadowShape.setAttribute('style', styleObj);
    shadowShape.setAttribute('draggable', 'true');
    document.body.appendChild(shadowShape);
    shadowShape.addEventListener('dragstart', ev => this.handleDragstart(ev), false);
    shadowShape.addEventListener('drag', ev => this.handleDrag(ev), false);
    document.addEventListener('dragover', ev => ev.preventDefault(), false);
    shadowShape.addEventListener('dragend', ev => this.handleDragend(ev), false);
    return shadowShape;
  }

  handleDragstart(ev) {
    ev.target.style.opacity = '0';
  }

  handleDrag(ev) {
    const { shadowShape } = this.state;
    ev.target.style.opacity = '0.5';
    const left = `${ev.clientX - shadowShape.offsetWidth / 2}px`;
    const top = `${ev.clientY - shadowShape.offsetHeight / 2}px`;
    ev.target.style.left = left;
    ev.target.style.top = top;
  }

  handleDragend(ev) {
    const { shadowShape } = this.state;
    document.body.removeChild(shadowShape);
    document.body.appendChild(shadowShape);
    ev.target.style.opacity = '1';
  }

  bindEvent() {
    /* const { onAfterAddPage } = this.props;

     onAfterAddPage(({ page }) => {
       this.page = page;
     }); */
  }

  render() {
    const { src, shape, children } = this.props;

    return (
      <div style={{ cursor: 'pointer' }} onMouseDown={this.handleMouseDown} ref={this.itemOfPanel}>
        {src ? <img src={src} alt={shape} draggable={false}/> : children}
      </div>
    );
  }
}

export default withEditorContext(Item,
  ({
    graph,
    graphState,
    canExecuteCommand,
    executeCommand,
  }) => ({
    graph,
    graphState,
    canExecuteCommand,
    executeCommand,
  }));
