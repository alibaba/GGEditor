# RegisterNode

To register a node.

## Usage

> G6 [Custom Shape (Chinese)](https://antv.alipay.com/zh-cn/g6/1.x/tutorial/custom-shape.html) Tutorial

```jsx
import GGEditor, { Flow, RegisterNode } from 'gg-editor';

<GGEditor>
  <Flow />
  <RegisterNode name={...} config={...} extend={...} />
</GGEditor>
```

## API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| name | The name of a node. | `string` | - |
| config | To configurate a node. | `object` | - |
| extend | To extend a shape. | `string` | - |

## Built-in Nodes

| Node Name | Preview | Applicable Page |
| :--- | :--- | :--- |
| flow-circle | ![Cicle Nodes Figure](https://gw.alipayobjects.com/zos/rmsportal/ZnPxbVjKYADMYxkTQXRi.svg) | Flow |
| flow-rect | ![Rect Node Figure](https://gw.alipayobjects.com/zos/rmsportal/wHcJakkCXDrUUlNkNzSy.svg) | Flow |
| flow-rhombus | ![Rhombus Node Figure](https://gw.alipayobjects.com/zos/rmsportal/SnWIktArriZRWdGCnGfK.svg) | Flow |
| flow-capsule | ![Capsule Node Figure](https://gw.alipayobjects.com/zos/rmsportal/rQMUhHHSqwYsPwjXxcfP.svg) | Flow |
