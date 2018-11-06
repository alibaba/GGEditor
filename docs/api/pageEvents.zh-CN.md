# Page Events

## 监听事件

```jsx
import GGEditor, { Flow } from 'gg-editor';

<GGEditor>
  <Flow
    onClick={(e) => {
      console.log(e);
    }}
  />
</GGEditor>
```

## 事件对象

| 属性属性 | 属性说明 |
| :--- | :--- |
| action | 动作包括：`add`、`update`、`remove`、`changeData` |
| item | 图项 |
| shape | 图形 |
| x | 图横坐标 |
| y | 图纵坐标 |
| domX | dom 横坐标 |
| domY | dom 纵坐标 |
| domEvent | 原生 dom 事件 |
| currentItem | `drag` 拖动图项 |
| currentShape | `drag` 拖动图形 |
| toShape | `mouseleave`、`dragleave` 到达的图形 |
| toItem | `mouseleave`、`dragleave` 到达的图项 |

## 事件列表

### 组合事件

此类事件可以结合前缀 `node`、`edge`、`group`、`guide`、`anchor` 组合使用，例如：

```jsx
import GGEditor, { Flow } from 'gg-editor';

<GGEditor>
  <Flow
    onClick={() => {}}       // 点击画布
    onNodeClick={() => {}}   // 点击节点
    onEdgeClick={() => {}}   // 点击边线
    onGroupClick={() => {}}  // 点击群组
    onGuideClick={() => {}}  // 点击导引
    onAnchorClick={() => {}} // 点击锚点
  />
</GGEditor>
```

| 事件名称 | 事件说明 |
| :--- | :--- |
| onClick | 鼠标左键点击事件 |
| onDoubleClick | 鼠标左键双击事件 |
| onMouseEnter | 鼠标移入事件 |
| onMouseLeave | 鼠标移除事件 |
| onMouseDown | 鼠标按下事件 |
| onMouseUp | 鼠标抬起事件 |
| onMouseMove | 鼠标移动事件 |
| onDragStart | 鼠标开始拖拽事件 |
| onDrag | 鼠标拖拽事件 |
| onDragEnd | 鼠标拖拽结束事件 |
| onDragEnter | 鼠标拖拽进入事件 |
| onDragLeave | 鼠标拖拽移出事件 |
| onDrop | 鼠标拖拽放置事件 |
| onContextMenu | 鼠标右键菜单事件 |

### 普通事件

| 事件名称 | 事件说明 |
| :--- | :--- |
| onMouseWheel | 鼠标滚轮事件 |
| onKeyDown | 键盘按键按下事件 |
| onKeyUp | 键盘按键抬起事件 |
| onBeforeChange | 子项数据变化前 |
| onAfterChange | 子项数据变化后 |
| onBeforeChangeSize | 画布尺寸变化前 |
| onAfterChangeSize | 画布尺寸变化后 |
| onBeforeViewportChange | 视口变化前 |
| onAfterViewportChange | 视口变化后 |
| onBeforeItemActived | 激活前 |
| onAfterItemActived | 激活后 |
| onBeforeItemInactivated | 取消激活前 |
| onAfterItemInactivated | 取消激活后 |
| onBeforeItemSelected | 选中前 |
| onAfterItemSelected | 选中后 |
| onBeforeItemUnselected | 取消选中前 |
| onAfterItemUnselected | 取消选中后 |
| onKeyUpEditLabel | 键盘按键抬起事件（节点编辑）|