# GGEditor

编辑器

## 使用说明

```jsx
import GGEditor, { Flow } from 'gg-editor';

<GGEditor>
  <Flow />
</GGEditor>
```

## API

| 方法 | 说明 | 类型 |
| :--- | :--- | :--- |
| setTrackable | 开启 / 关闭数据埋点 | `function(value: boolean)` |

## Events

请移步至 [EditorEvents](./editorEvents.zh-CN.md) 查看详情

## 体验改进计划说明

GGEditor 仅在页面加载时发送埋点数据，只会收集 URL 与相应版本信息，

一切只为能对 GGEditor 的运行情况有更多了解，以便更好的服务于用户。

如果你担心信息泄漏，可通过以下代码关闭：

```js
GGEditor.setTrackable(false);
```
