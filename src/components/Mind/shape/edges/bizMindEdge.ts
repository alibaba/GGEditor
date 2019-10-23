import { Node, Group } from './../../../../common/interface';
import G6 from '@antv/g6';
import { Edge, Shape, EdgeModel } from '@/common/interface';
import { ItemState } from '@/common/constants';

const commonStyle = {
  lineWidth: 2,
  stroke: '#d8d8d8',
  endArrow: {
    path: 'M 0.5 0, A 3 3 0 0 1 -6.5 0, A 3 3 0 0 1 0.5 0',
  },
};

/** wrapper and keyShape's offset, determining end point of an edge */
const wrapperOffset = 4;

const options = {
  draw(model: EdgeModel, group: Group) {
    const startNode = (model.source as unknown) as Node;
    const endNode = (model.target as unknown) as Node;
    /**
     * left side: (x,y) is on the left-top point of a keyShape
     * right side: (x,y) is on the right-top point of a keyShape
     * */
    const { x: startX, y: startY } = model.startPoint;
    const { x: endX, y: endY } = model.endPoint;
    const sourceWidth = startNode.getBBox().width;
    const sourceHeight = startNode.getBBox().height;
    const targetHeight = endNode.getBBox().height;
    const targetWidth = endNode.getBBox().width;

    if (startNode.getModel().y === endNode.getModel().y && endNode.getModel().x < 0) {
      return group.addShape('path', {
        attrs: {
          path: [
            ['M', startX - sourceWidth, startY + sourceHeight / 2],
            ['L', endX + wrapperOffset, endY + targetHeight / 2],
          ],
          ...commonStyle,
        },
      });
    }

    if (startNode.getModel().y === endNode.getModel().y && endNode.getModel().x >= 0) {
      return group.addShape('path', {
        attrs: {
          path: [
            ['M', startX - sourceWidth, startY + sourceHeight / 2],
            ['L', endX - wrapperOffset, endY + targetHeight / 2],
          ],
          ...commonStyle,
        },
      });
    }

    if (endNode.getModel().x < 0 && endNode.getModel().y > startNode.getModel().y) {
      return this.drawLeftBottom(
        group,
        startX,
        startY,
        endX,
        endY,
        sourceHeight,
        targetHeight,
        targetWidth,
        sourceWidth,
      );
    }

    if (endNode.getModel().x < 0 && endNode.getModel().y < startNode.getModel().y) {
      return this.drawLeftTop(group, startX, startY, endX, endY, sourceHeight, targetHeight, targetWidth, sourceWidth);
    }

    if (endNode.getModel().x > 0 && endNode.getModel().y > startNode.getModel().y) {
      return this.drawRightBottom(group, startX, startY, endX, endY, sourceHeight, targetHeight, sourceWidth);
    } else {
      return this.drawRightTop(group, startX, startY, endX, endY, sourceHeight, targetHeight, sourceWidth);
    }
  },

  drawLeftBottom(group, startX, startY, endX, endY, sourceHeight, targetHeight, targetWidth, sourceWidth) {
    const offset = (startX - endX - sourceWidth) / 2;
    const radius = offset / 3;
    return group.addShape('path', {
      attrs: {
        path: [
          ['M', startX - sourceWidth, startY + sourceHeight / 2],
          ['L', startX - sourceWidth - offset + radius, startY + sourceHeight / 2],
          ['A', radius, radius, 0, 0, 0, startX - sourceWidth - offset, startY + sourceHeight / 2 + radius],
          ['L', endX + offset, endY + targetHeight / 2 - radius],
          ['A', radius, radius, 0, 0, 1, endX + offset - radius, endY + targetHeight / 2],
          ['L', endX + wrapperOffset, endY + targetHeight / 2],
        ],
        ...commonStyle,
      },
    });
  },

  drawLeftTop(group, startX, startY, endX, endY, sourceHeight, targetHeight, targetWidth, sourceWidth) {
    const offset = (startX - endX - sourceWidth) / 2;
    const radius = offset / 3;
    return group.addShape('path', {
      attrs: {
        path: [
          ['M', startX - sourceWidth, startY + sourceHeight / 2],
          ['L', startX - sourceWidth - offset + radius, startY + sourceHeight / 2],
          ['A', radius, radius, 0, 0, 1, startX - sourceWidth - offset, startY + sourceHeight / 2 - radius],
          ['L', endX + offset, endY + targetHeight / 2 + radius],
          ['A', radius, radius, 0, 0, 0, endX + offset - radius, endY + targetHeight / 2],
          ['L', endX + wrapperOffset, endY + targetHeight / 2],
        ],
        ...commonStyle,
      },
    });
  },

  drawRightBottom(group, startX, startY, endX, endY, sourceHeight, targetHeight, sourceWidth) {
    const offset = (endX - (startX + sourceWidth)) / 2;
    const radius = offset / 3;
    return group.addShape('path', {
      attrs: {
        path: [
          ['M', startX, startY + sourceHeight / 2],
          ['L', startX + sourceWidth + offset - radius, startY + sourceHeight / 2],
          ['A', radius, radius, 0, 0, 1, startX + sourceWidth + offset, startY + sourceHeight / 2 + radius],
          ['L', endX - offset, endY + targetHeight / 2 - radius],
          ['A', radius, radius, 0, 0, 0, endX - offset + radius, endY + targetHeight / 2],
          ['L', endX - wrapperOffset, endY + targetHeight / 2],
        ],
        ...commonStyle,
      },
    });
  },

  drawRightTop(group, startX, startY, endX, endY, sourceHeight, targetHeight, sourceWidth) {
    const offset = (endX - (startX + sourceWidth)) / 2;
    const radius = offset / 3;
    return group.addShape('path', {
      attrs: {
        path: [
          ['M', startX, startY + sourceHeight / 2],
          ['L', startX + sourceWidth + offset - radius, startY + sourceHeight / 2],
          ['A', radius, radius, 0, 0, 0, startX + sourceWidth + offset, startY + sourceHeight / 2 - radius],
          ['L', endX - offset, endY + targetHeight / 2 + radius],
          ['A', radius, radius, 0, 0, 1, endX - offset + radius, endY + targetHeight / 2],
          ['L', endX - wrapperOffset, endY + targetHeight / 2],
        ],
        ...commonStyle,
      },
    });
  },

  setState(name: ItemState, value: boolean, edge: Edge): void {
    const shape: Shape = edge.getContainer().get('children')[0];
    const states = edge.getStates();

    if (states.includes(ItemState.HighLight)) {
      edge.toFront();

      shape.attr({
        stroke: '#5AAAFF',
        shadowColor: '#5AAAFF',
        shadowBlur: 5,
      });
    } else {
      shape.attr({
        stroke: '#d8d8d8',
        shadowBlur: 0,
      });
    }
  },
};

G6.registerEdge('biz-mind-edge', options);
