import * as React from 'react';

type RemoveScrollDOMProps = React.ComponentProps<'div'>;
type RemoveScrollOwnProps = {};
type RemoveScrollProps = RemoveScrollDOMProps & RemoveScrollOwnProps;

const RemoveScroll = React.forwardRef<HTMLDivElement, RemoveScrollProps>(function RemoveScroll(
  props,
  forwardedRef
) {
  return <div ref={forwardedRef} />;
});

RemoveScroll.displayName = 'RemoveScroll';

export { RemoveScroll };
export type { RemoveScrollProps };
