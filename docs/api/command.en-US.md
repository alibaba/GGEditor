# Command

A command for different actions.

## Usage

This component can only be nested within the [`<Toolbar />`](./toolbar.en-US.md) or [`<ContextMenu />`](./contextMenu.en-US.md) components.

```jsx
import GGEditor, { Flow, Command, Toolbar, ContextMenu } from 'gg-editor';

<GGEditor>
  <Flow />
  <Toolbar>
    <Command name="undo"><btuttoon></></Command>
    <Command name="redo">Redo</Command>
  </Toolbar>
  <ContextMenu>
    <Command name="undo">Undo</Command>
    <Command name="redo">Redo</Command>
  </ContextMenu>
</GGEditor>
```

## API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| name | Command name | `string` | - |

## Built-in Commands

|  Command Name | Shortcut Key (Mac) | Shortcut Key (Win) | Applicable Page |
| :--- | :--- | :--- | :--- |
| clear | - | - | All |
| selectAll | `⌘A` | `Ctrl+A` | All |
| undo | `⌘Z` | `Ctrl + Z` | All |
| redo | `⇧⌘Z` | `Shift + Ctrl + Z` | All |
| delete | `Delete` | `Delete` | All |
| zoomIn | `⌘=` | `Ctrl + =` | All |
| zoomOut | `⌘-` | `Ctrl + -` | All |
| autoZoom | - | - | All |
| resetZoom | `⌘0` | `Ctrl + 0` | All |
| toFront | - | - | All |
| toBack | - | - | All |
| copy | `⌘C` | `Ctrl + C` | Flow |
| paste | `⌘V` | `Ctrl + V` | Flow |
| multiSelect | - | - | Flow |
| addGroup | `⌘G` | `Ctrl + G` | Flow |
| unGroup | `⇧⌘G` | `Shift + Ctrl + G` | Flow |
| append | `Enter` | `Enter` | Mind |
| appendChild | `Tab` | `Tab` | Mind |
| collaspeExpand | `⌘/` | `Ctrl + /` | Mind |
