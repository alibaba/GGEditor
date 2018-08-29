# DetailPanel

A panel shows the detailed properties of the selected item.

## Usage

The `DetailPanel` displays the corresponding panel based on the various state. For example, it shows the `NodePanel` when the nodes are selected.

```jsx
import GGEditor, {
  Flow,
  DetailPanel,
  NodePanel,
  EdgePanel,
  GroupPanel,
  MultiPanel,
  CanvasPanel,
} from 'gg-editor';

<GGEditor>
  <Flow />
  <DetailPanel>
    <NodePanel>
      <NodeDetail />
    </NodePanel>
    <EdgePanel />
    <GroupPanel />
    <MultiPanel />
    <CanvasPanel />
  </DetailPanel>
</GGEditor>
```

```jsx
class NodeDetail extends React.Component {
  render() {
    console.log('this.props', this.props);
  }
}
```

## API

The properties of the `DetailPanel` sub-components.

| Attribute | Description | Type |
| :--- | :--- | :--- |
| getSelected | A function to get the currently selected item. | `function` |
| addItem | A function to add a new item. | `function(type, model)` |
| removeItem | A function to delete the item. | `function(item)` |
| updateItem | A function to update the item. | `function(item, model)` |
| findItem | A function to find the item. | `function(id)` |
