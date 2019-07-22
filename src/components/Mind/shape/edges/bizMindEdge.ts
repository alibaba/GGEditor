import G6 from '@antv/g6';
import { EdgeRegisterOption } from "@common/interface";

const options: EdgeRegisterOption = {
  draw(model, group) {
    console.log(model.startPoint, model.endPoint)
    return group.addShape('path', {
      attrs:{
        lineWidth:1,
        stroke: 'red'
      }
    })
  },
  update(model, item) {
    console.log(model, item)
  }
};

G6.registerEdge('mind-edge', options, 'single-line');
