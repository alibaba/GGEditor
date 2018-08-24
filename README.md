# gg-editor

![language](https://img.shields.io/badge/language-react-red.svg) [![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/gaoli/gg-editor/blob/master/LICENSE) 
[![npm version](https://img.shields.io/npm/v/gg-editor.svg)](https://www.npmjs.com/package/gg-editor) 
[![npm downloads](https://img.shields.io/npm/dm/gg-editor.svg)](https://www.npmjs.com/package/gg-editor)

A visual graph editor based G6 and React

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

```jsx
import GGEditor, { Flow, Mind } from 'gg-editor';

// Flow
<GGEditor>
  <Flow defaultData={...} />
</GGEditor>

// Mind
<GGEditor>
  <Mind defaultData={...} />
</GGEditor>
```