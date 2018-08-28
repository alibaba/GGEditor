# ContextMenu

右键菜单，负责菜单显示隐藏，命令按钮绑定与可用禁用状态控制。

## 使用说明

必需配合 [`<Command />`](command.zh-CN.md) 组件使用

```jsx
import GGEditor, { Flow, Command, ContextMenu } from 'gg-editor';

<GGEditor>
  <Flow />
  <ContextMenu>
    <Command name="undo">撤销</Command>
    <Command name="redo">重做</Command>
  </ContextMenu>
</GGEditor>
```