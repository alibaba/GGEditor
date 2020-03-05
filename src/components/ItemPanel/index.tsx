import React from 'react';
import pick from 'lodash/pick';
import global from '@/common/global';
import { GraphMode } from '@/common/constants';
import { GShape, GGroup } from '@/common/interfaces';
import { EditorContextProps, withEditorContext } from '@/components/EditorContext';
import Item from './Item';

interface ItemPanelProps extends EditorContextProps {
  style?: React.CSSProperties;
  className?: string;
}

interface ItemPanelState {}

class ItemPanel extends React.Component<ItemPanelProps, ItemPanelState> {
  static Item = Item;

  componentDidMount() {
    document.addEventListener('mouseup', this.handleMouseUp, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.handleMouseUp, false);
  }

  handleMouseUp = () => {
    const { graph } = this.props;

    if (graph.getCurrentMode() === GraphMode.Default) {
      return;
    }

    const group: GGroup = graph.get('group');
    const shape: GShape = group.findByClassName(global.component.itemPanel.delegateShapeClassName) as GShape;

    if (shape) {
      shape.remove(true);
      graph.paint();
    }

    global.component.itemPanel.model = null;
    graph.setMode(GraphMode.Default);
  };

  render() {
    const { children } = this.props;

    return <div {...pick(this.props, ['style', 'className'])}>{children}</div>;
  }
}

export { Item };

export default withEditorContext<ItemPanelProps>(ItemPanel);
