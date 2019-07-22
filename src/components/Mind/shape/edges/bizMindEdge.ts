import G6 from '@antv/g6';
import { EdgeRegisterOption } from "@common/interface";

const options: EdgeRegisterOption = {
  draw(model, group) {
    const startNode = model.source;
    const endNode = model.target;
    const { x: startX, y: startY, } = model.startPoint;
    const { x: endX, y: endY, } = model.endPoint;
    const sourceWidth = startNode.getBBox().width;
    const targetWidth = endNode.getBBox().width;

    if (endX < 0) {
      const offset = (startX - sourceWidth / 2 - (endX + targetWidth / 2)) / 2;
      return group.addShape('path', {
        attrs: {
          path: [
            ['M', startX - sourceWidth / 2, startY],
            ['L', startX - sourceWidth / 2 - offset, startY],
            ['L', endX + targetWidth / 2 + offset, endY],
            ['L', endX + targetWidth / 2, endY]
          ],
          lineWidth: 1,
          stroke: 'red'
        }
      })
    }

    else {
      const offset = (endX - targetWidth / 2 - (startX + sourceWidth / 2)) / 2;
      return group.addShape('path', {
        attrs: {
          path: [
            ['M', startX + sourceWidth / 2, startY],
            ['L', startX + sourceWidth / 2 + offset, startY],
            ['L', endX - targetWidth / 2 - offset, endY],
            ['L', endX - targetWidth / 2, endY],
          ],
          lineWidth: 1,
          stroke: 'red'
        }
      })
    }

  },
  update(model, item) {
    console.log(model)
  }
};

G6.registerEdge('mind-edge', options, 'single-line');
