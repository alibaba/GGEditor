import React from 'react';
import { Card, Form, Input,InputNumber} from 'antd';

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
    const { form, getSelected, updateItem } = this.props;

    form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return;
      }

      const item = getSelected()[0];

      if (!item) {
        return;
      }

        values.size=`${values.width}*${values.height}`;

      updateItem(item, {
        ...values,
      });
    });
  }

  render() {
    const { form, getSelected } = this.props;
    const { getFieldDecorator } = form;

    const item = getSelected()[0];

    if (!item) {
      return null;
    }

    const { label,color,size } = item.getModel();

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

            <Item label={'尺寸'} {...inlineFormItemLayout}>
                {
                    getFieldDecorator('width',{
                        initialValue:size.split('*')[0],
                    })(<InputNumber onKeyUp={this.handleSubmit} onChange={this.handleSubmit}/>)
                }
                {
                    getFieldDecorator('height',{
                        initialValue:size.split('*')[1],
                    })(<InputNumber onKeyUp={this.handleSubmit} onChange={this.handleSubmit}/>)
                }
            </Item>
            <Item label={'颜色'} {...inlineFormItemLayout}>
                {
                    getFieldDecorator('color',{
                        initialValue:color
                    })(<Input type={'color'} onBlur={this.handleSubmit} size="small"/>)
                }
            </Item>
        </Form>
      </Card>
    );
  }
}

export default Form.create()(NodeDetail);
