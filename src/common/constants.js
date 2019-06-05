export const FLOW_CONTAINER_ID = 'J_FlowContainer';
export const MIND_CONTAINER_ID = 'J_MindContainer';

export const NODE_DEFAULT_LABEL = '新建节点';
export const NODE_MAX_TEXT_LINE_WIDTH = 100;

export const SHAPE_CLASSNAME_LABEL = 'node-label';
export const SHPAE_CLASSNAME_ANCHOR = 'ANCHOR';
export const SHAPE_CLASSNAME_COLLAPSE_EXPAND_BUTTON = 'EXPAND_COLLAPSE_BUTTON';
export const SHAPE_CLASSNAME_KEYSHAPE = 'node-shape';
export const SHAPE_CLASSNAME_PREFIX = 'node-prefix';

export const ITEM_TYPE_NODE = 'node';
export const ITEM_TYPE_EDGE = 'edge';

export const ITEM_STATE_ACTIVE = 'active';
export const ITEM_STATE_SELECTED = 'selected';

export const LABEL_STATE_HIDE = 'HIDE';
export const LABEL_STATE_SHOW = 'SHOW';

export const GRAPH_STATE_NODE_SELECTED = 'NODE_SELECTED';
export const GRAPH_STATE_MULTI_SELECTED = 'MULTI_SELECTED';
export const GRAPH_STATE_CANVAS_SELECTED = 'CANVAS_SELECTED';

export const GRAPH_EVENTS_COMMON = {
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

export const GRAPH_EVENTS_ITEM_CHANGE = {
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

export const EDITOR_COMMAND_REDO = 'redo';
export const EDITOR_COMMAND_UNDO = 'undo';
export const EDITOR_COMMAND_TOPIC = 'topic';
export const EDITOR_COMMAND_SUBTOPIC = 'subtopic';

export const EDITOR_EVENTS_EDITOR_LABEL = 'EDITOR_LABEL';
export const EDITOR_EVENTS_BEFORE_EXECUTE_COMMAND = 'BEFORE_EXECUTE_COMMAND';
export const EDITOR_EVENTS_AFTER_EXECUTE_COMMAND = 'AFTER_EXECUTE_COMMAND';

export const EDITOR_EVENTS = {
  [EDITOR_EVENTS_BEFORE_EXECUTE_COMMAND]: 'onBeforeExecuteCommand',
  [EDITOR_EVENTS_AFTER_EXECUTE_COMMAND]: 'onAfterExecuteCommand',
};
