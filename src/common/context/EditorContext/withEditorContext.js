import React from 'react';
import EditorContext from '@common/context/EditorContext';

export default function (WrappedComponent) {
  class InjectEditorContext extends React.Component {
    render() {
      const { forwardRef, ...rest } = this.props;

      return (
        <EditorContext.Consumer>
          {context => <WrappedComponent ref={forwardRef} editor={context} {...rest} />}
        </EditorContext.Consumer>
      );
    }
  }

  return React.forwardRef((props, ref) => <InjectEditorContext {...props} forwardRef={ref} />);
}
