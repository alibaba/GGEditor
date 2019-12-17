import React from 'react';
import ReactDOM from 'react-dom';
import { clearSelectedState } from '@/utils';
import global from '@/common/global';
import { ItemState, GraphCommonEvent, GraphNodeEvent, GraphEdgeEvent, GraphCanvasEvent } from '@/common/constants';
import { EditorContextProps, withEditorContext } from '@/components/EditorContext';

export enum ContextMenuType {
  Canvas = 'canvas',
  Node = 'node',
  Edge = 'edge',
}

interface ContextMenuProps extends EditorContextProps {
  /** 菜单类型 */
  type?: ContextMenuType;
  /** 菜单内容 */
  renderContent: (item: G6.Item, position: { x: number; y: number }, hide: () => void) => React.ReactNode;
}

interface ContextMenuState {
  visible: boolean;
  content: React.ReactNode;
}

class ContextMenu extends React.Component<ContextMenuProps, ContextMenuState> {
  static defaultProps = {
    type: ContextMenuType.Canvas,
  };

  state = {
    visible: false,
    content: null,
  };

  componentDidMount() {
    const { graph, type } = this.props;

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

    clearSelectedState(graph);

    if (item) {
      graph.setItemState(item, ItemState.Selected, true);
    }

    global.plugin.contextMenu.state = 'show';
    global.clipboard.point = {
      x,
      y,
    };

    const position = graph.getCanvasByPoint(x, y);

    this.setState({
      visible: true,
      content: renderContent(item, position, this.hideContextMenu),
    });
  };

  hideContextMenu = () => {
    global.plugin.contextMenu.state = 'hide';

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

export default withEditorContext<ContextMenuProps>(ContextMenu);
