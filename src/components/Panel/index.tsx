import React from 'react';
import { pick } from '@utils';
import {
  ITEM_TYPE_NODE,
  ITEM_STATE_SELECTED,
  GraphState,
} from '@common/constants';
import withEditorContext from '@common/EditorContext/withEditorContext';

class Panel extends React.PureComponent {
  static create = function (type) {
    class TypedPanel extends Panel {
      constructor(props) {
        super(props, type);
      }
    }

    return withEditorContext(TypedPanel, ({ graph, graphState }) => ({
      graph,
      graphState,
    }));
  }

  constructor(props, type) {
    super(props);

    this.type = type;
  }

  getSelectedNodes = () => {
    const { graph } = this.props;

    return graph.findAllByState(ITEM_TYPE_NODE, ITEM_STATE_SELECTED);
  }

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
        {
          React.Children.toArray(children).map(child => React.cloneElement(child, {
            nodes: this.getSelectedNodes(),
          }))
        }
      </div>
    );
  }
}

export const NodePanel = Panel.create(GraphState.NodeSelected);
export const MultiPanel = Panel.create(GraphState.MultiSelected);
export const CanvasPanel = Panel.create(GraphState.CanvasSelected);
