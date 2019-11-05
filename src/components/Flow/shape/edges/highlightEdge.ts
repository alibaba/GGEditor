import { Edge } from '@/common/interfaces';
import { ItemState } from '@/common/constants';
import { G } from '@/common/interfaces/g';
import globalStyle from '../../common/globalStyle';

const { edgeStyle } = globalStyle;

// 选中时改变边框颜色
export default function drawHighlightEdge(name: ItemState, value: boolean, item: Edge) {
  const keyShape = item.getKeyShape() as G.Shape & { endArrow?: G.Shape };

  const revertStyle = () => {
    keyShape.attr({ ...edgeStyle });
    keyShape.endArrow && keyShape.endArrow.attr({ fill: edgeStyle.stroke });
  };

  if (item.hasState(ItemState.HighLight)) {
    keyShape.attr({
      lineWidth: 2,
      stroke: '#1890FF',
    });
    keyShape.endArrow && keyShape.endArrow.attr({ fill: '#1890FF' });
  }
}
