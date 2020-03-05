import React from 'react';
import { getSelectedNodes, getSelectedEdges } from '@/utils';
import { GraphState, EditorEvent } from '@/common/constants';
import { EditorContextProps, withEditorContext } from '@/components/EditorContext';
import { Node, Edge, GraphStateEvent } from '@/common/interfaces';

type DetailPanelType = 'node' | 'edge' | 'multi' | 'canvas';

export interface DetailPanelComponentProps {
  type: DetailPanelType;
  nodes: Node[];
  edges: Edge[];
}

class DetailPanel {
  static create = function<P extends DetailPanelComponentProps>(type: DetailPanelType) {
    return function(WrappedComponent: React.ComponentType<P>) {
      type TypedPanelProps = EditorContextProps & Omit<P, keyof DetailPanelComponentProps>;
      type TypedPanelState = { graphState: GraphState };

      class TypedPanel extends React.Component<TypedPanelProps, TypedPanelState> {
        state = {
          graphState: GraphState.CanvasSelected,
        };

        componentDidMount() {
          const { graph } = this.props;

          graph.on(EditorEvent.onGraphStateChange, ({ graphState }: GraphStateEvent) => {
            this.setState({
              graphState,
            });
          });
        }

        render() {
          const { graph } = this.props;
          const { graphState } = this.state;

          if (graphState !== `${type}Selected`) {
            return null;
          }

          const nodes = getSelectedNodes(graph);
          const edges = getSelectedEdges(graph);

          return <WrappedComponent type={type} nodes={nodes} edges={edges} {...(this.props as any)} />;
        }
      }

      return withEditorContext<TypedPanelProps>(TypedPanel);
    };
  };
}

export default DetailPanel;
