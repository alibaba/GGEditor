import React from 'react';
import { pick } from '@utils';
import {
  GRAPH_STATE_NODE_SELECTED,
  GRAPH_STATE_MULTI_SELECTED,
  GRAPH_STATE_CANVAS_SELECTED,
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
        {children}
      </div>
    );
  }
}

export const NodePanel = Panel.create(GRAPH_STATE_NODE_SELECTED);
export const MultiPanel = Panel.create(GRAPH_STATE_MULTI_SELECTED);
export const CanvasPanel = Panel.create(GRAPH_STATE_CANVAS_SELECTED);
