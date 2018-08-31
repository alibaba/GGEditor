# RegisterEdge

注册边

## 使用说明

> G6 [自定义图项](https://antv.alipay.com/zh-cn/g6/1.x/tutorial/custom-shape.html) 教程

```jsx
import GGEditor, { Flow, RegisterEdge } from 'gg-editor';

<GGEditor>
  <Flow />
  <RegisterEdge name={...} config={...} extend={...} />
</GGEditor>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| name | 边名称 | `string` | - |
| config | 边配置 | `object` | - |
| extend | 继承图形 | `string` | - |

## 内置边

| 边英文名 | 边中文名 | 示例预览 |适用页面 |
| :--- | :--- | :--- | :--- |
| flow-polyline | 图折线 | ![图折线](https://cdn.yuque.com/lark/2018/png/223/1522559188562-7ecad6d2-36a7-4b68-ba6e-2d0b65b594e1.png) | Flow |
| flow-polyline-round | 圆角折线 | ![圆角折线](https://cdn.yuque.com/lark/2018/png/223/1522558993675-9448ac3d-27d7-46f3-8db9-c6d1a6a35c74.png) | Flow |
| flow-smooth | 图曲线 | ![图曲线](https://cdn.yuque.com/lark/2018/png/223/1522558884115-d96bf55b-4771-4f12-8641-d552829215e1.png) | Flow |