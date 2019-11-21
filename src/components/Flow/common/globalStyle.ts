export default {
  alignLine: {
    // lineDash: [5],
    stroke: '#ff9800',
    lineWidth: 1,
  },
  delegateStyle: {
    fill: '#F3F9FF',
    fillOpacity: 0.5,
    stroke: '#1890FF',
    strokeOpacity: 0.9,
    lineDash: [5, 5],
  },
  // 元素层级
  zIndex: {
    anchorPoint: 3,
    anchorHotsopt: 2,
    selectedBox: 1,
    controlPoint: 4,
  },
  // 箭头半径
  arrowRadius: 6,

  // ********************     边样式      ********************
  // 边样式
  edgeStyle: {
    stroke: '#A3B1BF',
    strokeOpacity: 0.92,
    lineWidth: 1,
    lineAppendWidth: 8,
    lineDash: [0, 0],
  },
  // 线条拖拽样式
  edgeDragStyle: {
    stroke: '#ff9800',
    strokeOpacity: 0.92,
    lineWidth: 1,
    lineAppendWidth: 8,
    lineDash: [5, 5],
  },
  // 鼠标悬浮边
  edgeActivedStyle: {
    stroke: '#1890FF',
    strokeOpacity: 0.92,
  },

  // 选中边的样式
  edgeSelectedStyle: {
    lineWidth: 2,
    strokeOpacity: 0.92,
    stroke: '#A3B1BF',
  },
  // 边文本样式
  edgeLabelStyle: {
    fill: '#666',
    textAlign: 'center',
    textBaseline: 'middle',
  },
  // 边文本矩形背景边距
  edgeLabelRectPadding: 4,
  // 边文本矩形背景样式
  edgeLabelRectStyle: {
    fill: '#eee',
  },
  // ********************     锚点      ********************
  // 锚点样式
  anchorPointStyle: {
    radius: 4,
    fill: '#fff',
    stroke: '#5AAAFF',
    lineAppendWidth: 12,
  },
  banFlagStyle: {
    radius: 4,
    fill: '#ff7676',
    fillOpacity: 1,
    stroke: '#ff7676',
  },
  // 锚点热区样式
  anchorHotsoptStyle: {
    radius: 10,
    fill: '#fff',
    shadowBlur: 16,
    shadowColor: '#0075f1',
    fillOpacity: 0.2,
  },
  // 锚点热区激活样式
  anchorHotsoptActivedStyle: {
    radius: 14,
  },
  // 锚点鼠标悬浮样式
  anchorPointHoverStyle: {
    radius: 4,
    fill: '#5AAAFF',
    lineWidth: 2,
    fillOpacity: 1,
    stroke: '#5AAAFF',
  },
  // ********************     节点      ********************
  nodeLogoStyle: {
    img:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxyZWN0IGlkPSJiIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHJ4PSI0Ii8+PGZpbHRlciB4PSItMzUlIiB5PSItMjUlIiB3aWR0aD0iMTcwJSIgaGVpZ2h0PSIxNzAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj48ZmVPZmZzZXQgZHk9IjIiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMC4wNzQ1MDk4MDM5IDAgMCAwIDAgMC43NjA3ODQzMTQgMCAwIDAgMCAwLjc2MDc4NDMxNCAwIDAgMCAwLjUgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiMxM0MyQzIiIHhsaW5rOmhyZWY9IiNiIi8+PC9nPjxwYXRoIGQ9Ik0xOC40NjYgMTQuMjEyYS4zNzYuMzc2IDAgMCAwIC4wMDgtLjA3OXYtMi4yNTFhLjk2Ljk2IDAgMCAwLS45NTMtLjk2M2gtMy4yMTNWOS43ODZhMS45MSAxLjkxIDAgMCAwIDEuNTI2LTEuODc1QTEuOTA0IDEuOTA0IDAgMCAwIDEzLjk0IDZhMS45MDQgMS45MDQgMCAwIDAtMS44OTIgMS45MTEgMS45MSAxLjkxIDAgMCAwIDEuNTI2IDEuODc1djEuMTMzaC0zLjIxM2EuOTYuOTYgMCAwIDAtLjk1NC45NjN2Mi4yNEExLjkxMSAxLjkxMSAwIDAgMCA4IDE1Ljk3YzAgMS4wNTQuODQ5IDEuOTEyIDEuODkyIDEuOTEyYTEuOTA0IDEuOTA0IDAgMCAwIDEuODkzLTEuOTEyYzAtLjk2OC0uNzE3LTEuNzctMS42NDMtMS44OTR2LTIuMTk0YzAtLjEyMy4wOTktLjIyMy4yMi0uMjIzaDcuMTU5Yy4xMjEgMCAuMjIuMS4yMi4yMjN2Mi4yNTFjMCAuMDI3LjAwMy4wNTQuMDA4LjA4YTEuOTEgMS45MSAwIDAgMC0xLjUzNCAxLjg3NmMwIDEuMDU0Ljg1IDEuOTExIDEuODkzIDEuOTExQTEuOTA0IDEuOTA0IDAgMCAwIDIwIDE2LjA4OWExLjkxIDEuOTEgMCAwIDAtMS41MzQtMS44Nzd6bS01LjY4NC02LjNjMC0uNjQ2LjUyLTEuMTcxIDEuMTYtMS4xNzEuNjM4IDAgMS4xNTguNTI1IDEuMTU4IDEuMTcgMCAuNjQ1LS41MiAxLjE3LTEuMTU5IDEuMTdhMS4xNjYgMS4xNjYgMCAwIDEtMS4xNTktMS4xN3ptLTEuNzMgOC4wNThjMCAuNjQ2LS41MiAxLjE3LTEuMTYgMS4xN2ExLjE2NiAxLjE2NiAwIDAgMS0xLjE1OC0xLjE3YzAtLjY0NS41Mi0xLjE3IDEuMTU4LTEuMTcuNjQgMCAxLjE2LjUyNSAxLjE2IDEuMTd6bTcuMDU2IDEuMjlhMS4xNjYgMS4xNjYgMCAwIDEtMS4xNi0xLjE3MWMwLS42NDUuNTItMS4xNyAxLjE2LTEuMTcuNjM5IDAgMS4xNTguNTI1IDEuMTU4IDEuMTcgMCAuNjQ1LS41MiAxLjE3LTEuMTU4IDEuMTd6IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==',
    width: 20,
    height: 20,
  },
  // 节点悬浮样式
  nodeActivedStyle: {
    fill: '#F3F9FF',
    stroke: '#1890FF',
    fillOpacity: 0.92,
  },

  // 节点选中样式
  nodeSelectedStyle: {
    shadowOffsetX: 0,
    shadowOffsetY: 4,
    shadowBlur: 10,
    shadowColor: '#ccc',
    lineWidth: 1.5,
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
    lineWidth: 1,
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
    shadowColor: '#fff',
    nodeColor: '#13c2c2',
  },

  // 节点文本标签样式
  nodeLabelStyle: {
    fill: '#333',
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontVariant: 'normal',
    textAlign: 'center',
    textBaseline: 'middle',
  },
};
