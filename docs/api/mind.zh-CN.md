# Mind

思维导图

## 使用说明

```jsx
import GGEditor, { Mind } from 'gg-editor';

<GGEditor>
  <Mind />
</GGEditor>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| data | 初始数据 | `object` | - |
| graph | 图配置项，参考 [G6 Graph API](https://antv.alipay.com/zh-cn/g6/1.x/api/graph.html) | `object` | - |
| shortcut | 快捷键配置，[内置命令](./command.zh-CN.md#内置命令) | [`object`](#Shortcut) | - |

### Shortcut

示例：

```jsx
  shortcut: {
    zoomIn: true,   // 开启放大快捷键
    zoomOut: false, // 开启视口缩小快捷键
  }
```

## Events

请移步至 [PageEvents](./pageEvents.zh-CN.md) 查看详情
