# Page Events

## Usage

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

## Event Target

| Property | Description |
| :--- | :--- |
| action | The actions includes: `add`, `update`, `remove`, `changeData`. |
| item | The item in the graph. |
| shape | The sharp of the graph. |
| x | The `x` cooridate of the item. |
| y | The `y` cooridate of the item. |
| domX | The `x` cooridate of the item to the DOM. |
| domY | The `y` cooridate of the item to the DOM. |
| domEvent | The native DOM event. |
| currentItem | The current item in the drag event. |
| currentShape | The current sharp in the drag event . |
| toShape | The sharp in `mouseleave` and `dragleave` events. |
| toItem | The item in `mouseleave` and `dragleave` events. |

## Event list

### Synthetic Events

These `SyntheticEvent` are available with the one of the following prefixes: `node`, `edge`, `group`, `guide` or `anchor`. For example:

```jsx
import GGEditor, { Flow } from 'gg-editor';

<GGEditor>
  <Flow
    onClick={() => {}}       // triggered when chlicking on a canvas
    onNodeClick={() => {}}   // triggered when chlicking on a node in a canvas
    onEdgeClick={() => {}}   // triggered when chlicking on an edge in a canvas
    onGroupClick={() => {}}  // triggered when chlicking on a group in a canvas
    onGuideClick={() => {}}  // triggered when chlicking on a guide in a canvas
    onAnchorClick={() => {}} // triggered when chlicking on an anchor in a canvas
  />
</GGEditor>
```

| Event Name | Description |
| :--- | :--- |
| onClick | The `onClick` event is fired when a pointing device button (usually a mouse's primary button) is pressed and released on a single item. |
| onDoubleClick | The `onDoubleClick` event is fired when a pointing device button (usually a mouse's primary button) is clicked twice on a single item. |
| onMouseEnter | The `onMouseEnter` event is fired when a pointing device (usually a mouse) is moved over the item that has the listener attached. |
| onMouseLeave | The `onMouseLeave` event is fired when the pointer of a pointing device (usually a mouse) is moved out of an item that has the listener attached to it. |
| onMouseDown | The `onMouseDown` event is fired when a pointing device button is pressed on an item. |
| onMouseUp | The `onMouseUp` event is fired when a pointing device button is released over an item. |
| onMouseMove | The `onMouseMove` event is fired when a pointing device (usually a mouse) is moved while over an item. |
| onDragStart | The `onDragStart` event is fired when the user starts dragging an item. |
| onDrag | The `onDrag` event is fired every few hundred milliseconds as an item is being dragged by the user. |
| onDragEnd | The `onDragEnd` event is fired when a drag operation is being ended (by releasing a mouse button or hitting the escape key). |
| onDragEnter | The `onDragEnter` event is fired when a dragged item enters a valid drop target. |
| onDragLeave | The `onDragLeave` event is fired when a dragged item leaves a valid drop target. |
| onDrop | The `onDrop` event is fired when an item is dropped on a valid drop target. |
| onContextMenu | The `onContextMenu` event is fired when the right button of the mouse is clicked (before the context menu is displayed), or when the context menu key is pressed (in which case the context menu is displayed at the bottom left of the focused element, unless the element is a tree, in which case the context menu is displayed at the bottom left of the current row). |

### Other Events

| Event Name | Description |
| :--- | :--- |
| onMouseWheel | The `onMouseWheel` interface represents events that occur due to the user turning a mouse wheel. |
| onKeyDown | The `onKeyDown` event is fired when a key is pressed down |
| onKeyUp | The `onKeyUp` event is fired when a key is released.  |
| onBeforeChange | This event is fired before the `onChange` event. |
| onAfterChange | This event is fired after the `onChange` event. |
| onBeforeChangeSize | This event is fired before the size is changed. |
| onAfterChangeSize | This event is fired after the size is changed. |
| onBeforeViewportChange | This event is fired before the `onViewportChange` event. |
| onAfterViewportChange | This event is fired after the `onViewportChange` event. |
| onBeforeItemActived | This event is fired before the item is activated. |
| onAfterItemActived | This event is fired after the item is activated. |
| onBeforeItemInactivated | This event is fired before the item is inactivated. |
| onAfterItemInactivated | This event is fired after the item is inactivated. |
| onBeforeItemSelected | This event is fired before the item is selected. |
| onAfterItemSelected | This event is fired after the item is selected. |
| onBeforeItemUnselected | This event is fired before the item is unselected.
| onAfterItemUnselected | This event is fired after the item is selected. |
| onKeyUpEditLabel | This event is fired when a key is released and the focus is on the label editing model. |
