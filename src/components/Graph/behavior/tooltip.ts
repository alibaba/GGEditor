import { EditorEvent, ShapeClassName } from '@common/constants';
import { Behavior, GraphEvent, Item } from '@common/interface';
import behaviorManager from '@common/behaviorManager';

interface TooltipBehavior extends Behavior {
  /** 显示tooltip */
  showTooltip(e: GraphEvent): void;

  /** 隐藏tooltip */
  hideTooltip(): void;

  /** 处理鼠标进入 */
  handleItemMouseenter(e: GraphEvent): void;

  /** 处理鼠标移出 */
  handleItemMouseleave(e: GraphEvent): void;
}

const tooltipBehavior = {
  getEvents() {
    return {
      'node:mouseenter': 'handleItemMouseenter',
      'node:mouseleave': 'handleItemMouseleave',
    };
  },

  showTooltip(e) {
    const { graph } = this;
    const itemModel = e.item.getModel();

    if (e.target.get('className') === ShapeClassName.Tooltip && itemModel) {
      graph.emit(EditorEvent.onTooltipStateChange, {
        tooltipState: {
          visible: true,
          clientX: e.canvasX,
          clientY: e.canvasY,
          text: itemModel.tooltip && itemModel.tooltip.tip,
        },
      });
    }
  },

  hideTooltip() {
    const { graph } = this;

    graph.emit(EditorEvent.onTooltipStateChange, {
      tooltipState: {
        visible: false,
        clientX: 0,
        clientY: 0,
      },
    });
  },

  handleItemMouseenter(e) {
    this.showTooltip(e);
  },

  handleItemMouseleave(e) {
    this.hideTooltip();
  },
} as TooltipBehavior;

behaviorManager.register('tooltip', tooltipBehavior);
