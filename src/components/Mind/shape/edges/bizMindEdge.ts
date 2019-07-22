import G6 from '@antv/g6';
import { EdgeRegisterOption } from "@common/interface";

const options: EdgeRegisterOption = {
  draw(model, group) {
    const startNode = model.source;
    const endNode = model.target;
    /**
     * (x,y) is on the left-top point of a node
     * */
    const { x: startX, y: startY, } = model.startPoint;
    const { x: endX, y: endY, } = model.endPoint;
    const sourceWidth = startNode.getBBox().width;
    const sourceHeight = startNode.getBBox().height;
    const targetHeight = endNode.getBBox().height;
    const targetWidth = endNode.getBBox().width;

    if (endY === startY) {
      return group.addShape('path', {
        attrs: {
          path: [
            ['M', startX, startY + sourceHeight / 2],
            ['L', endX, endY + targetHeight / 2]
          ],
          lineWidth: 2,
          stroke: '#d8d8d8',
        }
      })
    }

    if (endX < 0 && endY > startY) {
      return this.drawLeftBottom(group, startX, startY, endX, endY, sourceHeight, targetHeight, targetWidth);
    }

    if (endX < 0 && endY < startY) {
      return this.drawLeftTop(group, startX, startY, endX, endY, sourceHeight, targetHeight, targetWidth);
    }

    if (endX > 0 && endY > startY) {
      return this.drawRightBottom(group, startX, startY, endX, endY, sourceHeight, targetHeight, sourceWidth);
    }

    else {
      return this.drawRightTop(group, startX, startY, endX, endY, sourceHeight, targetHeight, sourceWidth);
    }
  },

  drawLeftBottom(group, startX, startY, endX, endY, sourceHeight, targetHeight, targetWidth) {
    const offset = (startX - (endX + targetWidth)) / 2;
    const radius = offset / 3;
    return group.addShape('path', {
      attrs: {
        path: [
          ['M', startX, startY + targetHeight / 2],
          ['L', startX - offset + radius, startY + sourceHeight / 2],
          ['A', radius, radius, 0, 0, 0, endX + targetWidth + offset, startY + targetHeight / 2 + radius],
          ['L', endX + targetWidth + offset, endY + targetHeight / 2 - radius],
          ['A', radius, radius, 0, 0, 1, endX + targetWidth + offset - radius, endY + targetHeight / 2],
          ['L', endX + targetWidth / 2, endY + targetHeight / 2]
        ],
        lineWidth: 2,
        stroke: '#d8d8d8'
      }
    })
  },

  drawLeftTop(group, startX, startY, endX, endY, sourceHeight, targetHeight, targetWidth) {
    const offset = (startX - (endX + targetWidth)) / 2;
    const radius = offset / 3;
    return group.addShape('path', {
      attrs: {
        path: [
          ['M', startX, startY + targetHeight / 2],
          ['L', startX - offset + radius, startY + sourceHeight / 2],
          ['A', radius, radius, 0, 0, 1, endX + targetWidth + offset, startY + sourceHeight / 2 - radius],
          ['L', endX + targetWidth + offset, endY + targetHeight / 2 + radius],
          ['A', radius, radius, 0, 0, 0, endX + targetWidth + offset - radius, endY + targetHeight / 2],
          ['L', endX + targetWidth / 2, endY + targetHeight / 2]
        ],
        lineWidth: 2,
        stroke: '#d8d8d8'
      }
    })
  },

  drawRightBottom(group, startX, startY, endX, endY, sourceHeight, targetHeight, sourceWidth) {
    const offset = (endX - (startX + sourceWidth)) / 2;
    const radius = offset / 3;
    return group.addShape('path', {
      attrs: {
        path: [
          ['M', startX + sourceWidth, startY + sourceHeight / 2],
          ['L', startX + sourceWidth + offset - radius, startY + sourceHeight / 2],
          ['A', radius, radius, 0, 0, 1, startX + sourceWidth + offset, startY + sourceHeight / 2 + radius],
          ['L', endX - offset, endY + targetHeight / 2 - radius],
          ['A', radius, radius, 0, 0, 0, endX - offset + radius, endY + targetHeight / 2],
          ['L', endX, endY + targetHeight / 2],
        ],
        lineWidth: 2,
        stroke: '#d8d8d8'
      }
    })
  },

  drawRightTop(group, startX, startY, endX, endY, sourceHeight, targetHeight, sourceWidth){
    const offset = (endX - (startX + sourceWidth)) / 2;
    const radius = offset / 3;
    return group.addShape('path', {
      attrs: {
        path: [
          ['M', startX + sourceWidth, startY + sourceHeight / 2],
          ['L', startX + sourceWidth + offset - radius, startY + sourceHeight / 2],
          ['A', radius, radius, 0, 0, 0, startX + sourceWidth + offset, startY + sourceHeight / 2 - radius],
          ['L', endX - offset, endY + targetHeight / 2 + radius],
          ['A', radius, radius, 0, 0, 1, endX - offset + radius, endY + targetHeight / 2],
          ['L', endX, endY + targetHeight / 2],
        ],
        lineWidth: 2,
        stroke: '#d8d8d8'
      }
    })
  }
};

G6.registerEdge('mind-edge', options);
