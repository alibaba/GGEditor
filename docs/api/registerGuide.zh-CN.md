# RegisterGuide

注册导引信息

## 使用说明

> G6 [自定义图项](https://antv.alipay.com/zh-cn/g6/1.x/tutorial/custom-shape.html) 教程

```jsx
import GGEditor, { Flow, RegisterGuide } from 'gg-editor';

<GGEditor>
  <Flow />
  <RegisterGuide name={...} config={...} extend={...} />
</GGEditor>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| name | 导引信息名称 | `string` | - |
| config | 导引信息配置 | `object` | - |
| extend | 继承图形 | `string` | - |