import React from 'react';
import pick from 'lodash/pick';
import { getSelectedNodes, getSelectedEdges } from '@/utils';
import { GraphState } from '@/common/constants';
import { EditorPrivateContextProps, withEditorPrivateContext } from '@/common/context/EditorPrivateContext';

interface DetailPanelProps extends EditorPrivateContextProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface DetailPanelState {}

class DetailPanel extends React.Component<DetailPanelProps, DetailPanelState> {
  static create = function(type: GraphState) {
    class TypedPanel extends DetailPanel {
      constructor(props: DetailPanelProps) {
        super(props, type);
      }
    }

    return withEditorPrivateContext<DetailPanelProps>(TypedPanel);
  };

  type: GraphState;

  constructor(props: DetailPanelProps, type: GraphState) {
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
        {React.Children.toArray(children).map(child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              nodes: getSelectedNodes(graph),
              edges: getSelectedEdges(graph),
            });
          }
        })}
      </div>
    );
  }
}

export const NodePanel = DetailPanel.create(GraphState.NodeSelected);
export const EdgePanel = DetailPanel.create(GraphState.EdgeSelected);
export const MultiPanel = DetailPanel.create(GraphState.MultiSelected);
export const CanvasPanel = DetailPanel.create(GraphState.CanvasSelected);
