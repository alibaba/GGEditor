[English](README.en-US.md) | 简体中文

<h1 align="center">GGEditor</h1>

<div align="center">

基于 [G6](https://github.com/antvis/g6) 和 [React](https://github.com/facebook/react) 的可视化图编辑器

[![GitHub](https://img.shields.io/github/license/alibaba/GGEditor)](LICENSE)
[![npm](https://img.shields.io/npm/v/gg-editor)](https://www.npmjs.com/package/gg-editor)
[![npm](https://img.shields.io/npm/dm/gg-editor)](https://www.npmjs.com/package/gg-editor)

</div>

## 安装

### npm

```sh
npm install gg-editor --save
```

### umd

```html
<script src="https://unpkg.com/gg-editor@${version}/dist/index.js"></script>
```

## 使用

### 流程图

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
  <Flow style={{ width: 500, height: 500 }} data={data} />
</GGEditor>;
```

### 脑图

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
  <Mind style={{ width: 500, height: 500 }} data={data} />
</GGEditor>;
```

## 文档

- [API 文档](https://www.yuque.com/ggeditor/api)

## 示例

```sh
# 克隆仓库
$ git clone https://github.com/alibaba/GGEditor.git

# 切换目录
$ cd gg-editor

# 安装依赖
$ npm install

# 运行示例
$ npm start
```

| 类型 | 示例                   | 源码                                      |
| :--- | :--------------------- | :---------------------------------------- |
| 图表 | flow                   | [source](examples/flow)                   |
| 图表 | mind                   | [source](examples/mind)                   |
| 组件 | component-command      | [source](examples/component-command)      |
| 组件 | component-item-panel   | [source](examples/component-item-panel)   |
| 组件 | component-detail-panel | [source](examples/component-detail-panel) |
| 插件 | plugin-editable-label  | [source](examples/plugin-editable-label)  |
| 插件 | plugin-item-popover    | [source](examples/plugin-item-popover)    |
| 插件 | plugin-context-menu    | [source](examples/plugin-context-menu)    |
