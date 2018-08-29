# Toolbars

A toolbar that can be configuated with the command buttons and control its available and disabled states.

## Usage

It must be used with the [`<Command />`](./command.en-US.md) component.

```jsx
import GGEditor, { Flow, Command, Toolbar } from 'gg-editor';

<GGEditor>
  <Flow />
  <Toolbar>
    <Command name="undo">Undo</Command>
    <Command name="redo">Redo</Command>
  </Toolbar>
</GGEditor>
```
