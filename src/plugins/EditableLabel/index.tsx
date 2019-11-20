import React from 'react';
import G6 from '@antv/g6';
import { isMind, getSelectedNodes } from '@/utils';
import { EditorEvent, GraphNodeEvent, LabelState, PlugSignal } from '@/common/constants';
import { LabelStateEvent } from '@/common/interfaces';
import { EditorContextProps, withEditorContext } from '@/components/EditorContext';

interface EditableLabelProps extends EditorContextProps {
  /** 标签图形类名 */
  labelClassName?: string;
  /** 标签最大宽度 */
  labelMaxWidth?: number;
}

interface EditableLabelState {
  visible: boolean;
}

class EditableLabel extends React.Component<EditableLabelProps, EditableLabelState> {
  el: HTMLDivElement = null;

  static defaultProps = {
    labelClassName: 'node-label',
    labelMaxWidth: 100,
  };

  state = {
    visible: false,
  };

  componentDidMount() {
    const { graph } = this.props;

    graph.on<LabelStateEvent>(EditorEvent.onLabelStateChange, ({ labelState }) => {
      if (labelState === LabelState.Show) {
        this.showEditableLabel();
      } else {
        this.hideEditableLabel();
      }
    });

    graph.on(GraphNodeEvent.onNodeDoubleClick, () => {
      this.showEditableLabel();
    });
  }

  update = () => {
    const { graph, executeCommand } = this.props;

    const node = getSelectedNodes(graph)[0];
    const model = node.getModel();

    const { textContent: label } = this.el;

    if (label === model.label) {
      return;
    }

    executeCommand('update', {
      id: model.id,
      updateModel: {
        label,
      },
      forceRefreshLayout: isMind(graph),
    });
  };

  showEditableLabel = () => {
    const { graph } = this.props;

    graph.set(PlugSignal.ShowEditableLabel, true);

    this.setState(
      {
        visible: true,
      },
      () => {
        this.el.focus();
        document.execCommand('selectAll', false, null);
      },
    );
  };

  hideEditableLabel = () => {
    const { graph } = this.props;

    graph.set(PlugSignal.ShowEditableLabel, false);

    this.setState({
      visible: false,
    });
  };

  handleBlur = () => {
    this.update();
    this.hideEditableLabel();
  };

  handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.stopPropagation();

    const { key } = e;

    if (['Tab'].includes(key)) {
      e.preventDefault();
    }

    if (['Enter', 'Escape', 'Tab'].includes(key)) {
      this.update();
      this.hideEditableLabel();
    }
  };

  render() {
    const { visible } = this.state;

    if (!visible) {
      return null;
    }

    const { graph, labelClassName, labelMaxWidth } = this.props;

    const zoom = graph.getZoom();
    const node = getSelectedNodes(graph)[0];

    const model = node.getModel();
    const group = node.getContainer();

    const label = model.label;
    const labelShape = group.findByClassName(labelClassName);

    // Get the label offset
    const { x: relativeX, y: relativeY } = labelShape.getBBox();
    const { x: absoluteX, y: absoluteY } = G6.Util.applyMatrix(
      {
        x: relativeX,
        y: relativeY,
      },
      node.getContainer().getMatrix(),
    );

    const { x: left, y: top } = graph.getCanvasByPoint(absoluteX, absoluteY);

    // Get the label size
    const { width, height } = labelShape.getBBox();

    // Get the label font
    const font = labelShape.attr('font');

    const style: React.CSSProperties = {
      position: 'absolute',
      top,
      left,
      width: 'auto',
      height: 'auto',
      minWidth: width,
      minHeight: height,
      maxWidth: labelMaxWidth,
      font,
      background: 'white',
      border: '1px solid #1890ff',
      outline: 'none',
      transform: `scale(${zoom})`,
      transformOrigin: 'left top',
    };

    return (
      <div
        ref={el => {
          this.el = el;
        }}
        style={style}
        contentEditable
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
      >
        {label}
      </div>
    );
  }
}

export default withEditorContext<EditableLabelProps>(EditableLabel);
