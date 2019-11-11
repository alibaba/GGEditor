import { ShapeClassName, ItemState } from '@/common/constants';
import { CustomShape, NodeModel } from '@/common/interfaces';
import G6 from '@antv/g6';
import { G } from '@antv/g6/types/g';
import { UtilCanvasContext } from './util';

/* 节点固定宽高 */
const keyShapeSize = {
  width: 114,
  height: 54,
};

/* 默认颜色 */
const defaultColor = '#6580EB';

/* 继承节点时的可用配置 */
export interface BizTreeNodeExtendableConfig {
  /* menuIcon展示 */
  showMenuIcon?: boolean;
  /* 节点颜色主题 */
  themeColor?: string;
}

const options: CustomShape<G6.Node, NodeModel> & { [property: string]: any } & BizTreeNodeExtendableConfig = {
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

    this.drawStatusIcon(model, group);
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

  /* 绘制状态标志 */
  drawStatusIcon(model, group) {
    if (model.statusIconColor) {
      group.addShape('rect', {
        className: ShapeClassName.StatusIcon,
        attrs: {
          width: 14,
          height: 14,
          fill: '#F4F6F8',
          x: 0,
          y: 0,
          radius: [6, 0, 6, 0],
        },
      });

      group.addShape('circle', {
        className: ShapeClassName.StatusIcon,
        attrs: {
          r: 2.5,
          x: 7,
          y: 7,
          fill: typeof model.statusIconColor === 'string' ? model.statusIconColor : defaultColor,
        },
      });
    }
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
    const statusIcon = group.findByClassName(ShapeClassName.StatusIcon);
    label && label.remove(true);
    statusIcon && statusIcon.remove(true);

    this.drawStatusIcon(model, group);
    const newLabel = this.drawLabel(model, group);
    this.alignLabel(newLabel);
  },

  /* 根据尺寸重设节点文本 */
  resetLabelText(label: G.Shape, maxWidth: number, maxLine = 2): string {
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
  alignLabel(label: G.Shape) {
    if (!label) return;
    label.attr('x', (keyShapeSize.width - label.getBBox().width) / 2);
    label.attr('y', (keyShapeSize.height - label.getBBox().height) / 2);
  },

  /* 调整menuIcon位置 */
  alignMenuIcon(icon: G.Shape) {
    icon && icon.attr('x', keyShapeSize.width - icon.getBBox().width);
  },

  /* 绘制包围层 */
  drawWrapper(model: NodeModel, group: G.Group): G.Shape {
    return group.addShape('rect', {
      className: ShapeClassName.Wrapper,
      attrs: this[`get${ShapeClassName.Wrapper}defaultStyle`](),
    });
  },

  /* 设置包围层状态样式 */
  setWrapperStateStyle(state: ItemState & 'default', wrapper: G.Shape) {
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

  /* 锚点 */
  getAnchorPoints(model) {
    if (Array.isArray(model.anchorPoints)) {
      return model.anchorPoints;
    }
    return [[0, 0.5], [1, 0.5], [0.5, 0], [0.5, 1]];
  },

  [`get${ShapeClassName.Wrapper}defaultStyle`]() {
    return {
      width: keyShapeSize.width,
      height: keyShapeSize.height,
      x: 0,
      y: -4,
      fill: this.themeColor || defaultColor,
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
      fill: this.themeColor || defaultColor,
      radius: 8,
      shadowBlur: 25,
      shadowColor: '#ccc',
    };
  },

  [`get${ShapeClassName.Anchor}defaultStyle`]() {
    return {
      stroke: this.themeColor || defaultColor,
      lineWidth: 2,
      fill: '#fff',
      r: 4,
    };
  },
};

G6.registerNode('bizNode', options);
