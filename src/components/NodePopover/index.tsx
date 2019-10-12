import React from 'react';
import pick from 'lodash/pick';
import { EditorPrivateContextProps, withEditorPrivateContext } from '@common/context/EditorPrivateContext';

interface NodePopoverProps extends EditorPrivateContextProps {}

class NodePopover extends React.Component<NodePopoverProps> {
  componentDidMount(): void {}

  getPopoverStyle = () => {
    const { nodePopoverState } = this.props;

    return {
      position: 'fixed',
      minWidth: '50px',
      minHeight: '10px',
      left: `${nodePopoverState.x}px`,
      top: `${nodePopoverState.y}px`,
      display: nodePopoverState.visible ? 'block' : 'none',
      padding: '2px',
      border: 'solid 1px #ccc',
      backgroundColor: '#fff',
    };
  };

  render() {
    const { children, nodePopoverState } = this.props;

    return (
      <div {...pick(this.props, ['style', 'className'])} style={this.getPopoverStyle()}>
        {nodePopoverState.text}
      </div>
    );
  }
}

export default withEditorPrivateContext<NodePopoverProps>(NodePopover);
