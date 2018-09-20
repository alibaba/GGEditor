import React from 'react';
import { Card, Form, Input } from 'antd';
import GGEditor from '@src';

const { Item } = Form;

const inlineFormItemLayout = {
  labelCol: {
    sm: { span: 6 },
  },
  wrapperCol: {
    sm: { span: 18 },
  },
};

class NodeDetail extends React.Component {
  handleSubmit = () => {
    const { form, propsAPI } = this.props;
    const { getSelected, update } = propsAPI;

    form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return;
      }

      const item = getSelected()[0];

      if (!item) {
        return;
      }

      update(item, {
        ...values,
      });
    });
  }

  render() {
    const { form, propsAPI } = this.props;
    const { getFieldDecorator } = form;
    const { getSelected } = propsAPI;

    const item = getSelected()[0];

    if (!item) {
      return null;
    }

    const { label } = item.getModel();

    return (
      <Card type="inner" title="节点属性" bordered={false}>
        <Form onSubmit={this.handleSubmit}>
          <Item
            label="标签"
            {...inlineFormItemLayout}
          >
            {
              getFieldDecorator('label', {
                initialValue: label,
              })(<Input onBlur={this.handleSubmit} />)
            }
          </Item>
        </Form>
      </Card>
    );
  }
}

export default Form.create()(GGEditor.withPropsAPI(NodeDetail));
