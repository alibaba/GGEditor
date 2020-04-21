import React from 'react';

export default function<CP>(Context: React.Context<CP>, shouldRender: (context: CP) => boolean = () => true) {
  return function<P extends CP, T = unknown>(WrappedComponent: React.ComponentType<P>) {
    type WrappedComponentProps = Omit<React.PropsWithChildren<P>, keyof CP>;
    type WrappedComponentPropsWithForwardRef = WrappedComponentProps & {
      forwardRef: React.Ref<T>;
    };

    const InjectContext: React.FC<WrappedComponentPropsWithForwardRef> = props => {
      const { forwardRef, ...rest } = props;

      let refProp = {};

      if (WrappedComponent.prototype.isReactComponent) {
        refProp = {
          ref: forwardRef,
        };
      } else {
        refProp = {
          forwardRef,
        };
      }

      return (
        <Context.Consumer>
          {context =>
            shouldRender(context) ? <WrappedComponent {...refProp} {...(rest as any)} {...context} /> : null
          }
        </Context.Consumer>
      );
    };

    return React.forwardRef<T, WrappedComponentProps>((props, ref) => <InjectContext forwardRef={ref} {...props} />);
  };
}
