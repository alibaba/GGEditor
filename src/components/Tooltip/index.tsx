import React from 'react';
import pick from 'lodash/pick';
import { EditorPrivateContextProps, withEditorPrivateContext } from '@common/context/EditorPrivateContext';

interface TooltipProps extends EditorPrivateContextProps {}

class Tooltip extends React.Component<TooltipProps> {
  componentDidMount(): void {}

  getTooltipStyle = () => {
    const { tooltipState } = this.props;

    return {
      position: 'fixed',
      minWidth: '50px',
      minHeight: '10px',
      left: `${tooltipState.clientX + 5}px`,
      top: `${tooltipState.clientY}px`,
      display: tooltipState.visible ? 'block' : 'none',
      padding: '2px',
      border: 'solid 1px #ccc',
      backgroundColor: '#fff',
    };
  };

  render() {
    const { children, tooltipState } = this.props;

    return (
      <div {...pick(this.props, ['style', 'className'])} style={this.getTooltipStyle()}>
        {tooltipState.text}
      </div>
    );
  }
}

export default withEditorPrivateContext<TooltipProps>(Tooltip);
