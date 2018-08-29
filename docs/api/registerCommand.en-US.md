# RegisterCommand

To register a command.

## Usage

```jsx
import GGEditor, { Flow, RegisterCommand } from 'gg-editor';

<GGEditor>
  <Flow />
  <RegisterCommand name={...} config={...} extend={...} />
</GGEditor>
```

## API

| Property | Description | Type | Default |
| :--- | :--- | :--- | :--- |
| name | The name of a command. | `string` | - |
| config | To configurate a command. | `object` | - |
| extend | To extend a command. See more on [Built-in Commands](./command.en-US.md#Built-in%20Commands). | `string` | - |
