export default {
  delegateStyle: {
    fill: '#F3F9FF',
    fillOpacity: 0.5,
    stroke: '#1890FF',
    strokeOpacity: 0.9,
    lineDash: [5, 5]
  },
  // 元素层级
  zIndex: {
    anchorPoint: 3,
    anchorHotsopt: 2,
    selectedBox: 1,
    controlPoint: 4
  },
  // ********************     边样式      ********************
  // 边样式
  edgeStyle: {
    stroke: '#A3B1BF',
    strokeOpacity: 0.92,
    lineWidth: 1,
    lineAppendWidth: 8,
    endArrow: {
      path: 'M 4,0 L -4,-4 L -4,4 Z', // 自定义箭头为中心点在(0, 0)，指向 x 轴正方向的path
      d: 4
    }
  },
  // 鼠标悬浮边
  edgeActivedStyle: {
    stroke: '#1890FF',
    strokeOpacity: 0.92
  },

  // 选中边的样式
  edgeSelectedStyle: {
    lineWidth: 2,
    strokeOpacity: 0.92,
    stroke: '#A3B1BF'
  },

  // ********************     锚点      ********************
  // 锚点样式
  anchorPointStyle: {
    radius: 3.5,
    fill: '#fff',
    stroke: '#1890FF',
    lineAppendWidth: 12
  },
  // 锚点热区样式
  anchorHotsoptStyle: {
    radius: 12,
    fill: '#1890FF',
    fillOpacity: 0.25
  },
  // 锚点热区激活样式
  anchorHotsoptActivedStyle: {
    radius: 14
  },
  // 锚点鼠标悬浮样式
  anchorPointHoverStyle: {
    radius: 4,
    fill: '#1890FF',
    fillOpacity: 1,
    stroke: '#1890FF'
  },

  // ********************     节点      ********************
  // 节点悬浮样式
  nodeActivedStyle: {
    fill: '#F3F9FF',
    stroke: '#1890FF',
    fillOpacity: 0.92
  },

  // 节点选中样式
  nodeSelectedStyle: {
    shadowOffsetX: 0,
    shadowOffsetY: 4,
    shadowBlur: 10,
    shadowColor: '#ccc',
    lineWidth: 1.5
  },

  // 开始节点样式
  startNodeStyle: {
    x: 0,
    y: 0,
    r: 17,
    stroke: '#1296DB',
    fill: '#fff',
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowBlur: 0,
    shadowColor: '#fff',
    lineWidth: 1
  },

  // 结束节点样式
  endNodeStyle1: { x: 0, y: 0, r: 17, stroke: '#1296DB' },
  endNodeStyle2: { x: 0, y: 0, r: 12, stroke: '#1296DB', fill: '#1296DB', lineWidth: 1 },

  // 节点样式
  nodeStyle: {
    stroke: '#d5d5d5',
    fill: '#FFFFFF',
    lineWidth: 1,
    radius: 4,
    fillOpacity: 0.92,
    shadowOffsetX: 0,
    shadowOffsetY: 0,
    shadowBlur: 0,
    shadowColor: '#fff'
  },

  // 节点文本标签样式
  nodeLabelStyle: {
    fill: '#333',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontVariant: 'normal',
    textAlign: 'center',
    textBaseline: 'middle'
  }
};
