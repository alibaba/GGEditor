import React from 'react';
import { GraphCommonEvent, GraphNodeEvent, GraphEdgeEvent, GraphCanvasEvent } from '@/common/constants';
import { EditorPrivateContextProps, withEditorPrivateContext } from '@/common/context/EditorPrivateContext';

export enum ContextMenuType {
  Canvas = 'canvas',
  Node = 'node',
  Edge = 'edge',
}

interface ContextMenuProps extends EditorPrivateContextProps {
  /** 菜单类型 */
  type?: ContextMenuType;
  /** 菜单内容 */
  renderContent?: (item: G6.Item, hide: () => void) => React.ReactNode;
}

interface ContextMenuState {
  top: number;
  left: number;
  visible: boolean;
  content: React.ReactNode;
}

class ContextMenu extends React.Component<ContextMenuProps, ContextMenuState> {
  static defaultProps = {
    type: ContextMenuType.Canvas,
    renderContent: () => null,
  };

  state = {
    top: 0,
    left: 0,
    visible: false,
    content: null,
  };

  componentDidUpdate(prevProps) {
    const { graph, type } = this.props;

    if (graph === prevProps.graph) {
      return;
    }

    switch (type) {
      case ContextMenuType.Canvas:
        graph.on(GraphCanvasEvent.onCanvasContextMenu, ({ x, y }) => {
          this.showContextMenu(x, y);
        });
        break;

      case ContextMenuType.Node:
        graph.on(GraphNodeEvent.onNodeContextMenu, ({ x, y, item }) => {
          this.showContextMenu(x, y, item);
        });
        break;

      case ContextMenuType.Edge:
        graph.on(GraphEdgeEvent.onEdgeContextMenu, ({ x, y, item }) => {
          this.showContextMenu(x, y, item);
        });
        break;

      default:
        break;
    }

    graph.on(GraphCommonEvent.onClick, () => {
      this.hideContextMenu();
    });
  }

  showContextMenu = (x: number, y: number, item?: G6.Item) => {
    const { graph, renderContent } = this.props;

    const { x: left, y: top } = graph.getCanvasByPoint(x, y);

    this.setState({
      top,
      left,
      visible: true,
      content: renderContent(item, this.hideContextMenu),
    });
  };

  hideContextMenu = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { top, left, visible, content } = this.state;

    if (!visible) {
      return null;
    }

    return <div style={{ position: 'absolute', top, left }}>{content}</div>;
  }
}

export default withEditorPrivateContext(ContextMenu);
