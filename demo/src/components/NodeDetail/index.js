import React from 'react';
import { Card, Form, Input } from 'antd';

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
    const { form, items, updateItem } = this.props;

    form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return;
      }

      updateItem(items[0], {
        ...values,
      });
    });
  }

  render() {
    const { form, items } = this.props;
    const { getFieldDecorator } = form;

    const item = items[0];

    if (!item) {
      return null;
    }

    const { label } = item.getModel();

    return (
      <Card type="inner" title="节点属性" bordered={false}>
        <Form onSubmit={this.handleSubmit}>
          <Item
            label="label"
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

export default Form.create()(NodeDetail);
