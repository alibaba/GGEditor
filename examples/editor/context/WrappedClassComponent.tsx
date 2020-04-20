import React from 'react';
import { withEditorContext } from 'gg-editor';
import { EditorContextProps } from 'gg-editor/lib/components/EditorContext';

interface WrappedClassComponentProps extends EditorContextProps {}

class WrappedClassComponent extends React.Component<WrappedClassComponentProps> {
  componentDidMount() {
    console.log('wrappedClassComponentProps:', this.props);
  }

  render() {
    return <div />;
  }
}

export default withEditorContext<WrappedClassComponentProps, WrappedClassComponent>(WrappedClassComponent);
