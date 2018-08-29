# Flow

The Flow graph.

## Usage

```jsx
import GGEditor, { Flow } from 'gg-editor';

<GGEditor>
  <Flow />
</GGEditor>
```

## API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| data | The initial data. | `object` | - |
| graph | To configurate the graph. See more on [G6 Graph API (Chinese)](https://antv.alipay.com/zh-cn/g6/1.x/api/graph.html). | `object` | - |
| align | To set the alignment. | [`object`](#Align) | - |
| grid | To set the grid. | [`object`](#Grid) | - |
| shortcut | To set the shortcut keys. See more on [Built-in Commands](./command.en-US.md#Built-in%20Commands). | [`object`](#Shortcut) | - |
| noEndEdge | To set if the no-end-edge is supported. | `boolean` | `true` |

### Align

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| line | The alignment of the line style. | `object` | - |
| item | The alignment of an item. | `true` `false` `horizontal` `vertical` `center` | - |
| grid | The alignment of a grid. | `true` `false` `cc` `tl` | - |

### Grid

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| cell | The size of the grid. | `number` | - |
| line | The line style of the grid. | `object` | - |

### Shortcut

Example:

```jsx
  shortcut: {
    zoomIn: true,   // To turn on the zoom-in shortcut
    zoomOut: false, // To turn off the zoom-out shortcut
  }
```

## Events

See more on [PageEvents](./pageEvents.en-US.md).