# RegisterGuide

To register a guide.

## Usage

> G6 [Custom Shape (Chinese)](https://antv.alipay.com/zh-cn/g6/1.x/tutorial/custom-shape.html) Tutorial

```jsx
import GGEditor, { Flow, RegisterGuide } from 'gg-editor';

<GGEditor>
  <Flow />
  <RegisterGuide name={...} config={...} extend={...} />
</GGEditor>
```

## API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| name | The name of a guide. | `string` | - |
| config | To configurate a guide. | `object` | - |
| extend | To extend a shape. | `string` | - |
