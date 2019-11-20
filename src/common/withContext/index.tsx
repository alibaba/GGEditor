import React from 'react';

export default function<CP>(Context: React.Context<CP>, shouldRender: (context: CP) => boolean = () => true) {
  return function<P extends CP>(WrappedComponent: React.ComponentClass<P>) {
    type WrappedComponentInstance = InstanceType<typeof WrappedComponent>;
    type WrappedComponentProps = Omit<React.PropsWithChildren<P>, keyof CP>;
    type WrappedComponentPropsWithForwardRef = WrappedComponentProps & {
      forwardRef: React.Ref<WrappedComponentInstance>;
    };

    const InjectContext: React.FC<WrappedComponentPropsWithForwardRef> = props => {
      const { forwardRef, ...rest } = props;

      return (
        <Context.Consumer>
          {context =>
            shouldRender(context) ? <WrappedComponent ref={forwardRef} {...(rest as any)} {...context} /> : null
          }
        </Context.Consumer>
      );
    };

    return React.forwardRef<WrappedComponentInstance, WrappedComponentProps>((props, ref) => (
      <InjectContext forwardRef={ref} {...props} />
    ));
  };
}
