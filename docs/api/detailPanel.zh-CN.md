# DetailPanel

属性栏

## 使用说明

属性栏会自动根据不同页面状态显示对应面板，例如：选中节点时则只会显示 `NodePanel`。

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
    <NodePanel>     // 节点属性面板
      <NodeDetail />
    </NodePanel>
    <EdgePanel />   // 边线属性面板
    <GroupPanel />  // 群组属性面板
    <MultiPanel />  // 多选属性面板
    <CanvasPanel /> // 画布属性面板
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

属性面板子组件属性

| 属性 | 说明 | 类型 |
| :--- | :--- | :--- |
| getSelected | 获取当前选中图项 | `function` |
| addItem | 添加图项 | `function(type, model)` |
| removeItem | 删除图项 | `function(item)` |
| updateItem | 更新图项 | `function(item, model)` |
| findItem | 查找图项 | `function(id)` |
