import React from 'react';

export interface EditorContextProps {
  graph: G6.Graph | null;
  executeCommand: (name: string, params?: object) => void;
}

export interface EditorPrivateContextProps {
  setGraph: (graph: G6.Graph) => void;
}

export const EditorContext = React.createContext({} as EditorContextProps);
export const EditorPrivateContext = React.createContext({} as EditorPrivateContextProps);

export const withEditorContext = function<P extends EditorContextProps>(WrappedComponent: React.ComponentClass<P>) {
  type WrappedComponentInstance = InstanceType<typeof WrappedComponent>;
  type WrappedComponentProps = Omit<React.PropsWithChildren<P>, keyof EditorContextProps>;
  type WrappedComponentPropsWithForwardRef = WrappedComponentProps & {
    forwardRef: React.Ref<WrappedComponentInstance>;
  };

  const InjectEditorContext: React.FC<WrappedComponentPropsWithForwardRef> = props => {
    const { forwardRef, ...rest } = props;

    return (
      <EditorContext.Consumer>
        {context => (context.graph ? <WrappedComponent ref={forwardRef} {...(rest as any)} {...context} /> : null)}
      </EditorContext.Consumer>
    );
  };

  return React.forwardRef<WrappedComponentInstance, WrappedComponentProps>((props, ref) => (
    <InjectEditorContext forwardRef={ref} {...props} />
  ));
};

export const withEditorPrivateContext = function<P extends EditorPrivateContextProps>(
  WrappedComponent: React.ComponentClass<P>,
) {
  type WrappedComponentInstance = InstanceType<typeof WrappedComponent>;
  type WrappedComponentProps = Omit<React.PropsWithChildren<P>, keyof EditorPrivateContextProps>;
  type WrappedComponentPropsWithForwardRef = WrappedComponentProps & {
    forwardRef: React.Ref<WrappedComponentInstance>;
  };

  const InjectEditorPrivateContext: React.FC<WrappedComponentPropsWithForwardRef> = props => {
    const { forwardRef, ...rest } = props;

    return (
      <EditorPrivateContext.Consumer>
        {context => <WrappedComponent ref={forwardRef} {...(rest as any)} {...context} />}
      </EditorPrivateContext.Consumer>
    );
  };

  return React.forwardRef<WrappedComponentInstance, WrappedComponentProps>((props, ref) => (
    <InjectEditorPrivateContext forwardRef={ref} {...props} />
  ));
};
