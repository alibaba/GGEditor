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

    if (endX < 0) {
      const offset = (startX - (endX + targetWidth)) / 2;
      return group.addShape('path', {
        attrs: {
          path: [
            ['M', startX, startY + targetHeight / 2],
            ['L', startX - offset, startY + sourceHeight / 2],
            ['L', endX + targetWidth + offset, endY + targetHeight / 2],
            ['L', endX + targetWidth / 2, endY + targetHeight / 2]
          ],
          lineWidth: 1,
          stroke: 'red'
        }
      })
    }

    else {
      const offset = (endX -  (startX + sourceWidth)) / 2;
      return group.addShape('path', {
        attrs: {
          path: [
            ['M', startX + sourceWidth, startY + sourceHeight/2],
            ['L', startX + sourceWidth + offset, startY + sourceHeight/2],
            ['L', endX - offset, endY + targetHeight/2],
            ['L', endX, endY + targetHeight/2],
          ],
          lineWidth: 1,
          stroke: 'red'
        }
      })
    }

  },
};

G6.registerEdge('mind-edge', options);
