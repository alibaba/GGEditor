import globalStyle from '../../common/globalStyle';
const { edgeActivedStyle, edgeStyle, edgeDragStyle } = globalStyle;

// 选中时改变边框颜色
export default function drawActivedEdges(name, value, item) {
  const keyShape = item.getKeyShape();
  const revertStyle = () => {
    keyShape.attr({ ...edgeStyle });
    keyShape.endArrow && keyShape.endArrow.attr({ fill: edgeStyle.stroke });
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

  // 线条拖拽过程中问题
  if (name === 'drag' && value) {
    keyShape.attr({ ...edgeDragStyle });
    keyShape.endArrow && keyShape.endArrow.attr({ fill: edgeDragStyle.stroke });
  }
  if (name === 'onAnchor' && value) revertStyle();
  if (name === 'onAnchor' && !value) keyShape.attr({ ...edgeDragStyle });
  if (name === 'drag' && !value) revertStyle();
}
