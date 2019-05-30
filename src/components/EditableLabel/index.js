import React from 'react';
import {
  NODE_MAX_TEXT_LINE_WIDTH,
  SHAPE_CLASSNAME_LABEL,
  ITEM_TYPE_NODE,
  ITEM_STATE_SELECTED,
  LABEL_STATE_HIDE,
  LABEL_STATE_SHOW,
} from '@common/constants';
import withEditorContext from '@common/EditorContext/withEditorContext';

class EditableLabel extends React.PureComponent {
  componentDidUpdate() {
    const { labelState } = this.props;

    if (labelState === LABEL_STATE_SHOW) {
      // focus
      this.labelElement.focus();

      // select all
      document.execCommand('selectAll', false, null);
    }
  }

  handleLabelBlur = () => {
    this.updateLabel();
  }

  updateLabel = () => {
    const { executeCommand } = this.props;

    const { id } = this.getSelectedNode().getModel();

    executeCommand('update', {
      id,
      updateModel: {
        label: this.labelElement.innerText,
      },
    });
  }

  getSelectedNode = () => {
    const { graph } = this.props;

    return graph.findAllByState(ITEM_TYPE_NODE, ITEM_STATE_SELECTED)[0];
  }

  getLabelOffset = ({ labelShape, selectedNode }) => {
    const { graph } = this.props;

    const { x: rectX, y: rectY } = selectedNode.getBBox();
    const { x: textX, y: textY } = labelShape.getBBox();

    const { x: left, y: top } = graph.getCanvasByPoint(rectX + textX, rectY + textY);

    return {
      top,
      left,
    };
  }

  getLabelSize = ({ labelShape }) => {
    const { width, height } = labelShape.getBBox();

    return {
      width: 'auto',
      height: 'auto',
      'min-width': width,
      'max-width': `${NODE_MAX_TEXT_LINE_WIDTH}px`,
      'min-height': height,
    };
  }

  getLabelFont = ({ labelShape }) => {
    const font = labelShape.attr('font');

    return {
      font,
    };
  }

  getLabelZoom = () => {
    const { graph } = this.props;

    const zoom = graph.getZoom();

    return {
      transform: `scale(${zoom})`,
      'transform-origin': 'left top',
    };
  }

  render() {
    const { labelState } = this.props;

    let label = '';
    let labelStyle = {
      position: 'absolute',
      background: 'white',
      border: '1px solid #1890FF',
      outline: 'none',
    };

    if (labelState === LABEL_STATE_HIDE) {
      labelStyle = {
        ...labelStyle,
        display: 'none',
      };
    } else {
      const selectedNode = this.getSelectedNode();

      const labelShape = selectedNode.get('group').findByClassName(SHAPE_CLASSNAME_LABEL);

      label = selectedNode.getModel().label;
      labelStyle = {
        ...labelStyle,
        ...this.getLabelOffset({
          labelShape,
          selectedNode,
        }),
        ...this.getLabelSize({
          labelShape,
        }),
        ...this.getLabelFont({
          labelShape,
        }),
        ...this.getLabelZoom(),
      };
    }

    return (
      <div
        ref={(el) => {
          this.labelElement = el;
        }}
        style={labelStyle}
        contentEditable="true"
        onBlur={this.handleLabelBlur}
      >
        {label}
      </div>
    );
  }
}

export default withEditorContext(EditableLabel, ({
  graph,
  labelState,
  executeCommand,
}) => ({
  graph,
  labelState,
  executeCommand,
}));
