English | [简体中文](README.zh-CN.md)

# GGEditor

![language](https://img.shields.io/badge/language-react-red.svg) [![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/gaoli/gg-editor/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/gg-editor.svg)](https://www.npmjs.com/package/gg-editor)
[![npm downloads](https://img.shields.io/npm/dm/gg-editor.svg)](https://www.npmjs.com/package/gg-editor)

A visual graph editor based G6 and React

![Flow](https://camo.githubusercontent.com/20982b9b9043c92c8bbe337ae4d47d684d63d2c1/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f726d73706f7274616c2f6e7a6d79634265776a66784b4462657054446c542e676966)

![Mind](https://camo.githubusercontent.com/e8b06c0b19b5e60888d7ff1be0d930446c73d786/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f726d73706f7274616c2f5756716e62674a6d616d6461686241754470424c2e676966)

## Installation

### npm

```
npm i gg-editor
```

### umd

```
<script src="https://unpkg.com/gg-editor@${version}/dist/bundle.js"></script>
```

## Usage

### Flow

```jsx
import GGEditor, { Flow } from 'gg-editor';

const data = {
  nodes: [],
  edges: [],
};

<GGEditor>
  <Flow data={data} />
</GGEditor>
```

### Mind

```jsx
import GGEditor, { Mind } from 'gg-editor';

const data = {
  roots: [{
    label: '',
    children: [{
      label: '',
    }],
  }],
};

<GGEditor>
  <Mind data={data} />
</GGEditor>
```

## Documentation

* [API](/docs/README.md#api)