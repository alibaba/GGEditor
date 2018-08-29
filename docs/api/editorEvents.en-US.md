# Editor Events

## SyntheticEvent

```jsx
import GGEditor, { Flow } from 'gg-editor';

<GGEditor
  onBeforeCommandExecute={({ command }) => {
    console.log('command', command);
  }}
>
  <Flow />
</GGEditor>
```

## Event List

| Event Name | Description |
| :--- | :--- |
| onBeforeCommandExecute | A function is called before executing the command. |
| onAfterCommandExecute | A function is called after executing the command. |

## Commands

| Command Property | Description | Type |
| :--- | :--- | :--- |
| name | The name of the command. | `string` |
| queue | It returns `true` or `false` to indicate whether the command entered the command queue. Entering the command queue to perform the undo and redo commands. | `boolean` |
