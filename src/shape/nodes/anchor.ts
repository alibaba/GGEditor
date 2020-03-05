import globalStyle from '@/components/Flow/common/globalStyle';
import FSM, { StateTable } from '@/components/Flow/common/stateMachine';
import { Item, NodeModel } from '@/common/interfaces';

type Events = 'hoverNode' | 'leaveNode' | 'enterAnchor' | 'leaveAnchor' | 'drag' | 'dragEnd';

type States = 'none' | 'showAnchor' | 'activeAnchor';

interface ThisProps {
  addingEdge: boolean;
  getAnchorPoints: (model: NodeModel) => number[];
}
const { anchorPointStyle, anchorPointHoverStyle, anchorHotsoptActivedStyle, anchorHotsoptStyle, zIndex } = globalStyle;

function handleAnchor(this: ThisProps, name: string, value: any, item: Item) {
  if (!(item as any)._anchorFSM) (item as any)._anchorFSM = FSM<States, Events>('none');
  const fsm: FSM<States, Events> = (item as any)._anchorFSM;
  const model = item.getModel();
  // 拿到 group
  const group = item.getContainer();
  // 拿到所有的锚点
  const anchors = group
    .get('children')
    .filter(e => ['anchor', 'anchorSpot', 'banAnchor'].some(a => e.get('className') === a));

  const isActiveAnchor = name => name.includes('activeAnchor');

  const showAnchor = () => {
    // 限制连入状态的锚点图形绘制
    if (item.hasState('limitLink')) drawBanAnchors();
    else drawAnchor.call(this, model, group);
  };

  const activeAnchor = () =>
    anchors.forEach(a => {
      if (a.get('index') != name.slice(-1)) return;
      if (item.hasState('addingEdge')) a.setHotspotActived && a.setHotspotActived(true);
      else a.setActived();
    });

  const clearActivedAnchor = () =>
    anchors.forEach(a => {
      if (a.get('index') != name.slice(-1)) return;
      if (item.hasState('addingEdge')) a.setHotspotActived && a.setHotspotActived(false);
      else a.clearActived();
    });

  const showAnchorSpot = () => {
    // 限制连入状态的锚点图形绘制
    if (item.hasState('limitLink')) {
      drawBanAnchors();
    } else drawAnchor.call(this, model, group).forEach(a => a.showHotspot());
  };
  const removeAllAnchorSpot = () => !item.hasState('addingEdge') && anchors.forEach(a => a.remove());

  const removeAllAnchor = () => {
    anchors.forEach(a => a.remove());
  };
  const drawBanAnchors = () => drawBanAnchor.call(this, model, group);

  const stateTable: StateTable<Events, States> = [
    { e: 'hoverNode', f: 'none', t: 'showAnchor', action: showAnchor },
    {
      e: 'enterAnchor',
      f: 'showAnchor',
      t: 'activeAnchor',
      action: activeAnchor,
    },
    {
      e: 'leaveAnchor',
      f: 'activeAnchor',
      t: 'showAnchor',
      action: clearActivedAnchor,
    },
    { e: 'drag', t: 'showAnchor', action: showAnchorSpot },
    { e: 'dragEnd', t: 'none', action: removeAllAnchor },
    { e: 'leaveNode', t: 'none', action: removeAllAnchorSpot },
  ];

  fsm.setStateTable(stateTable);

  // 处于拖拽状态的节点，所有 action 都禁止执行
  if (name === 'addingSource' && value) fsm.canExecAction(false);
  if (name === 'addingSource' && !value) fsm.canExecAction(true);

  if (name === 'active') value ? fsm.transtion('hoverNode') : fsm.transtion('leaveNode');

  if (isActiveAnchor(name)) value ? fsm.transtion('enterAnchor') : fsm.transtion('leaveAnchor');
  if (name === 'addingEdge' || name === 'addingSource') value ? fsm.transtion('drag') : fsm.transtion('dragEnd');
}

function drawBanAnchor(this: ThisProps, model: NodeModel, group) {
  const anchorPoints = this.getAnchorPoints(model);
  return anchorPoints.map((p, index) => {
    const keyShape = group.get('item').getKeyShape();
    const width = keyShape.attr('width') || keyShape.attr('r') * 2;
    const height = keyShape.attr('height') || keyShape.attr('r') * 2;
    const [x, y] = [p[0], p[1]];
    const attrs = {
      flowNode: {
        x: width * x + keyShape.attr('x') - 6,
        y: height * y + keyShape.attr('y') - 6,
      },
      startNode: {
        x: width * x - width / 2 - 6,
        y: height * y - height / 2 - 6,
      },
      endNode: { x: width * x - width / 2 - 6, y: height * y - height / 2 - 6 },
    };
    const shape = group.addShape('image', {
      className: 'banAnchor',
      attrs: {
        img:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xLjUxNSAxLjE3Mmw1LjY1NyA1LjY1Nm0wLTUuNjU2TDEuNTE1IDYuODI4IiBzdHJva2U9IiNGRjYwNjAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+PC9zdmc+',
        width: 12,
        height: 12,
        ...(attrs[keyShape.baseType] || attrs['flowNode']),
      },
      index,
      zIndex: zIndex.anchorPoint,
    });
    return shape;
  });
}

function drawAnchor(this: ThisProps, model, group) {
  const anchorPoints = this.getAnchorPoints(model);
  // 为每个点添加标记
  return anchorPoints.map((p, index) => {
    const keyShape = group.get('item').getKeyShape();
    const width = keyShape.attr('width') || keyShape.attr('r') * 2;
    const height = keyShape.attr('height') || keyShape.attr('r') * 2;
    const [x, y] = [p[0], p[1]];
    let hotspot;
    const attrs = {
      flowNode: { x: width * x, y: height * y - 4 },
      startNode: { x: width * x - width / 2, y: height * y - height / 2 },
      endNode: { x: width * x - width / 2, y: height * y - height / 2 },
    };
    const shape = group.addShape('marker', {
      className: 'anchor',
      attrs: {
        symbol: 'circle',
        ...anchorPointStyle,
        ...(attrs[keyShape.baseType] || attrs['flowNode']),
      },
      index,
      zIndex: zIndex.anchorPoint,
    });
    shape.showHotspot = () => {
      hotspot = group.addShape('marker', {
        className: 'anchorSpot',
        attrs: {
          symbol: 'circle',
          ...anchorHotsoptStyle,
          ...(attrs[keyShape.baseType] || attrs['flowNode']),
        },
        index,
        zIndex: zIndex.anchorHotsopt,
      });

      // 让 hotspot 显示在更上层的图层
      hotspot.toFront();
      shape.toFront();
    };
    shape.setActived = () => shape.attr(anchorPointHoverStyle);

    shape.clearActived = () => shape.attr(anchorPointStyle);

    shape.setHotspotActived = bool => {
      if (hotspot) {
        if (bool) hotspot.attr(anchorHotsoptActivedStyle);
        else hotspot.attr(anchorHotsoptStyle);
      }
    };
    return shape;
  });
}

export { handleAnchor };
