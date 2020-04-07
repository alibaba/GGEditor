import React from 'react';
import { withEditorContext } from '@/index';
import { EditorContextProps } from '@/components/EditorContext';

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
