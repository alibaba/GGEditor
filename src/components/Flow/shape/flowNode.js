import G6 from '@antv/g6';
import { drawAnchor, handleAnchor } from './anchor';
import { drawActivedNode } from './activedNode';
import {
  SHAPE_CLASSNAME_KEYSHAPE
} from '@common/constants';

import globalStyle from '../common/globalStyle';
const { nodeStyle, nodeLabelStyle } = globalStyle;

G6.registerNode('flowNode', {
  drawAnchor,
  handleAnchor,
  drawActivedNode,
  draw(model, group) {
    this.keyShape = this.drawShape(model, group);
    // 有 label 字段就绘制 label
    if (model.label) {
      this.labelShape = this.drawLabel(model, group);
    }
    // 调整图形
    this.adjustKeyShape();
    // 调整 label
    this.adjustLabelShape();
    // 绘制锚点
    return this.keyShape;
  },
  afterDraw() {
    // 调整图形
    this.adjustKeyShape();
    // 调整 label
    this.adjustLabelShape();
  },
  drawShape(model, group) {
    const { x, y } = { x: 0, y: 0 };
    const { radius } = nodeStyle;
    const [width, height] = [40, 40];
    const shapeStyle = {
      width,
      height,
      ...nodeStyle
    };
    // 绘制节点矩形框
    const keyShape = group.addShape('rect', {
      className: SHAPE_CLASSNAME_KEYSHAPE,
      attrs: { x, y, ...shapeStyle }
    });

    // 边框边上的线条
    group.addShape('path', {
      attrs: {
        path: [
          ['M', x, y + radius],
          ['L', x, y + height - radius],
          ['A', radius, radius, 0, 0, 0, x + radius, y + height],
          ['L', x + radius, y],
          ['A', radius, radius, 0, 0, 0, x, y + radius]
        ],
        fill: '#13c2c2'
      }
    });

    // 类型 logo
    group.addShape('image', {
      attrs: {
        img:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHJ4PSI0Ii8+PGZpbHRlciB4PSItMzUlIiB5PSItMjUlIiB3aWR0aD0iMTcwJSIgaGVpZ2h0PSIxNzAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj48ZmVPZmZzZXQgZHk9IjIiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC4wNzQ1MDk4MDM5IDAgMCAwIDAgMC43NjA3ODQzMTQgMCAwIDAgMCAwLjc2MDc4NDMxNCAwIDAgMCAwLjUgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiMxM0MyQzIiIHhsaW5rOmhyZWY9IiNiIi8+PC9nPjxwYXRoIGQ9Ik0xOC40NjYgMTQuMjEyYS4zNzYuMzc2IDAgMCAwIC4wMDgtLjA3OXYtMi4yNTFhLjk2Ljk2IDAgMCAwLS45NTMtLjk2M2gtMy4yMTNWOS43ODZhMS45MSAxLjkxIDAgMCAwIDEuNTI2LTEuODc1QTEuOTA0IDEuOTA0IDAgMCAwIDEzLjk0IDZhMS45MDQgMS45MDQgMCAwIDAtMS44OTIgMS45MTEgMS45MSAxLjkxIDAgMCAwIDEuNTI2IDEuODc1djEuMTMzaC0zLjIxM2EuOTYuOTYgMCAwIDAtLjk1NC45NjN2Mi4yNEExLjkxMSAxLjkxMSAwIDAgMCA4IDE1Ljk3YzAgMS4wNTQuODQ5IDEuOTEyIDEuODkyIDEuOTEyYTEuOTA0IDEuOTA0IDAgMCAwIDEuODkzLTEuOTEyYzAtLjk2OC0uNzE3LTEuNzctMS42NDMtMS44OTR2LTIuMTk0YzAtLjEyMy4wOTktLjIyMy4yMi0uMjIzaDcuMTU5Yy4xMjEgMCAuMjIuMS4yMi4yMjN2Mi4yNTFjMCAuMDI3LjAwMy4wNTQuMDA4LjA4YTEuOTEgMS45MSAwIDAgMC0xLjUzNCAxLjg3NmMwIDEuMDU0Ljg1IDEuOTExIDEuODkzIDEuOTExQTEuOTA0IDEuOTA0IDAgMCAwIDIwIDE2LjA4OWExLjkxIDEuOTEgMCAwIDAtMS41MzQtMS44Nzd6bS01LjY4NC02LjNjMC0uNjQ2LjUyLTEuMTcxIDEuMTYtMS4xNzEuNjM4IDAgMS4xNTguNTI1IDEuMTU4IDEuMTcgMCAuNjQ1LS41MiAxLjE3LTEuMTU5IDEuMTdhMS4xNjYgMS4xNjYgMCAwIDEtMS4xNTktMS4xN3ptLTEuNzMgOC4wNThjMCAuNjQ2LS41MiAxLjE3LTEuMTYgMS4xN2ExLjE2NiAxLjE2NiAwIDAgMS0xLjE1OC0xLjE3YzAtLjY0NS41Mi0xLjE3IDEuMTU4LTEuMTcuNjQgMCAxLjE2LjUyNSAxLjE2IDEuMTd6bTcuMDU2IDEuMjlhMS4xNjYgMS4xNjYgMCAwIDEtMS4xNi0xLjE3MWMwLS42NDUuNTItMS4xNyAxLjE2LTEuMTcuNjM5IDAgMS4xNTguNTI1IDEuMTU4IDEuMTcgMCAuNjQ1LS41MiAxLjE3LTEuMTU4IDEuMTd6IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==',
        x: x + 6,
        y: y + 11,
        width: 20,
        height: 20
      }
    });

    return keyShape;
  },
  drawLabel(model, group) {
    const { x, y } = { x: 0, y: 0 };
    const lableStype = {
      ...nodeLabelStyle
    };
    return group.addShape('text', {
      className: 'label',
      attrs: { x, y, text: model.label, ...lableStype }
    });
  },
  setState(name, value, item) {
    // 根据状态绘制节点选中的样式
    this.drawActivedNode(name, value, item);
    // 根据状态绘制锚点
    this.handleAnchor(name, value, item, 'flow');
  },
  adjustKeyShape() {
    const { keyShape } = this;
    const padding = [5, 5];
    const imgWidth = 25;
    const originWidth = keyShape.attr('width');
    const originHeight = keyShape.attr('height');
    const [textWidth, textHeight] = [
      this.getLabelSize({ keyShape }).width,
      this.getLabelSize({ keyShape }).height
    ];
    // 根据文本的宽高调整矩形的宽高
    if (originHeight < textHeight) keyShape.attr('height', textHeight + 2 * padding[0]);
    if (originWidth < textWidth) keyShape.attr('width', textWidth + 2 * padding[1] + imgWidth);
  },
  adjustLabelShape() {
    const labelShape = this.labelShape;
    const keyShape = this.keyShape;
    const imgWidth = 10;
    // 调整文字的位置，放到中间
    labelShape.attr('x', keyShape.attr('width') / 2 + imgWidth);
    labelShape.attr('y', keyShape.attr('height') / 2);
  },
  getLabelSize() {
    const labelShape = this.labelShape;
    return {
      width: labelShape.getBBox().width,
      height: labelShape.getBBox().height
    };
  },
  getAnchorPoints() {
    return [[0, 0.5], [1, 0.5], [0.5, 1], [0.5, 0]];
  }
})