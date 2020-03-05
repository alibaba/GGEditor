import React from 'react';
import ReactDOM from 'react-dom';
import delay from 'lodash/delay';
import global from '@/common/global';
import { GraphNodeEvent } from '@/common/constants';
import { Item } from '@/common/interfaces';
import { EditorContextProps, withEditorContext } from '@/components/EditorContext';

export enum ItemPopoverType {
  Node = 'node',
  Edge = 'edge',
}

interface ItemPopoverProps extends EditorContextProps {
  /** 浮层类型 */
  type?: ItemPopoverType;
  /** 浮层内容 */
  renderContent: (
    item: Item,
    position: { minX: number; minY: number; maxX: number; maxY: number; centerX: number; centerY: number },
  ) => React.ReactNode;
}

interface ItemPopoverState {
  visible: boolean;
  content: React.ReactNode;
}

class ItemPopover extends React.Component<ItemPopoverProps, ItemPopoverState> {
  static defaultProps = {
    type: ItemPopoverType.Node,
  };

  state = {
    visible: false,
    content: null,
  };

  mouseEnterTimeoutID = 0;
  mouseLeaveTimeoutID = 0;

  componentDidMount() {
    const { graph, type } = this.props;

    if (type === ItemPopoverType.Node) {
      graph.on(GraphNodeEvent.onNodeMouseEnter, ({ item }) => {
        clearTimeout(this.mouseLeaveTimeoutID);

        this.mouseEnterTimeoutID = delay(this.showItemPopover, 250, item);
      });

      graph.on(GraphNodeEvent.onNodeMouseLeave, () => {
        clearTimeout(this.mouseEnterTimeoutID);

        this.mouseLeaveTimeoutID = delay(this.hideItemPopover, 250);
      });
    }
  }

  showItemPopover = (item: Item) => {
    const { graph, renderContent } = this.props;

    global.plugin.itemPopover.state = 'show';

    const { minX, minY, maxX, maxY, centerX, centerY } = item.getBBox();

    const { x: itemMinX, y: itemMinY } = graph.getCanvasByPoint(minX, minY);
    const { x: itemMaxX, y: itemMaxY } = graph.getCanvasByPoint(maxX, maxY);
    const { x: itemCenterX, y: itemCenterY } = graph.getCanvasByPoint(centerX, centerY);

    const position = {
      minX: itemMinX,
      minY: itemMinY,
      maxX: itemMaxX,
      maxY: itemMaxY,
      centerX: itemCenterX,
      centerY: itemCenterY,
    };

    this.setState({
      visible: true,
      content: renderContent(item, position),
    });
  };

  hideItemPopover = () => {
    global.plugin.itemPopover.state = 'hide';

    this.setState({
      visible: false,
      content: null,
    });
  };

  render() {
    const { graph } = this.props;
    const { visible, content } = this.state;

    if (!visible) {
      return null;
    }

    return ReactDOM.createPortal(content, graph.get('container'));
  }
}

export default withEditorContext<ItemPopoverProps>(ItemPopover);
