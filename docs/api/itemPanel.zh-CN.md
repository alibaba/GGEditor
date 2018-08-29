# ItemPanel

元素面板栏

## 使用说明

必需配合 `<Item />` 组件使用，如果 `<Item />` 包含 `src` 属性则自动显示元素概览图片。

```jsx
import GGEditor, { Flow, Item, ItemPanel } from 'gg-editor';

<GGEditor>
  <Flow />
  <ItemPanel>
    <Item
      type="node"
      size="72*72"
      shape="flow-circle"
      model={{
        color: '#FA8C16',
        label: '起止节点',
      }}
      src="https://gw.alipayobjects.com/zos/rmsportal/ZnPxbVjKYADMYxkTQXRi.svg"
    />
  </ItemPanel>
</GGEditor>
```

## API

### Item

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | **必填** 元素类型，可选类型：`node` `edge` | `string` | - |
| size | **必填** 元素尺寸，书写格式：`50*50` | `string` | - |
| shape | **必填** 元素形状，内置形状：[node](./registerNode.zh-CN.md#内置节点)、[edge](./registerEdge.zh-CN.md#内置边) | `string` | - |
| model | 元素初始 model | `object` | - |
| src | 元素概览 src | `string` | - |
