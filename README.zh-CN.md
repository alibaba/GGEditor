[English](README.md) | 简体中文

# GGEditor

![language](https://img.shields.io/badge/language-react-red.svg) [![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/gaoli/gg-editor/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/gg-editor.svg)](https://www.npmjs.com/package/gg-editor)
[![npm downloads](https://img.shields.io/npm/dm/gg-editor.svg)](https://www.npmjs.com/package/gg-editor)

基于 [G6](https://github.com/antvis/g6) 和 [React](https://github.com/facebook/react) 的可视化图编辑器

![Flow](https://camo.githubusercontent.com/20982b9b9043c92c8bbe337ae4d47d684d63d2c1/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f726d73706f7274616c2f6e7a6d79634265776a66784b4462657054446c542e676966)

![Mind](https://camo.githubusercontent.com/e8b06c0b19b5e60888d7ff1be0d930446c73d786/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f726d73706f7274616c2f5756716e62674a6d616d6461686241754470424c2e676966)

## 安装

### npm

```sh
npm install --save gg-editor
```

### umd

```html
<script src="https://unpkg.com/gg-editor@${version}/dist/bundle.js"></script>
```

## 快速开始

### 流程图

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

### 思维导图

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

## 文档

* [API](/docs/README.zh-CN.md#api)