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

If the component has been decorated by `withPropsAPI` then it will have a `this.props.propsAPI`. The `propsAPI` provides the APIs as the following:

| Attribute | Description | Type |
| :--- | :--- | :--- |
| executeCommand | A function to execute the command. | `function(command)` |
| read | A function to read the data. | `function(data)` |
| save | A function to save the data. | `function() => object` |
| add | A function to add a new item. | `function(type, model)` |
| find | A function to find an item by its id. | `function(id)` |
| update | A function to update an item. | `function(item, model)` |
| remove | A function to delete an item. | `function(item)` |
| getSelected | A function to get the currently selected item. | `function` |
