export const MIND_CONTAINER_ID = 'J_MindContainer';

export const ITEM_TYPE_NODE = 'node';
export const ITEM_TYPE_EDGE = 'edge';

export const ITEM_STATE_ACTIVE = 'active';
export const ITEM_STATE_SELECTED = 'selected';

export const NODE_DEFAULT_LABEL = '新建节点';

export const GRAPH_STATUS_NODE_SELECTED = 'NODE_SELECTED';
export const GRAPH_STATUS_NODE_MULTI_SELECTED = 'NODE_MULTI_SELECTED';
export const GRAPH_STATUS_CANVAS_SELECTED = 'CANVAS_SELECTED';

export const GRAPH_COMMON_EVENTS = {
  click: 'Click',
  dblclick: 'DoubleClick',
  mouseenter: 'MouseEnter',
  mouseleave: 'MouseLeave',
  mouseover: 'MouseMove',
  mouseup: 'MouseUp',
  mousedown: 'MouseDown',
  mousemove: 'MouseMove',
  touchstart: 'TouchStart',
  touchend: 'TouchEnd',
  contextmenu: 'ContextMenu',
};

export const GRAPH_ITEM_CHANGE_EVENTS = {
  beforeadditem: 'onBeforeAddItem',
  afteradditem: 'onAfterAddItem',
  beforeremoveitem: 'onBeforeRemoveItem',
  afterremoveitem: 'onAfterRemoveItem',
  beforeitemvisibilitychange: 'onBeforeItemVisibilityChange',
  afteritemvisibilitychange: 'onAfterItemVisibilityChange',
  beforeitemstatechange: 'onBeforeItemStateChange',
  afteritemstatechange: 'onAfterItemStateChange',
  beforerefreshitem: 'onBeforereFreshItem',
  afterrefreshitem: 'onAfterreFreshItem',
};
