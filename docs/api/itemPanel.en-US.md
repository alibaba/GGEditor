# ItemPanel

A panel of the item.

## Usage

It must be used with the `<Item />` component. If `<Item />` contains the `src` props, the item will display that image as overview.

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
        label: 'Item 1',
      }}
      src="https://gw.alipayobjects.com/zos/rmsportal/ZnPxbVjKYADMYxkTQXRi.svg"
    />
  </ItemPanel>
</GGEditor>
```

## API

### Item

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| type | **required** The type of an item. Options: `node`, `edge`. | `string` | - |
| size | **required** The size of an item. Format: `50*50`. | `string` | - |
| shape | **required** The shape of an item. Built-in shapes: [node](./registerNode.en-US.md#Built-in%20Nodes), [edge](./registerEdge.en-US.md#Built-in%20Edges). | `string` | - |
| model | The initial model of an item. | `object` | - |
| src | The overview image source of an item. | `string` | - |