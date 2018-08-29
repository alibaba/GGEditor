# Flow

流程图

## 使用说明

```jsx
import GGEditor, { Flow } from 'gg-editor';

<GGEditor>
  <Flow />
</GGEditor>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| data | 初始数据 | `object` | - |
| graph | 图配置项，参考 [G6 Graph API](https://antv.alipay.com/zh-cn/g6/1.x/api/graph.html) | `object` | - |
| align | 对齐配置 | [`object`](#Align) | - |
| grid | 网格线配置 | [`object`](#Grid) | - |
| shortcut | 快捷键配置，[内置命令](./command.zh-CN.md#内置命令) | [`object`](#Shortcut) | - |
| noEndEdge | 是否支持悬空边 | `boolean` | `true` |

### Align

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| line | 对齐线样式 | `object` | - |
| item | 图项对齐 | `true` `false` `horizontal` `vertical` `center` | - |
| grid | 网格对齐 | `true` `false` `cc` `tl` | - |

### Grid

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| cell | 网孔尺寸 | `number` | - |
| line | 网格线样式 | `object` | - |

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
