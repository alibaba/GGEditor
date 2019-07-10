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

export enum GraphState {
  NodeSelected = 'NodeSelected',
  MultiSelected = 'MultiSelected',
  CanvasSelected = 'CanvasSelected',
}

export enum LabelState {
  Hide = 'Hide',
  Show = 'Show',
}

export enum GraphCommonEvent {
  /** 单击鼠标左键或者按下回车键时触发 */
  click = 'onClick',
  /** 双击鼠标左键时触发 */
  dbclick = 'onDoubleClick',
  /** 鼠标移入元素范围内触发，该事件不冒泡，即鼠标移到其后代元素上时不会触发 */
  mouseenter = 'onMouseEnter',
  /** 鼠标在元素内部移到时不断触发，不能通过键盘触发 */
  mousemove = 'onMouseMove',
  /** 鼠标移出目标元素后触发 */
  mouseout = 'onMouseOut',
  /** 鼠标移入目标元素上方，鼠标移到其后代元素上时会触发 */
  mouseover = 'onMouseOver',
  /** 鼠标移出元素范围时触发，该事件不冒泡，即鼠标移到其后代元素时不会触发 */
  mouseleave = 'onMouseLeave',
  /** 鼠标按钮被按下（左键或者右键）时触发，不能通过键盘触发 */
  mousedown = 'onMouseDown',
  /** 鼠标按钮被释放弹起时触发，不能通过键盘触发 */
  mouseup = 'onMouseUp',
  /** 用户右击鼠标时触发并打开上下文菜单 */
  contextmenu = 'onContextMenu',
  /** 当拖拽元素开始被拖拽的时候触发的事件，此事件作用在被拖曳元素上 */
  dragstart = 'onDragStart',
  /** 当拖拽元素在拖动过程中时触发的事件，此事件作用于被拖拽元素上 */
  drag = 'onDrag',
  /** 当拖拽完成后触发的事件，此事件作用在被拖曳元素上 */
  dragend = 'onDragEnd',
  /** 当拖曳元素进入目标元素的时候触发的事件，此事件作用在目标元素上 */
  dragenter = 'onDragEnter',
  /** 当拖曳元素离开目标元素的时候触发的事件，此事件作用在目标元素上 */
  dragleave = 'onDragLeave',
  /** 被拖拽的元素在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上 */
  drop = 'onDrop',
  /** 按下键盘键触发该事件 */
  keydown = 'onKeyDown',
  /** 释放键盘键触发该事件 */
  keyup = 'onKeyUp',
  /** 当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发 */
  touchstart = 'onTouchStart',
  /** 当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用 preventDefault() 事件可以阻止滚动。 */
  touchmove = 'onTouchMove',
  /** 当手指从屏幕上离开的时候触发 */
  touchend = 'onTouchEnd',
}

export enum GraphNodeEvent {
  /** 鼠标左键单击节点时触发 */
  'node:click' = 'onNodeClick',
  /** 鼠标双击左键节点时触发 */
  'node:dbclick' = 'onNodeDoubleClick',
  /** 鼠标移入节点时触发 */
  'node:mouseenter' = 'onNodeMouseEnter',
  /** 鼠标在节点内部移到时不断触发，不能通过键盘触发 */
  'node:mousemove' = 'onNodeMouseMove',
  /** 鼠标移出节点后触发 */
  'node:mouseout' = 'onNodeMouseOut',
  /** 鼠标移入节点上方时触发 */
  'node:mouseover' = 'onNodeMouseOver',
  /** 鼠标移出节点时触发 */
  'node:mouseleave' = 'onNodeMouseLeave',
  /** 鼠标按钮在节点上按下（左键或者右键）时触发，不能通过键盘触发 */
  'node:mousedown' = 'onNodeMouseDown',
  /** 节点上按下的鼠标按钮被释放弹起时触发，不能通过键盘触发 */
  'node:mouseup' = 'onNodeMouseUp',
  /** 用户在节点上右击鼠标时触发并打开右键菜单 */
  'node:contextmenu' = 'onNodeContextMenu',
  /** 当节点开始被拖拽的时候触发的事件，此事件作用在被拖曳节点上 */
  'node:dragstart' = 'onNodeDragStart',
  /** 当节点在拖动过程中时触发的事件，此事件作用于被拖拽节点上 */
  'node:drag' = 'onNodeDrag',
  /** 当拖拽完成后触发的事件，此事件作用在被拖曳节点上 */
  'node:dragend' = 'onNodeDragEnd',
  /** 当拖曳节点进入目标元素的时候触发的事件，此事件作用在目标元素上 */
  'node:dragenter' = 'onNodeDragEnter',
  /** 当拖曳节点离开目标元素的时候触发的事件，此事件作用在目标元素上 */
  'node:dragleave' = 'onNodeDragLeave',
  /** 被拖拽的节点在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上 */
  'node:drop' = 'onNodeDrop',
}

