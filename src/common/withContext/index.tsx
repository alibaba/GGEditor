import React from 'react';

export default function<CP>(Context: React.Context<CP>, shouldRender: (context: CP) => boolean = () => true) {
  return function<P extends CP, T>(WrappedComponent: React.ComponentType<P>) {
    type WrappedComponentProps = Omit<React.PropsWithChildren<P>, keyof CP>;
    type WrappedComponentPropsWithForwardRef = WrappedComponentProps & {
      forwardRef: React.Ref<T>;
    };

    const InjectContext: React.FC<WrappedComponentPropsWithForwardRef> = props => {
      const { forwardRef, ...rest } = props;

      return (
        <Context.Consumer>
          {context =>
            shouldRender(context) ? (
              <WrappedComponent ref={forwardRef} forwardRef={forwardRef} {...(rest as any)} {...context} />
            ) : null
          }
        </Context.Consumer>
      );
    };

    return React.forwardRef<T, WrappedComponentProps>((props, ref) => <InjectContext forwardRef={ref} {...props} />);
  };
}
