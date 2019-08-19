import React from 'react';
import pick from 'lodash/pick';
import { ITEM_TYPE_NODE, ItemState, GraphState } from '@common/constants';
import { EditorPrivateContextProps, withEditorPrivateContext } from '@common/context/EditorPrivateContext';

interface PanelProps extends EditorPrivateContextProps {}

interface PanelState {}

class Panel extends React.PureComponent<PanelProps, PanelState> {
  static create = function(type) {
    class TypedPanel extends Panel {
      constructor(props) {
        super(props, type);
      }
    }

    return withEditorPrivateContext<PanelProps>(TypedPanel);
  };

  constructor(props, type) {
    super(props);

    this.type = type;
  }

  getSelectedNodes = () => {
    const { graph } = this.props;

    return graph.findAllByState(ITEM_TYPE_NODE, ItemState.Selected);
  };

  render() {
    const { graph, graphState, children } = this.props;

    if (!graph) {
      return null;
    }

    if (!graphState.startsWith(this.type)) {
      return null;
    }

    return (
      <div {...pick(this.props, ['style', 'className'])}>
        {React.Children.toArray(children).map(child =>
          React.cloneElement(child, {
            nodes: this.getSelectedNodes(),
          }),
        )}
      </div>
    );
  }
}

export const NodePanel = Panel.create(GraphState.NodeSelected);
export const MultiPanel = Panel.create(GraphState.MultiSelected);
export const CanvasPanel = Panel.create(GraphState.CanvasSelected);
