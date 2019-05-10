import React from 'react';
import { Card, Form, Input } from 'antd';
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
  constructor(props) {
    super(props);

    this.id = '';
  }

  get node() {
    const { graph } = this.props;

    return graph.findAllByState('node', 'selected')[0];
  }

  componentDidMount() {
    this.setLabelValue();
  }

  componentDidUpdate() {
    this.setLabelValue();
  }

  setLabelValue = () => {
    const { form } = this.props;
    const { id, label } = this.node.getModel();

    if (id !== this.id) {
      this.id = id;

      form.setFieldsValue({
        label,
      });
    }
  }

  handleSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const { form, executeCommand } = this.props;

    setTimeout(() => {
      form.validateFieldsAndScroll((err, values) => {
        if (err) {
          return;
        }

        const { id } = this.node.getModel();

        executeCommand('update', {
          id,
          updateModel: {
            ...values,
          },
        });
      });
    }, 0);
  };

  renderNodeDetail = () => {
    const { form } = this.props;

    return (
      <Item label="Label" {...inlineFormItemLayout}>
        {form.getFieldDecorator('label')(<Input onBlur={this.handleSubmit} />)}
      </Item>
    );
  };

  render() {
    const { type } = this.props;

    return (
      <Card type="inner" size="small" title={upperFirst(type)} bordered={false}>
        <Form onSubmit={this.handleSubmit}>
          {this.renderNodeDetail()}
        </Form>
      </Card>
    );
  }
}

export default Form.create()(withEditorContext(DetailForm));
