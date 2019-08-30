import React, { useState } from 'react';
import { withEditorContext } from 'gg-editor';
import { Form, Input, Card } from 'antd';
import upperFirst from 'lodash/upperFirst';
const { TextArea } = Input;
export default withEditorContext(props => {
  const { nodes, edges, executeCommand, type } = props;
  const node = nodes[0];
  const edge = edges[0];
  if (!node && !edge) return;
  const model = node ? node.getModel() : edge.getModel();
  const [state, setState] = useState(model);
  const { label, id, data = '' } = state;
  const { Item } = Form;
  const handleChange = (key, value) => {
    model[key] = value;
    setState({ ...model });
    executeCommand('update', { id, updateModel: { ...model } });
  };
  return (
    <Card type="inner" size="small" title={upperFirst(type)} bordered={false}>
      <Form>
        <Item label="Node ID">
          <Input disabled value={id}></Input>
        </Item>
        <Item label="Label">
          <Input onChange={({ target: { value } }) => handleChange('label', value)} value={label}></Input>
        </Item>
        <Item label="Data">
          <TextArea
            value={data}
            onChange={({ target: { value } }) => handleChange('data', value)}
            placeholder="data"
            autosize={{ minRows: 3 }}
          />
        </Item>
      </Form>
    </Card>
  );
});
