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
export const GRAPH_MOUSE_EVENTS = [
  'click',                // 鼠标左键点击事件
  'dblclick',             // 鼠标左键双击事件
  'mouseenter',           // 鼠标移入事件
  'mouseleave',           // 鼠标移除事件
  'mousedown',            // 鼠标按下事件
  'mouseup',              // 鼠标抬起事件
  'mousemove',            // 鼠标移动事件
  'dragstart',            // 鼠标开始拖拽事件
  'drag',                 // 鼠标拖拽事件
  'dragend',              // 鼠标拖拽结束事件
  'dragenter',            // 鼠标拖拽进入事件
  'dragleave',            // 鼠标拖拽移出事件
  'drop',                 // 鼠标拖拽放置事件
  'contextmenu',          // 菜单事件
];

export const GRAPH_OTHER_EVENTS = [
  'mousewheel',           // 鼠标滚轮事件
  'keydown',              // 键盘按键按下事件
  'keyup',                // 键盘按键抬起事件
  'beforechange',         // 子项数据变化前
  'afterchange',          // 子项数据变化后
  'beforechangesize',     // 画布尺寸变化前
  'afterchangesize',      // 画布尺寸变化后
  'beforeviewportchange', // 视口变化前
  'afterviewportchange',  // 视口变化后
];

export const PAGE_EVENTS = [
  'beforeitemactived',    // 激活前
  'afteritemactived',     // 激活后
  'beforeitemunactived',  // 取消激活前
  'afteritemunactived',   // 取消激活后
  'beforeitemselected',   // 选中前
  'afteritemselected',    // 选中后
  'beforeitemunselected', // 取消选中前
  'afteritemunselected',  // 取消选中后
  'keyupeditlabel',       // 键盘按键抬起事件（节点编辑）
];

export const EDITOR_EVENTS = [
  'beforecommandexecute', // 命令执行前
  'aftercommandexecute',  // 命令执行后
];
/* eslint-enable */
