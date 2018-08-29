# RegisterEdge

To register an edge.

## Usage

> G6 [Custom Shape (Chinese)](https://antv.alipay.com/zh-cn/g6/1.x/tutorial/custom-shape.html) Tutorial

```jsx
import GGEditor, { Flow, RegisterEdge } from 'gg-editor';

<GGEditor>
  <Flow />
  <RegisterEdge name={...} config={...} extend={...} />
</GGEditor>
```

## API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| name | The name of a `edge`. | `string` | - |
| config | To configurate a edge. | `object` | - |
| extend | To extend a shape. | `string` | - |

## Built-in Edges

| Edge Name | Preview | Applicable Page |
| :--- | :--- | :--- |
| flow-polyline | ![Polyline Figure](https://cdn.yuque.com/lark/2018/png/223/1522559188562-7ecad6d2-36a7-4b68-ba6e-2d0b65b594e1.png) | Flow |
| flow-polyline-round | ![Rounded Polyline Figure](https://cdn.yuque.com/lark/2018/png/223/1522558993675-9448ac3d-27d7-46f3-8db9-c6d1a6a35c74.png ) | Flow |
| flow-smooth | ![Smooth Edge Figure](https://cdn.yuque.com/lark/2018/png/223/1522558884115-d96bf55b-4771-4f12-8641-d552829215e1.png) | Flow |