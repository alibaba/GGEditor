# ContextMenu

右键菜单，负责菜单显示隐藏，命令按钮绑定与可用禁用状态控制。

## 使用说明

必需配合 [`<Command />`](./command.zh-CN.md) 组件使用

自动根据不同页面状态显示对应菜单，例如：选中节点时则只会显示 `NodeMenu`。

```jsx
import GGEditor, {
  Flow,
  Command,
  ContextMenu,
  NodeMenu,
  EdgeMenu,
  GroupMenu,
  MultiMenu,
  CanvasMenu,
} from 'gg-editor';

<GGEditor>
  <Flow />
  <ContextMenu>
    <NodeMenu>     // 节点右键菜单
      <Command name="copy">复制</Command>
      <Command name="delete">删除</Command>
    </NodeMenu>
    <EdgeMenu />   // 边线右键菜单
    <GroupMenu />  // 群组右键菜单
    <MultiMenu />  // 多选右键菜单
    <CanvasMenu /> // 画布右键菜单
  </ContextMenu>
</GGEditor>
```
