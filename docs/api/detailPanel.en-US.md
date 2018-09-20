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