export enum GraphEdgeEvent {
  /** 鼠标左键单击边时触发 */
  'edge:click' = 'onEdgeClick',
  /** 鼠标双击左键边时触发 */
  'edge:dbclick' = 'onEdgeDoubleClick',
  /** 鼠标移入边时触发 */
  'edge:mouseenter' = 'onEdgeMouseEnter',
  /** 鼠标在边上移到时不断触发，不能通过键盘触发 */
  'edge:mousemove' = 'onEdgeMouseMove',
  /** 鼠标移出边后触发 */
  'edge:mouseout' = 'onEdgeMouseOut',
  /** 鼠标移入边上方时触发 */
  'edge:mouseover' = 'onEdgeMouseOver',
  /** 鼠标移出边时触发 */
  'edge:mouseleave' = 'onEdgeMouseLeave',
  /** 鼠标按钮在边上按下（左键或者右键）时触发，不能通过键盘触发 */
  'edge:mousedown' = 'onEdgeMouseDown',
  /** 边上按下的鼠标按钮被释放弹起时触发，不能通过键盘触发 */
  'edge:mouseup' = 'onEdgeMouseUp',
  /** 用户在边上右击鼠标时触发并打开右键菜单 */
  'edge:contextmenu' = 'onEdgeContextMenu',
}

export enum GraphCanvasEvent {
  /** 鼠标左键单击画布时触发 */
  'canvas:click' = 'onCanvasClick',
  /** 鼠标双击左键画布时触发 */
  'canvas:dbclick' = 'onCanvasDoubleClick',
  /** 鼠标移入画布时触发 */
  'canvas:mouseenter' = 'onCanvasMouseEnter',
  /** 鼠标在画布内部移到时不断触发，不能通过键盘触发 */
  'canvas:mousemove' = 'onCanvasMouseMove',
  /** 鼠标移出画布后触发 */
  'canvas:mouseout' = 'onCanvasMouseOut',
  /** 鼠标移入画布上方时触发 */
  'canvas:mouseover' = 'onCanvasMouseOver',
  /** 鼠标移出画布时触发 */
  'canvas:mouseleave' = 'onCanvasMouseLeave',
  /** 鼠标按钮在画布上按下（左键或者右键）时触发，不能通过键盘触发 */
  'canvas:mousedown' = 'onCanvasMouseDown',
  /** 画布上按下的鼠标按钮被释放弹起时触发，不能通过键盘触发 */
  'canvas:mouseup' = 'onCanvasMouseUp',
  /** 用户在画布上右击鼠标时触发并打开右键菜单 */
  'canvas:contextmenu' = 'onCanvasContextMenu',
  /** 当画布开始被拖拽的时候触发的事件，此事件作用在被拖曳画布上 */
  'canvas:dragstart' = 'onCanvasDragStart',
  /** 当画布在拖动过程中时触发的事件，此事件作用于被拖拽画布上 */
  'canvas:drag' = 'onCanvasDrag',
  /** 当拖拽完成后触发的事件，此事件作用在被拖曳画布上 */
  'canvas:dragend' = 'onCanvasDragEnd',
  /** 当拖曳画布进入目标元素的时候触发的事件，此事件作用在目标元素上 */
  'canvas:dragenter' = 'onCanvasDragEnter',
  /** 当拖曳画布离开目标元素的时候触发的事件，此事件作用在目标元素上 */
  'canvas:dragleave' = 'onCanvasDragLeave',
}

export enum GraphCustomEvent {
  /** 调用 add / addItem 方法之前触发 */
  beforeadditem = 'onBeforeAddItem',
  /** 调用 add / addItem 方法之后触发 */
  afteradditem = 'onAfterAddItem',
  /** 调用 remove / removeItem 方法之前触发 */
  beforeremoveitem = 'onBeforeRemoveItem',
  /** 调用 remove / removeItem 方法之后触发 */
  afterremoveitem = 'onAfterRemoveItem',
  /** 调用 update / updateItem 方法之前触发 */
  beforeupdateitem = 'onBeforeUpdateItem',
  /** 调用 update / updateItem 方法之后触发 */
  afterupdateitem = 'onAfterUpdateItem',
  /** 调用 showItem / hideItem 方法之前触发 */
  beforeitemvisibilitychange = 'onBeforeItemVisibilityChange',
  /** 调用 showItem / hideItem 方法之后触发 */
  afteritemvisibilitychange = 'onAfterItemVisibilityChange',
  /** 调用 setItemState 方法之前触发 */
  beforeitemstatechange = 'onBeforeItemStateChange',
  /** 调用 setItemState 方法之后触发 */
  afteritemstatechange = 'onAfterItemStateChange',
  /** 调用 refreshItem 方法之前触发 */
  beforerefreshitem = 'onBeforeRefreshItem',
  /** 调用 refreshItem 方法之后触发 */
  afterrefreshitem = 'onAfterRefreshItem',
  /** 调用 clearItemStates 方法之前触发 */
  beforeitemstatesclear = 'onBeforeItemStatesClear',
  /** 调用clearItemStates 方法之后触发 */
  afteritemstatesclear = 'onAfterItemStatesClear',
}

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
