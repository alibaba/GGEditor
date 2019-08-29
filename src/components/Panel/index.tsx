import React from 'react';
import pick from 'lodash/pick';
import { getSelectedNodes, getSelectedEdges } from '@utils';
import { GraphState } from '@common/constants';
import { EditorPrivateContextProps, withEditorPrivateContext } from '@common/context/EditorPrivateContext';

interface PanelProps extends EditorPrivateContextProps {}

interface PanelState {}

class Panel extends React.Component<PanelProps, PanelState> {
  static create = function(type: GraphState) {
    class TypedPanel extends Panel {
      constructor(props: PanelProps) {
        super(props, type);
      }
    }

    return withEditorPrivateContext<PanelProps>(TypedPanel);
  };

  type: GraphState;

  constructor(props: PanelProps, type: GraphState) {
    super(props);

    this.type = type;
  }

  render() {
    const { graph, graphState, children } = this.props;

    if (!graph) {
      return null;
    }

    if (graphState !== this.type) {
      return null;
    }

    return (
      <div {...pick(this.props, ['style', 'className'])}>
        {React.Children.toArray(children).map(child =>
          React.cloneElement(child, {
            nodes: getSelectedNodes(graph),
            edges: getSelectedEdges(graph),
          }),
        )}
      </div>
    );
  }
}

export const NodePanel = Panel.create(GraphState.NodeSelected);
export const MultiPanel = Panel.create(GraphState.MultiSelected);
export const CanvasPanel = Panel.create(GraphState.CanvasSelected);
