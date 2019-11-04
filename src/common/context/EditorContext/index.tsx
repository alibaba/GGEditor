import React from 'react';
import { Graph } from '@/common/interfaces';

export interface EditorContextProps {
  graph: Graph | null;
  executeCommand: (name: string, params?: object) => void;
}

const EditorContext = React.createContext({} as EditorContextProps);

export const withEditorContext = function<P extends EditorContextProps>(WrappedComponent: React.ComponentClass<P>) {
  type WrappedComponentInstance = InstanceType<typeof WrappedComponent>;
  type WrappedComponentProps = Omit<P, keyof EditorContextProps>;
  type WrappedComponentPropsWithForwardRef = WrappedComponentProps & {
    forwardRef: React.Ref<WrappedComponentInstance>;
  };

  const InjectEditorContext: React.FC<WrappedComponentPropsWithForwardRef> = props => {
    const { forwardRef, ...rest } = props;

    return (
      <EditorContext.Consumer>
        {context => <WrappedComponent ref={forwardRef} {...(rest as any)} {...context} />}
      </EditorContext.Consumer>
    );
  };

  return React.forwardRef<WrappedComponentInstance, WrappedComponentProps>((props, ref) => (
    <InjectEditorContext forwardRef={ref} {...props} />
  ));
};

export default EditorContext;
