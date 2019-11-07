import { ShapeClassName, ItemState } from '@/common/constants';
import { CustomShape, Node, NodeModel, Shape, Group } from '@/common/interface';
import G6 from '@antv/g6';
import { UtilCanvasContext } from './util';

/* 节点固定宽高 */
const keyShapeSize = {
  width: 114,
  height: 54,
};

const options: CustomShape<Node, NodeModel> & { [property: string]: any } = {
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
    this.drawLabel(model, group);

    return keyShape;
  },

  afterDraw(model, group) {
    this.alignLabel(group.findByClassName(ShapeClassName.Label));
  },

  /* 绘制文本 */
  drawLabel(model, group) {
    return group.addShape('text', {
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
  },

  /* 更新 */
  update(model, item) {
    const group = item.getContainer();
    const label = group.findByClassName(ShapeClassName.Label);
    label.remove();
    this.drawLabel(model, group);
    this.alignLabel(label);
  },

  /* 根据尺寸重设节点文本 */
  resetLabel(label: Shape) {
    const text = label.attr('text');
    if (typeof text !== 'string' || text === '') return;

    const { fontWeight, fontFamily, fontSize, fontStyle, fontVariant } = label.attr();
    const font = `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize}px ${fontFamily}`;
    let resultString = '';

    // 省略号的宽度
    UtilCanvasContext.font = font;
    const ellipseWidth = UtilCanvasContext.measureText('...').width;

    // 节点内边距10
    const labelWidth = keyShapeSize.width - 20;

    // 折行处理
    for (const char of text) {
      if (/\s/.test(char)) {
        continue;
      }
      if (UtilCanvasContext.measureText(resultString).width < labelWidth) {
        resultString += char;
      } else {
        resultString += '\n';
      }
    }

    const splitResult = resultString.split('\n');

    if (splitResult.length === 1) {
      return splitResult[0];
    }

    const temp = '';
    for (const char of splitResult[1]) {
      if (/\s/.test(char)) {
        continue;
      }
      if (UtilCanvasContext.measureText(temp).width <= labelWidth - ellipseWidth) {
        resultString += char;
      }
    }

    return `${splitResult[0]}\n${temp}...`;
  },

  /* 调整节点文本的位置 */
  alignLabel(label: Shape) {
    label.attr('x', (keyShapeSize.width - label.getBBox().width) / 2);
    label.attr('y', (keyShapeSize.height - label.getBBox().height) / 2);
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
      fill: '#6580EB',
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
      fill: '#6580EB',
      radius: 8,
      shadowBlur: 25,
      shadowColor: '#ccc',
    };
  },
};

G6.registerNode('bizTreeNode', options);
