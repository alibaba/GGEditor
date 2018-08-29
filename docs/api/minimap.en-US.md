# Minimap

A mini-map that will auto-resize if its width and height have not been specified.

## Usage

```jsx
import GGEditor, { Flow, Minimap } from 'gg-editor';

<GGEditor>
  <Flow />
  <Minimap width={200} height={200} />
</GGEditor>
```

## API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| container | The id of the container. | `string` | - |
| width | The width of the container. | `number` | - |
| height | The height of the container. | `number` | - |
| viewportWindowStyle | The window style of the viewport. See more on [G Drawing Properties (Chinese)](https://antv.alipay.com/zh-cn/g2/3.x/api/graphic.html). | `object` | - |
| viewportBackStyle | The background style of the viewport. See more on [G Drawing Properties (Chinese)](https://antv.alipay.com/zh-cn/g2/3.x/api/graphic.html). | `object` | - |