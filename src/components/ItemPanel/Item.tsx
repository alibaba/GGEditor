import React from 'react';
import pick from 'lodash/pick';
import global from '@/common/global';
import { ItemType, GraphMode } from '@/common/constants';
import { NodeModel } from '@/common/interfaces';
import { EditorContextProps, withEditorContext } from '@/components/EditorContext';

export interface ItemProps extends EditorContextProps {
  style?: React.CSSProperties;
  className?: string;
  type?: ItemType;
  model: Partial<NodeModel>;
}

export interface ItemState {}

class Item extends React.Component<ItemProps, ItemState> {
  static defaultProps = {
    type: ItemType.Node,
  };

  handleMouseDown = () => {
    const { graph, type, model } = this.props;

    if (type === ItemType.Node) {
      global.component.itemPanel.model = model;
      graph.setMode(GraphMode.AddNode);
    }
  };

  render() {
    const { children } = this.props;

    return (
      <div {...pick(this.props, ['style', 'className'])} onMouseDown={this.handleMouseDown}>
        {children}
      </div>
    );
  }
}

export default withEditorContext<ItemProps>(Item);
