import React from 'react';
import pick from 'lodash/pick';
import { EditorPrivateContextProps, withEditorPrivateContext } from '../../common/context/EditorPrivateContext';
import Menu from './Menu';

interface ContextMenuProps extends EditorPrivateContextProps {}

class ContextMenu extends React.Component<ContextMenuProps> {
  componentDidMount(): void {}

  getContextMenuStyle = () => {
    const { contextMenuState } = this.props;

    return {
      position: 'absolute',
      minWidth: '50px',
      minHeight: '10px',
      left: `${contextMenuState.clientX}px`,
      top: `${contextMenuState.clientY}px`,
      display: contextMenuState.visible ? 'block' : 'none',
    };
  };

  render() {
    const { children } = this.props;

    return (
      <div {...pick(this.props, ['style', 'className'])} style={this.getContextMenuStyle()}>
        {children}
      </div>
    );
  }
}

export const NodeMenu = Menu.create('node');
export const EdgeMenu = Menu.create('edge');
export const GroupMenu = Menu.create('group');
export const MultiMenu = Menu.create('multi');
export const CanvasMenu = Menu.create('canvas');

export default withEditorPrivateContext<ContextMenuProps>(ContextMenu);
