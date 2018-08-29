# RegisterBehaviour

To register a behaviour.

## Usage

> G6 [Custom Interaction (Chinese)](https://antv.alipay.com/zh-cn/g6/1.x/tutorial/custom-interaction.html) Tutorial

```jsx
import GGEditor, { Flow, RegisterBehaviour } from 'gg-editor';

<GGEditor>
  <Flow />
  <RegisterBehaviour name={...} behaviour={...} dependences={...} />
</GGEditor>
```

## API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| name | The name of a behaviour. | `string` | - |
| behaviour | To configurate a behaviour. | `function(page)` | - |
| dependences | To extend a behaviour or more. | `string[]` | - |
