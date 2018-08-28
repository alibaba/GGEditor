export const FLOW_CONTAINER = 'J_FlowContainer';
export const MIND_CONTAINER = 'J_MindContainer';
export const MINIMAP_CONTAINER = 'J_MinimapContainer';
export const CONTEXT_MENU_CONTAINER = 'J_ContextMenuContainer';
export const TOOLBAR_CONTAINER = 'J_ToolbarContainer';
export const ITEM_PANNEL_CONTAINER = 'J_ItemPannelContainer';

export const FLOW_CLASS_NAME = 'Flow';
export const MIND_CLASS_NAME = 'Mind';

export const EVENT_BEFORE_ADD_PAGE = 'beforeAddPage';
export const EVENT_AFTER_ADD_PAGE = 'afterAddPage';

export const STATUS_CANVAS_SELECTED = 'canvas-selected';
export const STATUS_NODE_SELECTED = 'node-selected';
export const STATUS_EDGE_SELECTED = 'edge-selected';
export const STATUS_GROUP_SELECTED = 'group-selected';
export const STATUS_MULTI_SELECTED = 'multi-selected';

/* eslint-disable */
export const GRAPH_MOUSE_REACT_EVENTS = {
  click: 'Click',
  contextmenu: 'ContextMenu',
  dblclick: 'DoubleClick',
  drag: 'Drag',
  Itemdragend: 'DragEnd',
  dragenter: 'DragEnter',
  dragleave: 'DragLeave',
  dragstart: 'DragStart',
  drop: 'Drop',
  mousedown: 'MouseDown',
  mouseenter: 'MouseEnter',
  mouseleave: 'MouseLeave',
  mousemove: 'MouseMove',
  mouseup: 'MouseUp',
};

export const GRAPH_OTHER_REACT_EVENTS = {
  afterChange: 'onAfterChange',
  afterChangeSize: 'onAfterChangeSize',
  afterViewportChange: 'onAfterViewportChange',
  beforeChange: 'onBeforeChange',
  beforeChangeSize: 'onBeforeChangeSize',
  beforeViewportChange: 'onBeforeViewportChange',
  keydown: 'onKeyDown',
  keyup: 'onKeyUp',
  mousewheel: 'onMouseWheel',
};

export const PAGE_REACT_EVENTS = {
  afteritemactived: 'onAfterItemActived',
  afteritemselected: 'onAfterItemSelected',
  afteritemunactived: 'onAfterItemUnactived',
  afteritemunselected: 'onAfterItemUnselected',
  beforeitemactived: 'onBeforeItemActived',
  beforeitemselected: 'onBeforeItemSelected',
  beforeitemunactived: 'onBeforeItemUnactived',
  beforeitemunselected: 'onBeforeItemUnselected',
  keyupeditlabel: 'onKeyUpEditLabel',
};

export const EDITOR_REACT_EVENTS = {
  aftercommandexecute: 'onAfterCommandExecute',
  beforecommandexecute: 'onBeforeCommandExecute',
};


export const GRAPH_MOUSE_EVENTS = Object.keys(GRAPH_MOUSE_REACT_EVENTS);

export const GRAPH_OTHER_EVENTS = Object.keys(GRAPH_OTHER_REACT_EVENTS);

export const PAGE_EVENTS = Object.keys(PAGE_REACT_EVENTS);

export const EDITOR_EVENTS = Object.keys(EDITOR_REACT_EVENTS);

/* eslint-enable */
