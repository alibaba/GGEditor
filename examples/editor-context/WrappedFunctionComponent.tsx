import React from 'react';
import { withEditorContext } from '@/index';
import { EditorContextProps } from '@/components/EditorContext';

interface WrappedFunctionComponentProps extends EditorContextProps<HTMLDivElement> {}

const WrappedFunctionComponent: React.FC<WrappedFunctionComponentProps> = props => {
  console.log('wrappedFunctionComponentProps:', props);

  return <div ref={props.forwardRef} />;
};

export default withEditorContext<WrappedFunctionComponentProps, HTMLDivElement>(WrappedFunctionComponent);
