# Mind

The mind map format of graph.

## Usage

```jsx
import GGEditor, { Mind } from 'gg-editor';

<GGEditor>
  <Mind />
</GGEditor>
```

## API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| data | The initial data. | `object` | - |
| graph | To configurate the graph. See more on [G6 Graph API (Chinese)](https://antv.alipay.com/zh-cn/g6/1.x/api/graph.html). | `object` | - |
| shortcut | To set the shortcut key [Built-in Commands](./command.en-US.md#Built-in%20Commands). | [`object`](#Shortcut) | - |


### Shortcut

Exmaple:

```jsx
  shortcut: {
    zoomIn: true,   // To turn on the zoom-in shortcut
    zoomOut: false, // To turn off the zoom-out shortcut
  }
```

## Events

See more on [PageEvents](./pageEvents.en-US.md).