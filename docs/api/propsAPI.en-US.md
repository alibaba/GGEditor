# Props API

## Usage

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

If the component has been decorated by `withPropsAPI` then it has `propsAPI` property. `propsAPI` provides some APIs as follows:

| Attribute | Description | Type |
| :--- | :--- | :--- |
| read | A function to read data. | `function(data)` |
| save | A function to save data. | `function() => object` |
| add | A function to add a new item. | `function(type, model)` |
| find | A function to find the item. | `function(id)` |
| update | A function to update the item. | `function(item, model)` |
| remove | A function to delete the item. | `function(item)` |
| getSelected | A function to get the currently selected item. | `function` |
