---
title: 快速上手
group:
  title: 指南
  order: 0
nav:
  title: 指南
---

## 安装

### npm

```bash | pure
npm install gg-editor --save
```

### umd

```html | pure
<script src="https://unpkg.com/gg-editor@${version}/dist/index.js"></script>
```

## 使用

### 流程图

[![Edit GGEditor - Flow](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/ggeditor-flow-hq64m?fontsize=14&hidenavigation=1&theme=dark)

```jsx | pure
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

```jsx | pure
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

## 示例

```bash | pure
# 克隆仓库
$ git clone https://github.com/alibaba/GGEditor.git

# 切换目录
$ cd gg-editor

# 安装依赖
$ npm install

# 运行示例
$ npm doc:start
```
