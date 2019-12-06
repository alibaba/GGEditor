English | [简体中文](README.md)

<h1 align="center">GGEditor</h1>

<div align="center">

A visual graph editor based on [G6](https://github.com/antvis/g6) and [React](https://github.com/facebook/react).

[![GitHub](https://img.shields.io/github/license/alibaba/GGEditor)](/LICENSE)
[![npm](https://img.shields.io/npm/v/gg-editor)](https://www.npmjs.com/package/gg-editor)
[![npm](https://img.shields.io/npm/dm/gg-editor)](https://www.npmjs.com/package/gg-editor)

</div>

## Installation

### npm

```sh
npm install --save gg-editor
```

### umd

```html
<script src="https://unpkg.com/gg-editor@${version}/dist/index.js"></script>
```

## Usage

### Flow

```jsx
import GGEditor, { Flow } from 'gg-editor';

const data = {
  nodes: [
    {
      id: '0',
      label: 'Node',
      x: 55,
      y: 55,
    },
    {
      id: '1',
      label: 'Node',
      x: 55,
      y: 255,
    },
  ],
  edges: [
    {
      label: 'Label',
      source: '0',
      target: '1',
    },
  ],
};

<GGEditor>
  <Flow data={data} />
</GGEditor>;
```

### Mind

```jsx
import GGEditor, { Mind } from 'gg-editor';

const data = {
  label: 'Central Topic',
  children: [
    {
      label: 'Main Topic 1',
    },
    {
      label: 'Main Topic 2',
    },
    {
      label: 'Main Topic 3',
    },
  ],
};

<GGEditor>
  <Mind data={data} />
</GGEditor>;
```

## Documentation

- [API documents](https://www.yuque.com/ggeditor/api-en)

## Examples

```sh
# Clone the repository
$ git clone https://github.com/gaoli/GGEditor.git

# Change directory
$ cd gg-editor

# Install dependencies
$ npm install

# Run examples
$ npm start
```

| Type      | Example                                         |
| --------- | ----------------------------------------------- |
| Graph     | [Flow](examples/flow)                           |
| Graph     | [Mind](examples/mind)                           |
| Component | [Command](examples/component-command)           |
| Component | [ItemPanel](examples/component-item-panel)      |
| Component | [DetailPanel](examples/component-detail-panel)  |
| Plugin    | [EditableLabel](examples/plugin-editable-label) |
| Plugin    | [ItemPopover](examples/plugin-item-popover)     |
| Plugin    | [ContextMenu](examples/plugin-context-menu)     |
