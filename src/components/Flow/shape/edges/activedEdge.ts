import globalStyle from '../../common/globalStyle';
import { Shape } from '@common/interface';
const { edgeActivedStyle, edgeStyle } = globalStyle;

// 选中时改变边框颜色
export default function drawActivedEdges(name: string, value: boolean, item: Shape) {
  const keyShape: any = item.getKeyShape();
  const revertStyle = () => {
    keyShape.attr({ ...edgeStyle });
    if (keyShape.endArrow) keyShape.endArrow.attr({ fill: edgeStyle.stroke });
  };
  // 选中时且鼠标停留时显示样式
  if ((name === 'selected' || name === 'active') && value) {
    if (keyShape.endArrow) keyShape.endArrow.attr({ fill: edgeActivedStyle.stroke });
    keyShape.attr({ ...edgeActivedStyle, ...(name === 'selected' ? { lineWidth: 2 } : {}) });
  }

  // 取消选中复原
  if (name === 'selected' && !value) revertStyle();

  // 离开节点且为非选中状态、非拖拽状态
  if (name === 'active' && !value && !item.hasState('selected')) revertStyle();
}
