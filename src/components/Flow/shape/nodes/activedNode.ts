import globalStyle from '../../common/globalStyle';
const { nodeStyle, nodeActivedStyle, nodeSelectedStyle, startNodeStyle } = globalStyle;

// 选中时改变边框颜色
export function drawActivedNode(name: string, value: boolean, item: any) {
  const revertStyle = () => {
    const shape = item.getKeyShape().baseType;
    // 恢复原本样式
    if (shape == 'startNode' || shape == 'endNode') item.get('keyShape').attr({ ...startNodeStyle });
    else item.get('keyShape').attr({ ...nodeStyle });
  };
  // 选中时且鼠标停留时显示样式
  if ((name === 'selected' || name === 'active' || name === 'activeAnchor') && value)
    item.get('keyShape').attr({ ...nodeActivedStyle });

  // 选中时加阴影
  if (name === 'selected' && value) item.get('keyShape').attr({ ...nodeSelectedStyle });

  // 取消选中复原
  if (name === 'selected' && !value) revertStyle();

  // 离开节点且为非选中状态、非拖拽状态
  if (name === 'active' && !value && !item.hasState('selected') && !item.hasState('addingSource')) revertStyle();
}
