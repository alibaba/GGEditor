import React from 'react';
import { GraphState } from '@/common/constants';

export interface EditorPrivateContextProps {
  graph: G6.Graph | null;
  graphState: GraphState;
  setGraph: (graph: G6.Graph) => void;
  setGraphState: (graphState: GraphState) => void;
  executeCommand: (name: string, params?: object) => void;
  canExecuteCommand: (name: string) => boolean;
}

const EditorPrivateContext = React.createContext({} as EditorPrivateContextProps);

export const withEditorPrivateContext = function<P extends EditorPrivateContextProps>(
  WrappedComponent: React.ComponentClass<P>,
) {
  type WrappedComponentInstance = InstanceType<typeof WrappedComponent>;
  type WrappedComponentProps = Omit<P, keyof EditorPrivateContextProps>;
  type WrappedComponentPropsWithForwardRef = WrappedComponentProps & {
    forwardRef: React.Ref<WrappedComponentInstance>;
  };

  const InjectEditorContext: React.FC<WrappedComponentPropsWithForwardRef> = props => {
    const { forwardRef, ...rest } = props;

    return (
      <EditorPrivateContext.Consumer>
        {context => <WrappedComponent ref={forwardRef} {...(rest as any)} {...context} />}
      </EditorPrivateContext.Consumer>
    );
  };

  return React.forwardRef<WrappedComponentInstance, WrappedComponentProps>((props, ref) => (
    <InjectEditorContext forwardRef={ref} {...props} />
  ));
};

export default EditorPrivateContext;
