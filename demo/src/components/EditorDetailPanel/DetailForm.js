import React from 'react';
import { Card, Form, Input, Switch } from 'antd';
import { withEditorContext } from 'gg-editor';
import upperFirst from 'lodash/upperFirst';

const { Item } = Form;

const inlineFormItemLayout = {
  labelCol: {
    sm: { span: 8 },
  },
  wrapperCol: {
    sm: { span: 16 },
  },
};

class DetailForm extends React.Component {
  handleSubmit = e => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const { form, executeCommand } = this.props;

    setTimeout(() => {
      form.validateFieldsAndScroll((err, values) => {
        if (err) {
          return;
        }

        const { id } = this.props.nodes[0].getModel();

        const errorTip = values.error
          ? {
              tooltip: {
                icon: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678069-sign-error-128.png',
                tip: '用户强制其错误',
              },
            }
          : {};

        executeCommand('update', {
          id,
          updateModel: {
            ...values,
            ...errorTip,
          },
        });
      });
    }, 0);
  };

  renderNodeDetail = () => {
    const { form } = this.props;

    return (
      <>
        <Item label="Label" {...inlineFormItemLayout}>
          {form.getFieldDecorator('label')(<Input onBlur={this.handleSubmit} />)}
        </Item>
        <Item label="mock错误" {...inlineFormItemLayout}>
          {form.getFieldDecorator('error')(<Switch onChange={this.handleSubmit} />)}
        </Item>
      </>
    );
  };

  render() {
    const { type } = this.props;

    return (
      <Card type="inner" size="small" title={upperFirst(type)} bordered={false}>
        <Form onSubmit={this.handleSubmit}>{this.renderNodeDetail()}</Form>
      </Card>
    );
  }
}

export default Form.create({
  mapPropsToFields(props) {
    const { nodes } = props;
    const { label } = nodes.length ? nodes[0].getModel() : {};

    return {
      label: Form.createFormField({
        value: label,
      }),
    };
  },
})(withEditorContext(DetailForm));
