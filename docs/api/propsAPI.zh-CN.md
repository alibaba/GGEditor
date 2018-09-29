# Props API

## 使用说明

```jsx
import { withPropsAPI } from 'gg-editor';

class Component extends React.Component {
  componentDidMount() {
    const { propsAPI } = this.props;

    console.log(propsAPI);
  }
}

export default withPropsAPI(Component);
```

## API

经过 `withPropsAPI` 包装的组件将会自带 `propsAPI` 属性，`propsAPI` 提供的 API 如下：

| 属性 | 说明 | 类型 |
| :--- | :--- | :--- |
| executeCommand | 执行命令 | `function(command)` |
| read | 读取数据 | `function(data)` |
| save | 保存数据 | `function() => object` |
| add | 添加图项 | `function(type, model)` |
| find | 查找图项 | `function(id)` |
| update | 更新图项 | `function(item, model)` |
| remove | 删除图项 | `function(item)` |
| getSelected | 获取当前选中图项 | `function` |
