import React from 'react';
import G6 from '@antv/g6';
import { getSelectedNodes } from '@/utils';
import { LABEL_DEFAULT_MAX_WIDTH, ShapeClassName, LabelState } from '@/common/constants';
import { EditorPrivateContextProps, withEditorPrivateContext } from '@/common/context/EditorPrivateContext';

interface EditableLabelProps extends EditorPrivateContextProps {}

interface EditableLabelState {}

class EditableLabel extends React.PureComponent<EditableLabelProps, EditableLabelState> {
  labelElement: HTMLDivElement = null;

  componentDidUpdate() {
    const { labelState } = this.props;

    if (labelState === LabelState.Show) {
      // focus
      this.labelElement.focus();

      // select all
      document.execCommand('selectAll', false, null);
    }
  }

  handleBlur = () => {
    const { labelState } = this.props;

    if (labelState === LabelState.Show) {
      this.executeUpdate();
    }
  };

  handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const { key } = e;

    if (key === 'Enter' || key === 'Escape') {
      // 阻止事件冒泡
      e.stopPropagation();
      // 执行模型更新
      this.executeUpdate();
      // 隐藏编辑标签
      this.props.setLabelState(LabelState.Hide);
    }
  };

  executeUpdate = () => {
    const { executeCommand } = this.props;

    const model = this.getSelectedNode().getModel();

    const { label } = model;
    const { textContent } = this.labelElement;

    if (textContent === label) {
      return;
    }

    const { id } = model;

    executeCommand('update', {
      id,
      updateModel: {
        label: textContent,
      },
      forceRefreshLayout: true,
    });
  };

  getSelectedNode = () => {
    const { graph } = this.props;

    return getSelectedNodes(graph)[0];
  };

  getLabelOffset = ({ labelShape, selectedNode }) => {
    const { graph } = this.props;

    const { x: relativeX, y: relativeY } = labelShape.getBBox();
    const { x: absoluteX, y: absoluteY } = G6.Util.applyMatrix(
      {
        x: relativeX,
        y: relativeY,
      },
      selectedNode.getContainer().getMatrix(),
    );

    const { x: left, y: top } = graph.getCanvasByPoint(absoluteX, absoluteY);

    return {
      top,
      left,
    };
  };

  getLabelSize = ({ labelShape }) => {
    const { width, height } = labelShape.getBBox();

    const model = this.getSelectedNode().getModel();
    const maxWidth = (model.labelCfg && model.labelCfg.maxWidth) || LABEL_DEFAULT_MAX_WIDTH;

    return {
      width: 'auto',
      height: 'auto',
      'min-width': width,
      'max-width': maxWidth,
      'min-height': height,
    };
  };

  getLabelFont = ({ labelShape }) => {
    const font = labelShape.attr('font');

    return {
      font,
    };
  };

  getLabelZoom = () => {
    const { graph } = this.props;

    const zoom = graph.getZoom();

    return {
      transform: `scale(${zoom})`,
      'transform-origin': 'left top',
    };
  };

  render() {
    const { labelState } = this.props;

    let label = '';
    let labelStyle: React.CSSProperties = {
      position: 'absolute',
      background: 'white',
      border: '1px solid #1890FF',
      outline: 'none',
    };

    if (labelState === LabelState.Hide) {
      labelStyle = {
        ...labelStyle,
        display: 'none',
      };
    } else {
      const selectedNode = this.getSelectedNode();

      const labelShape = selectedNode.getContainer().findByClassName(ShapeClassName.Label);

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
        ref={el => {
          this.labelElement = el;
        }}
        style={labelStyle}
        contentEditable
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
      >
        {label}
      </div>
    );
  }
}

export default withEditorPrivateContext<EditableLabelProps>(EditableLabel);
