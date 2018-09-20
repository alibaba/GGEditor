[English](README.md) | 简体中文

# GGEditor

![language](https://img.shields.io/badge/language-react-red.svg) [![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/gaoli/GGEditor/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/gg-editor.svg)](https://www.npmjs.com/package/gg-editor)
[![npm downloads](https://img.shields.io/npm/dm/gg-editor.svg)](https://www.npmjs.com/package/gg-editor)

基于 [G6](https://github.com/antvis/g6) 和 [React](https://github.com/facebook/react) 的可视化图编辑器

## 演示

[流程图](http://ggeditor.com/demo/#/flow)

[![Flow](https://camo.githubusercontent.com/20982b9b9043c92c8bbe337ae4d47d684d63d2c1/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f726d73706f7274616c2f6e7a6d79634265776a66784b4462657054446c542e676966)](http://ggeditor.com/demo/#/flow)

[思维导图](http://ggeditor.com/demo/#/mind)

[![Mind](https://camo.githubusercontent.com/e8b06c0b19b5e60888d7ff1be0d930446c73d786/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f726d73706f7274616c2f5756716e62674a6d616d6461686241754470424c2e676966)](http://ggeditor.com/demo/#/mind)

## 安装

### npm

```sh
npm install --save gg-editor
```

### umd

```html
<script src="https://unpkg.com/gg-editor@${version}/dist/bundle.js"></script>
```

### run demo

```sh
$ git clone https://github.com/gaoli/GGEditor.git
$ cd gg-editor
$ npm install
$ npm start
```

## 快速开始

### 流程图

```jsx
import GGEditor, { Flow } from 'gg-editor';

const data = {
  nodes: [{
    type: 'node',
    size: '70*70',
    shape: 'flow-circle',
    color: '#FA8C16',
    label: '起止节点',
    x: 55,
    y: 55,
    id: 'ea1184e8',
    index: 0,
  }, {
    type: 'node',
    size: '70*70',
    shape: 'flow-circle',
    color: '#FA8C16',
    label: '结束节点',
    x: 55,
    y: 255,
    id: '481fbb1a',
    index: 2,
  }],
  edges: [{
    source: 'ea1184e8',
    sourceAnchor: 2,
    target: '481fbb1a',
    targetAnchor: 0,
    id: '7989ac70',
    index: 1,
  }],
};

<GGEditor>
  <Flow style={{ width: 500, height: 500 }} data={data} />
</GGEditor>
```

### 思维导图

```jsx
import GGEditor, { Mind } from 'gg-editor';

const data = {
  roots: [{
    label: '中心主题',
    children: [{
      label: '分支主题 1',
    }, {
      label: '分支主题 2',
    }, {
      label: '分支主题 3',
    }],
  }],
};

<GGEditor>
  <Mind style={{ width: 500, height: 500 }} data={data} />
</GGEditor>
```

## 文档

* [API](/docs/README.zh-CN.md#api)

## 钉钉交流

[<img src="https://img.alicdn.com/tfs/TB1nfGMX3HqK1RjSZFEXXcGMXXa-1242-1602.jpg" alt="钉钉交流" width="200">](https://qr.dingtalk.com/action/joingroup?code=v1,k1,PSFRQbatttuFXEJhDNG1P4CMMUI1+sUDO5MZr3gjhqk=&_dt_no_comment=1&origin=11)