# RegisterNode

注册节点

## 使用说明

> G6 [自定义图项](https://antv.alipay.com/zh-cn/g6/1.x/tutorial/custom-shape.html) 教程

```jsx
import GGEditor, { Flow, RegisterNode } from 'gg-editor';

<GGEditor>
  <Flow />
  <RegisterNode name={...} config={...} extend={...} />
</GGEditor>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| name | 节点名称 | `string` | - |
| config | 节点配置 | `object` | - |
| extend | 继承图形 | `string` | - |

## 内置节点

| 节点英文名 | 节点中文名 | 示例预览 |适用页面 |
| :--- | :--- | :--- | :--- |
| flow-circle | 起止节点 | ![起止节点](https://gw.alipayobjects.com/zos/rmsportal/ZnPxbVjKYADMYxkTQXRi.svg) | Flow |
| flow-rect | 常规节点 | ![起止节点](https://gw.alipayobjects.com/zos/rmsportal/wHcJakkCXDrUUlNkNzSy.svg) | Flow |
| flow-rhombus | 分叉节点 | ![分叉节点](https://gw.alipayobjects.com/zos/rmsportal/SnWIktArriZRWdGCnGfK.svg) | Flow |
| flow-capsule | 模型节点 | ![模型节点](https://gw.alipayobjects.com/zos/rmsportal/rQMUhHHSqwYsPwjXxcfP.svg) | Flow |
