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
npm install gg-editor --save
```

### umd

```html
<script src="https://unpkg.com/gg-editor@${version}/dist/index.js"></script>
```

## Usage

### Flow

[![Edit GGEditor - Flow](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/ggeditor-flow-hq64m?fontsize=14&hidenavigation=1&theme=dark)

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

[![Edit GGEditor - Mind](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/ggeditor-mind-2262q?fontsize=14&hidenavigation=1&theme=dark)

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

| Type      | Example                | Source                                    |
| :-------- | :--------------------- | :---------------------------------------- |
| graph     | flow                   | [source](examples/flow)                   |
| graph     | mind                   | [source](examples/mind)                   |
| component | component-command      | [source](examples/component-command)      |
| component | component-item-panel   | [source](examples/component-item-panel)   |
| component | component-detail-panel | [source](examples/component-detail-panel) |
| plugin    | plugin-editable-label  | [source](examples/plugin-editable-label)  |
| plugin    | plugin-item-popover    | [source](examples/plugin-item-popover)    |
| plugin    | plugin-context-menu    | [source](examples/plugin-context-menu)    |
