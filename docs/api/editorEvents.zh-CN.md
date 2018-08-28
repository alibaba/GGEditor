# Editor Events

## 监听事件

```jsx
import GGEditor, { Flow } from 'gg-editor';

<GGEditor
  onBeforecommandexecute={({ command }) => {
    console.log('command', command);
  }}
>
  <Flow />
</GGEditor>
```

## 命令对象

| 命令属性 | 属性说明 |
| :--- | :--- |
| name | 命令名称 |
| queue | 是否进入命令队列，进入命令队列则可以执行撤销、重做 |

## 事件列表

| 事件名称 | 事件说明 |
| :--- | :--- |
| onBeforeCommandExecute | 命令执行前 |
| onBfterCommandExecute | 命令执行后 |