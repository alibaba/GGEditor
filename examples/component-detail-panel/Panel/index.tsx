import React from 'react';
import upperFirst from 'lodash/upperFirst';
import { Card, Form, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { DetailPanel, withEditorContext } from '@/index';
import { EditorContextProps } from '@/components/EditorContext';
import { DetailPanelComponentProps } from '@/components/DetailPanel';

const { Item } = Form;

const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};

interface PanelProps extends FormComponentProps, EditorContextProps, DetailPanelComponentProps {}

interface PanelState {}

class Panel extends React.Component<PanelProps, PanelState> {
  handleSubmit = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const { form } = this.props;

    form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return;
      }

      const { type, nodes, edges, executeCommand } = this.props;

      const item = type === 'node' ? nodes[0] : edges[0];

      if (!item) {
        return;
      }

      executeCommand('update', {
        id: item.get('id'),
        updateModel: {
          ...values,
        },
      });
    });
  };

  renderNodeDetail = () => {
    const { form } = this.props;

    return (
      <Form>
        <Item label="Label" {...formItemLayout}>
          {form.getFieldDecorator('label', {
            initialValue: '',
          })(<Input onBlur={this.handleSubmit} />)}
        </Item>
      </Form>
    );
  };

  renderEdgeDetail = () => {
    const { form } = this.props;

    return (
      <Form>
        <Item label="Label" {...formItemLayout}>
          {form.getFieldDecorator('label', {
            initialValue: '',
          })(<Input onBlur={this.handleSubmit} />)}
        </Item>
      </Form>
    );
  };

  renderMultiDetail = () => {
    return null;
  };

  renderCanvasDetail = () => {
    return <p>Select a node or edge :)</p>;
  };

  render() {
    const { type } = this.props;

    return (
      <Card title={upperFirst(type)} bordered={false}>
        {type === 'node' && this.renderNodeDetail()}
        {type === 'edge' && this.renderEdgeDetail()}
        {type === 'multi' && this.renderMultiDetail()}
        {type === 'canvas' && this.renderCanvasDetail()}
      </Card>
    );
  }
}

const WrappedPanel = Form.create<PanelProps>({
  mapPropsToFields(props) {
    const { type, nodes, edges } = props;

    let label = '';

    if (type === 'node') {
      label = nodes[0].getModel().label;
    }

    if (type === 'edge') {
      label = edges[0].getModel().label;
    }

    return {
      label: Form.createFormField({
        value: label,
      }),
    };
  },
})(withEditorContext(Panel));

type WrappedPanelProps = Omit<PanelProps, keyof FormComponentProps>;

export const NodePanel = DetailPanel.create<WrappedPanelProps>('node')(WrappedPanel);
export const EdgePanel = DetailPanel.create<WrappedPanelProps>('edge')(WrappedPanel);
export const MultiPanel = DetailPanel.create<WrappedPanelProps>('multi')(WrappedPanel);
export const CanvasPanel = DetailPanel.create<WrappedPanelProps>('canvas')(WrappedPanel);
