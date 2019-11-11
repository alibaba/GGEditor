import React from 'react';
import { Popover } from 'antd';
import delay from 'lodash/delay';
import { ItemType, GraphNodeEvent } from '@/common/constants';
import { EditorPrivateContextProps, withEditorPrivateContext } from '@/common/context/EditorPrivateContext';

interface ItemPopoverProps extends EditorPrivateContextProps {
  /** 浮层类型 */
  type?: ItemType;
  /** 浮层标题 */
  renderTitle?: (item: G6.Item) => React.ReactNode;
  /** 浮层内容 */
  renderContent?: (item: G6.Item) => React.ReactNode;
}

interface ItemPopoverState {
  top: number;
  left: number;
  visible: boolean;
  title: React.ReactNode;
  content: React.ReactNode;
}

class ItemPopover extends React.Component<ItemPopoverProps, ItemPopoverState> {
  static defaultProps = {
    type: ItemType.Node,
    renderTitle: () => null,
    renderContent: () => null,
  };

  state = {
    top: 0,
    left: 0,
    visible: true,
    title: null,
    content: null,
  };

  mouseEnterTimeoutID = 0;
  mouseLeaveTimeoutID = 0;

  componentDidUpdate(prevProps) {
    const { graph, type } = this.props;

    if (graph === prevProps.graph) {
      return;
    }

    if (type === ItemType.Node) {
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

  showItemPopover = (item: G6.Item) => {
    const { graph, renderTitle, renderContent } = this.props;

    const { centerX: x, minY: y } = item.getBBox();
    const { x: left, y: top } = graph.getCanvasByPoint(x, y);

    this.setState({
      top,
      left,
      visible: true,
      title: renderTitle(item),
      content: renderContent(item),
    });
  };

  hideItemPopover = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { top, left, visible, title, content } = this.state;

    return (
      <Popover visible={visible} title={title} content={content}>
        <div style={{ position: 'absolute', top, left }} />
      </Popover>
    );
  }
}

export default withEditorPrivateContext(ItemPopover);
