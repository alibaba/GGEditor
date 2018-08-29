# ContextMenu

A right-click menu that can show or hide the menu, configuate with the commands button and control its available and disabled states.

## Usage

It must be used with the [`<Command />`](./command.en-US.md) component.

```jsx
import GGEditor, { Flow, Command, ContextMenu } from 'gg-editor';

<GGEditor>
  <Flow />
  <ContextMenu>
    <Command name="undo">Undo</Command>
    <Command name="redo">Redo</Command>
  </ContextMenu>
</GGEditor>
```
