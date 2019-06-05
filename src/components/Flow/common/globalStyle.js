export default {
  delegateStyle: {
    fill: '#F3F9FF',
    fillOpacity: 0.5,
    stroke: '#1890FF',
    strokeOpacity: 0.9,
    lineDash: [5, 5],
  },
  // 轨道距离(单位：像素)
  orbitGap: 10,
  // 默认节点
  nodeDefaultShape: 'flow-node',
  // 默认边
  edgeDefaultShape: 'flow-smooth',
  // 默认组
  groupDefaultShape: 'flow-group',
  // 鼠标悬浮节点边框
  nodeActivedOutterStyle: {
    lineWidth: 0,
  },
  // 选中边框样式
  groupSelectedOutterStyle: {
    stroke: '#E0F0FF',
    lineWidth: 2,
  },
  // 选中边框样式
  nodeSelectedOutterStyle: {
    stroke: '#E0F0FF',
    lineWidth: 2,
  },
  // 鼠标悬浮边
  edgeActivedStyle: {
    stroke: '#1890FF',
    strokeOpacity: 0.92,
  },
  // 节点鼠标悬浮样式
  nodeActivedStyle: {
    fill: '#F3F9FF',
    stroke: '#1890FF',
  },
  // 组鼠标悬浮样式
  groupActivedStyle: {
    stroke: '#1890FF',
  },
  // 选中边的样式
  edgeSelectedStyle: {
    lineWidth: 2,
    strokeOpacity: 0.92,
    stroke: '#A3B1BF',
  },
  // 节点选中样式
  nodeSelectedStyle: {
    fill: '#F3F9FF',
    stroke: '#1890FF',
  },
  // 组选中样式
  groupSelectedStyle: {
    stroke: '#1890FF',
    fillOpacity: 0.92,
  },
  // 节点
  nodeStyle: {
    stroke: '#CED4D9',
    fill: '#FFFFFF',
    shadowOffsetX: 0,
    shadowOffsetY: 4,
    shadowBlur: 10,
    shadowColor: 'rgba(13, 26, 38, 0.08)',
    lineWidth: 1,
    radius: 4,
    fillOpacity: 0.92,
  },
  // 边样式
  edgeStyle: {
    stroke: '#A3B1BF',
    strokeOpacity: 0.92,
    lineWidth: 1,
    lineAppendWidth: 8,
    endArrow: true,
  },
  // 背景组边距
  groupBackgroundPadding: [40, 10, 10, 10],
  // 组文本标签水平坐标偏移
  groupLabelOffsetX: 10,
  // 组文本标签竖直坐标偏移
  groupLabelOffsetY: 10,
  // 边文本便签样式
  edgeLabelStyle: {
    fill: '#666',
    textAlign: 'center',
    textBaseline: 'middle',
  },
  // 边文本矩形背景边距
  edgeLabelRectPadding: 4,
  // 边文本矩形背景样式
  edgeLabelRectStyle: {
    fill: 'white',
  },
  // 节点文本标签样式
  nodeLabelStyle: {
    fill: '#666',
    textAlign: 'center',
    textBaseline: 'middle',
  },
  // 组样式
  groupStyle: {
    stroke: '#CED4D9',
    radius: 4,
  },
  // 组文本标签样式
  groupLabelStyle: {
    fill: '#666',
    textAlign: 'left',
    textBaseline: 'top',
  },
  // 多选框样式
  multiSelectRectStyle: {
    fill: '#1890FF',
    fillOpacity: 0.08,
    stroke: '#1890FF',
    opacity: 0.1,
  },
  // 拖拽节点悬浮组 到达组的样式
  dragNodeHoverToGroupStyle: {
    stroke: '#1890FF',
    lineWidth: 2,
  },
  // 拖拽节点移出组 原组的样式
  dragNodeLeaveFromGroupStyle: {
    stroke: '#BAE7FF',
    lineWidth: 2,
  },
  // 锚点样式
  anchorPointStyle: {
    radius: 3.5,
    fill: '#fff',
    stroke: '#1890FF',
    lineAppendWidth: 12,
  },
  // 锚点热区样式
  anchorHotsoptStyle: {
    radius: 12,
    fill: '#1890FF',
    fillOpacity: 0.25,
  },
  // 锚点热区激活样式
  anchorHotsoptActivedStyle: {
    radius: 14,
  },
  // 锚点鼠标悬浮样式
  anchorPointHoverStyle: {
    radius: 4,
    fill: '#1890FF',
    fillOpacity: 1,
    stroke: '#1890FF',
  },
  // 节点控制点样式
  nodeControlPointStyle: {
    radius: 4,
    fill: '#fff',
    shadowBlur: 4,
    shadowColor: '#666',
  },
  // 边控制点样式
  edgeControlPointStyle: {
    radius: 6,
    symbol: 'square',
    lineAppendWidth: 6,
    // fill: '#fff',
    // shadowBlur: 4,
    // shadowColor: '#666',
    fillOpacity: 0,
    strokeOpacity: 0,
  },
  // 节点选中盒样式
  nodeSelectedBoxStyle: {
    stroke: '#C2C2C2',
  },
  // 光标样式
  cursor: {
    panningCanvas: '-webkit-grabbing',
    beforePanCanvas: '-webkit-grab',
    hoverNode: 'move',
    hoverEffectiveAnchor: 'crosshair',
    hoverEdge: 'default',
    hoverGroup: 'move',
    hoverUnEffectiveAnchor: 'default',
    hoverEdgeControllPoint: 'crosshair',
    multiSelect: 'crosshair',
  },
  // 元素层级
  zIndex: {
    anchorPoint: 3,
    anchorHotsopt: 2,
    selectedBox: 1,
    controlPoint: 4,
  },
  // 多边形边样式
  polylineEdgeStyle: {
    offset: 10,
    borderRadius: 5,
  },
  // 拖拽归组延迟时间
  addToGroupDelayTime: 400,
  // 拖拽出组延迟时间
  outFromGroupDelayTime: 400,
};
