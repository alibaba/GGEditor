import G6 from '@antv/g6';
import { EditorEvent } from '@/common/constants';
import { NodeModel, Behavior, GraphEvent } from '@/common/interfaces';
import behaviorManager from '@/common/behaviorManager';

interface NodePopoverBehavior extends Behavior {
  /** 获取nodePopover展示文本 */
  getPopoverText(model: NodeModel): string | undefined;
  /** 获取nodePopover的位置 */
  getPopoverPosition(item: G6.Item): { x: number; y: number };
  /** 显示nodePopover */
  showPopover(e: GraphEvent): void;
  /** 隐藏nodePopover */
  hidePopover(): void;
  /** 处理鼠标进入 */
  handleItemMouseenter(e: GraphEvent): void;
  /** 处理鼠标移出 */
  handleItemMouseleave(e: GraphEvent): void;
  /** 格式化文本  */
  formatText?(model: NodeModel): string;
}

const nodePopoverBehavior: NodePopoverBehavior = {
  getPopoverText(model) {
    let text = model.label;
    const { formatText } = this;

    // 用户初始化画布时配置的，与G6保持一致
    if (typeof formatText === 'function') {
      text = formatText(model);
    }

    return text;
  },

  getEvents() {
    return {
      'node:mouseenter': 'handleItemMouseenter',
      'node:mouseleave': 'handleItemMouseleave',
    };
  },

  getPopoverPosition(item: G6.Item) {
    const { graph } = this;

    const { x: relativeX, y: relativeY } = item.getKeyShape().getBBox();
    const { x: absoluteX, y: absoluteY } = G6.Util.applyMatrix(
      {
        x: relativeX,
        y: relativeY,
      },
      item.getContainer().getMatrix(),
    );

    return graph.getCanvasByPoint(absoluteX, absoluteY);
  },

  showPopover(e) {
    const { graph } = this;
    const model = e.item.getModel<NodeModel>();

    const text = this.getPopoverText(model);

    if (!text) return;

    const position = this.getPopoverPosition(e.item);

    graph.emit(EditorEvent.onNodePopoverStateChange, {
      nodePopoverState: {
        visible: true,
        x: position.x,
        y: position.y,
        text,
      },
    });
  },

  hidePopover() {
    const { graph } = this;

    graph.emit(EditorEvent.onNodePopoverStateChange, {
      nodePopoverState: {
        visible: false,
        x: 0,
        y: 0,
      },
    });
  },

  handleItemMouseenter(e) {
    this.showPopover(e);
  },

  handleItemMouseleave() {
    this.hidePopover();
  },
};

behaviorManager.register('node-popover', nodePopoverBehavior);
