import {
  SHPAE_CLASSNAME_ANCHOR,
  SHAPE_CLASSNAME_KEYSHAPE,
} from '@common/constants';
import globalStype from '../common/globalStyle';

const {
  anchorPointStyle,
  anchorPointHoverStyle,
  anchorHotsoptActivedStyle,
  anchorHotsoptStyle,
  zIndex,
} = globalStype;

function handleAnchor(name, value, item) {
  const model = item.get('model');
  // 拿到 group
  const group = item.getContainer();
  // 拿到所有的锚点
  const anchors = group.get('children').filter(e => e.get('className') === SHPAE_CLASSNAME_ANCHOR);

  // 非拖拽状态
  if (!this.addingEdge) {
    // 进入锚点激活锚点, value 为目标锚点
    // // 离开锚点则清除所有锚点激活样式
    if (name === 'activeAnchor') value ? value.setActived && value.setActived() : anchors.forEach(a => a.clearActived());
    // // 进入节点显示所有锚点
    // // 离开节点隐藏所有锚点
    if (name === 'active') value ? this.drawAnchor(model, group) : anchors.forEach(a => a.remove());
    if (name === 'selected' && !value) anchors.forEach(a => a.remove());
  } else {
    // 拖拽状态下激活锚点则激活 hotspost 样式
    if (name === 'activeAnchor') {
      value
        ? value.setHotspotActived && value.setHotspotActived(true)
        : anchors.forEach(a => a.setHotspotActived && a.setHotspotActived(false));
    }
  }
  // 进入拖拽状态
  if (name === 'addingEdge') {
    if (value) {
      this.addingEdge = true;
      const anchors = this.drawAnchor(model, group);
      // 拖拽状态下显示 hotspost
      anchors.forEach(a => a.showHotspot());
    } else {
      // 结束拖拽时清除所有锚点
      item.getContainer()
        .get('children')
        .filter(i => i.get('className') === SHPAE_CLASSNAME_ANCHOR)
        .forEach(a => a.remove());
      this.addingEdge = false;
    }
  }
}

function drawAnchor(model, group) {
  const anchorPoints = this.getAnchorPoints();
  // 为每个点添加标记
  return anchorPoints.map((p, index) => {
    const keyShape = group.get('item').getKeyShape() || group.findByClassName(SHAPE_CLASSNAME_KEYSHAPE)
    const width = keyShape.attr('width') || keyShape.attr('r') * 2;
    const height = keyShape.attr('height') || keyShape.attr('r') * 2;
    const [x, y] = [p[0], p[1]];
    let hotspot;
    const attrs = {
      flowNode: { x: width * x, y: height * y },
      startNode: { x: width * x - width / 2, y: height * y - height / 2 },
      endNode: { x: width * x - width / 2, y: height * y - height / 2 },
      'biz-flow-node': { x: width * x + keyShape.attr('x'), y: height * y + keyShape.attr('y') },
    };
    const shape = group.addShape('marker', {
      className: SHPAE_CLASSNAME_ANCHOR,
      attrs: {
        symbol: 'circle',
        ...anchorPointStyle,
        ...attrs[model.shape || 'flowNode'],
      },
      index,
      zIndex: zIndex.anchorPoint,
    });
    shape.showHotspot = () => {
      hotspot = group.addShape('marker', {
        className: SHPAE_CLASSNAME_ANCHOR,
        attrs: {
          symbol: 'circle',
          ...anchorHotsoptStyle,
          ...attrs[model.shape || 'flowNode'],
        },
        zIndex: zIndex.anchorHotsopt,
      });

      // 让 hotspot 显示在更上层的图层
      hotspot.toFront();
      shape.toFront();
    };
    shape.setActived = () => shape.attr(anchorPointHoverStyle);

    shape.clearActived = () => shape.attr(anchorPointStyle);

    shape.setHotspotActived = (bool) => {
      if (hotspot) {
        if (bool) hotspot.attr(anchorHotsoptActivedStyle);
        else hotspot.attr(anchorHotsoptStyle);
      }
    };
    return shape;
  });
}

export { drawAnchor, handleAnchor };
