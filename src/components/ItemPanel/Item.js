import React from 'react';
import withEditorContext from '@common/EditorContext/withEditorContext';

class Item extends React.PureComponent {
  constructor(props) {
    super(props);
    this.itemOnPanel = React.createRef();
    this.state = {
      shadowShape: null,
      dragShape: null,
      dragShapeID: 'temp_drag_node',
    };
  }

  handleMouseDown = () => {
    const shadowShape = this.createShadowShape();
    document.body.appendChild(shadowShape);
    this.setState({
      shadowShape,
    });
  };

  handleMouseUp = () => {
    this.unloadDragShape();
  };

  createShadowShape() {
    const { src } = this.props;

    const Img = document.createElement('img');
    Img.src = src;
    const shadowShape = document.createElement('div');
    const styleObj = `
      width: ${Img.width}px;
      height: ${Img.height}px;
      position: absolute;
      opacity: 0;
      top: ${this.itemOnPanel.current.getBoundingClientRect().top}px;
      left: ${this.itemOnPanel.current.getBoundingClientRect().left}px;
      cursor: pointer;
    `;

    shadowShape.setAttribute('style', styleObj);
    shadowShape.setAttribute('draggable', 'true');
    shadowShape.addEventListener('drag', this.handleDrag, false);
    document.addEventListener('dragover', this.handleDragover, false);
    document.addEventListener('dragenter', this.handleDragenter, false);
    shadowShape.addEventListener('dragend', this.handleDragend, false);
    shadowShape.addEventListener('mouseup', this.handleMouseUp, false);
    return shadowShape;
  }

  handleDragover = (ev) => {
    ev.preventDefault();
  };

  handleDragenter = (ev) => {
    const { graph } = this.props;
    const transferredPos = graph.getPointByClient(ev.clientX, ev.clientY);

    const canvas = graph.get('container').getElementsByTagName('canvas')[0];
    // drag into canvas
    if (ev.target.id === canvas.id) {
      this.loadDragShape(transferredPos);
    }
  };

  handleDrag = (ev) => {
    const { graph } = this.props;
    const { dragShape, dragShapeID } = this.state;
    if (dragShape) {
      const transferredPos = graph.getPointByClient(ev.clientX, ev.clientY);
      graph.update(dragShapeID, {
        ...transferredPos,
      });
    }
  };

  loadDragShape({ x, y }) {
    const { graph } = this.props;
    const { dragShape, shadowShape, dragShapeID } = this.state;
    if (!dragShape) {
      const newDragShape = graph.add('node', {
        shape: 'rect',
        x,
        y,
        size: [shadowShape.offsetWidth, shadowShape.offsetHeight],
        style: {
          fill: '#F3F9FF',
          fillOpacity: 0.5,
          stroke: '#1890FF',
          strokeOpacity: 0.9,
          lineDash: [5, 5],
        },
        id: dragShapeID,
      });
      this.setState({
        dragShape: newDragShape,
      });
    }
  }

  unloadDragShape() {
    const { graph } = this.props;
    const { dragShape, shadowShape } = this.state;

    if (dragShape) {
      graph.remove(dragShape);
    }
    if (shadowShape) {
      document.body.removeChild(shadowShape);
    }
    this.setState({
      dragShape: null,
      shadowShape: null,
    });
    document.removeEventListener('dragenter', this.handleDragenter);
    document.removeEventListener('dragover', this.handleDragover);
  }

  handleDragend = (ev) => {
    const { graph, executeCommand, type, model, shape, size } = this.props;

    this.unloadDragShape();
    graph.remove(this.state.dragShapeID);

    const transferredPos = graph.getPointByClient(ev.clientX, ev.clientY);
    executeCommand('add', {
      type,
      model: {
        ...model,
        shape,
        ...transferredPos,
        size: size.split('*'),
      },
    });
  };

  render() {
    const { src, shape, children } = this.props;

    return (
      <div style={{ cursor: 'pointer' }} onMouseDown={this.handleMouseDown} ref={this.itemOnPanel}>
        {src ? <img src={src} alt={shape} draggable={false} /> : children}
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
