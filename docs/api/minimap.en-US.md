# Minimap

A minigraph of the map. It will auto-resized if the width and height have not been specified.

## Usage

```jsx
import GGEditor, { Flow, Minimap } from 'gg-editor';

<GGEditor>
  <Flow />
  <Minimap width={200} height={200} />
</GGEditor>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| container | 容器 id | `string` | - |
| width | 宽度 | `number` | - |
| height | 高度 | `number` | - |
| viewportWindowStyle | 视窗样式，参考 [G 绘图属性](https://antv.alipay.com/zh-cn/g2/3.x/api/graphic.html) | `object` | - |
| viewportBackStyle | 背景样式，参考 [G 绘图属性](https://antv.alipay.com/zh-cn/g2/3.x/api/graphic.html) | `object` | - |


| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| container | The id of the container. | `string` | - |
| width | The width of the container. | `number` | - |
| height | The height of the container. | `number` | - |
| viewportWindowStyle | The window style of the viewport. See more on [G Drawing Properties (Chinese)](https://antv.alipay.com/zh-cn/g2/3.x/api/graphic.html). | `object` | - |
| viewportBackStyle | The background style of the viewport. See more on [G Drawing Properties (Chinese)](https://antv.alipay.com/zh-cn/g2/3.x/api/graphic.html). | `object` | - |