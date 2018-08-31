# ContextMenu

A right-click menu that can show or hide the menu, configuate with the commands button and control its available and disabled states.

## Usage

It must be used with the [`<Command />`](./command.en-US.md) component. The corresponding menu is displayed according to different states in the page. For example, when the node is selected, only the `NodeMenu` will be displayed.

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
    <NodeMenu>     // context menu when right-click on a node
      <Command name="copy">Copy</Command>
      <Command name="delete">Delete</Command>
    </NodeMenu>
    <EdgeMenu />   // context menu when right-click on an edge
    <GroupMenu />  // context menu when right-click on a group
    <MultiMenu />  // context menu when right-click on multiple items
    <CanvasMenu /> // context menu when right-click on a canvas
  </ContextMenu>
</GGEditor>
```
