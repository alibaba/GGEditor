# RegisterCommand

注册命令

## 使用说明

```jsx
import GGEditor, { Flow, RegisterCommand } from 'gg-editor';

<GGEditor>
  <Flow />
  <RegisterCommand name={...} config={...} extend={...} />
</GGEditor>
```

## API

| 属性 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| name | 命令名称 | `string` | - |
| config | 命令配置 | `object` | - |
| extend | 继承命令，[内置命令](./command.zh-CN.md#内置命令) | `string` | - |
