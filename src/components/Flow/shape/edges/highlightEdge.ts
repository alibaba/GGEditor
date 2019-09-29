import globalStyle from '../../common/globalStyle';
import { Edge } from '@common/interface';
import { ItemState } from '@common/constants';

const { edgeStyle } = globalStyle;

// 选中时改变边框颜色
export default function drawHighlightEdge(name: ItemState, value: boolean, item: Edge) {
  const keyShape = item.getKeyShape();

  const revertStyle = () => {
    keyShape.attr({ ...edgeStyle });
    keyShape.endArrow && keyShape.endArrow.attr({ fill: edgeStyle.stroke });
  };

  if (name === ItemState.HighLight && value) {
    keyShape.attr({
      lineWidth: 2,
      stroke: '#1890FF',
    });
  } else {
    revertStyle();
  }
}
