import { ShapeClassName, ItemState } from '@/common/constants';
import { CustomShape, Node, NodeModel, Shape, Group } from '@/common/interface';
import G6 from '@antv/g6';
import { UtilCanvasContext } from './util';

/* 节点固定宽高 */
const keyShapeSize = {
  width: 114,
  height: 54,
};

/* 继承节点时的可用配置 */
export interface BizTreeNodeExtendableConfig {
  /* menuIcon展示 */
  showMenuIcon?: boolean;
  /* 节点背景颜色 */
  wrapperColor?: string;
  /* 判断新增节点的model字段 */
  freshFlag?: string;
}

const extendableConfig: BizTreeNodeExtendableConfig = {
  showMenuIcon: true,
};

const options: CustomShape<Node, NodeModel> & { [property: string]: any } & BizTreeNodeExtendableConfig = {
  ...extendableConfig,

  draw(model, group) {
    this.drawWrapper(model, group);
    const keyShape = group.addShape('rect', {
      className: ShapeClassName.KeyShape,
      attrs: {
        width: keyShapeSize.width,
        height: keyShapeSize.height,
        x: 0,
        y: 0,
        radius: 6,
        fill: '#fff',
      },
    });
    this.showMenuIcon && this.drawMenuIcon(model, group);

    if (typeof this.freshFlag === 'string') {
      model[this.freshFlag] && this.drawFreshIcon(model, group);
    }
    this.drawLabel(model, group);

    return keyShape;
  },

  afterDraw(model, group) {
    this.alignLabel(group.findByClassName(ShapeClassName.Label));
    this.alignMenuIcon(group.findByClassName(ShapeClassName.Appendix));
  },

  /* 绘制菜单按钮 */
  drawMenuIcon(model, group) {
    return group.addShape('image', {
      className: ShapeClassName.Appendix,
      attrs: {
        img:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTS0xLTFoNTgydjQwMkgtMXoiLz48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9Im5vbmUiPjxwYXRoIGZpbGw9IiNGNEY2RjgiIGQ9Ik0wIDBoMTRhNiA2IDAgMCAxIDYgNnY2SDZhNiA2IDAgMCAxLTYtNlYweiIvPjxnIGZpbGw9IiNBQUI1QzUiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE0LjUgOCkiPjxjaXJjbGUgcj0iMS41IiBjeT0iNyIgY3g9IjEyIi8+PGNpcmNsZSByPSIxLjUiIGN5PSIxMiIgY3g9IjEyIi8+PGNpcmNsZSByPSIxLjUiIGN5PSIxNyIgY3g9IjEyIi8+PC9nPjwvZz48L3N2Zz4=',
        x: 0,
        y: 0,
        width: 20,
        cursor: 'pointer',
      },
    });
  },

  /* 绘制新节点标志 */
  drawFreshIcon(model, group) {
    return group.addShape('image', {
      className: ShapeClassName.FreshIcon,
      attrs: {
        img:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMTQgMCkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTAgMGg4YTYgNiAwIDAxNiA2djhINmE2IDYgMCAwMS02LTZWMHoiIGZpbGw9IiNGNEY2RjgiLz48Y2lyY2xlIGZpbGw9IiM2NTgwRUIiIHRyYW5zZm9ybT0icm90YXRlKDkwIDYuNSA3LjUpIiBjeD0iNi41IiBjeT0iNy41IiByPSIyLjUiLz48L2c+PC9zdmc+',
        x: 0,
        y: 0,
      },
    });
  },

  /* 绘制文本 */
  drawLabel(model, group) {
    const label = group.addShape('text', {
      className: ShapeClassName.Label,
      attrs: {
        textAlign: 'left',
        textBaseline: 'top',
        text: model.label,
        fill: 'black',
        x: 0,
        y: 0,
      },
    });
    label.attr('text', this.resetLabelText(label, keyShapeSize.width - 20));
    return label;
  },

  /* 更新 */
  update(model, item) {
    const group = item.getContainer();
    const label = group.findByClassName(ShapeClassName.Label);
    label.remove();
    const newLabel = this.drawLabel(model, group);
    this.alignLabel(newLabel);
  },

  /* 根据尺寸重设节点文本 */
  resetLabelText(label: Shape, maxWidth: number, maxLine = 2): string {
    const initialText = label.attr('text');
    if (typeof initialText !== 'string' || initialText === '') return initialText;

    const { fontWeight, fontFamily, fontSize, fontStyle, fontVariant } = label.attr();
    const initialFont = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize}px ${fontFamily}`;
    UtilCanvasContext.font = initialFont;
    const ellipseWidth = UtilCanvasContext.measureText('...').width;

    const lines = [];
    let tempStr = '';

    for (let i = 0; i < initialText.length; i++) {
      const char = initialText[i];
      if (/\s/.test(char)) {
        continue;
      }
      tempStr += char;

      if (UtilCanvasContext.measureText(tempStr).width > maxWidth || i === initialText.length - 1) {
        lines.push(tempStr);
        // 超出的字符放在下一行
        tempStr = char;
      }
    }

    const lastLine = lines[maxLine - 1];
    // 没有最后一行文本或最后一行文本宽度不超，则直接返回
    if (!lastLine || UtilCanvasContext.measureText(lastLine).width < maxWidth) {
      return lines.join('\n').trim();
    }

    // 添加省略号
    let newLastLine = '';
    for (const char of lastLine) {
      if (UtilCanvasContext.measureText(newLastLine + char).width < maxWidth - ellipseWidth) {
        newLastLine += char;
      }
    }

    return lines
      .slice(0, maxLine - 1)
      .concat(`${newLastLine}...`)
      .join('\n');
  },

  /* 调整节点文本的位置 */
  alignLabel(label: Shape) {
    label.attr('x', (keyShapeSize.width - label.getBBox().width) / 2);
    label.attr('y', (keyShapeSize.height - label.getBBox().height) / 2);
  },

  /* 调整menuIcon位置 */
  alignMenuIcon(icon: Shape) {
    icon.attr('x', keyShapeSize.width - icon.getBBox().width);
  },

  /* 绘制包围层 */
  drawWrapper(model: NodeModel, group: Group): Shape {
    return group.addShape('rect', {
      className: ShapeClassName.Wrapper,
      attrs: this[`get${ShapeClassName.Wrapper}defaultStyle`](),
    });
  },

  /* 设置包围层状态样式 */
  setWrapperStateStyle(state: ItemState & 'default', wrapper: Shape) {
    return wrapper.attr(this[`get${ShapeClassName.Wrapper}${state}Style`]());
  },

  /* 设置状态 */
  setState(name, value, item) {
    const wrapper = item.getContainer().findByClassName(ShapeClassName.Wrapper);

    if (item.getStates().includes(ItemState.Selected)) {
      return this.setWrapperStateStyle(ItemState.Selected, wrapper);
    }
    this.setWrapperStateStyle('default', wrapper);
  },

  [`get${ShapeClassName.Wrapper}defaultStyle`]() {
    return {
      width: keyShapeSize.width,
      height: keyShapeSize.height,
      x: 0,
      y: -4,
      fill: this.wrapperColor || '#6580EB',
      radius: 8,
      shadowBlur: 25,
      shadowColor: '#ccc',
    };
  },

  [`get${ShapeClassName.Wrapper}selectedStyle`]() {
    return {
      width: keyShapeSize.width + 4,
      height: keyShapeSize.height + 6,
      x: -2,
      y: -4,
      fill: this.wrapperColor || '#6580EB',
      radius: 8,
      shadowBlur: 25,
      shadowColor: '#ccc',
    };
  },
};

G6.registerNode('bizTreeNode', options);
