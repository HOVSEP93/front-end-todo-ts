/* A React component that takes in an array of components and renders them in reverse order. */
import React, { FC, ReactNode } from 'react';

interface IComposeContext {
  components?: FC<{ children?: ReactNode }>[];
  children?: ReactNode | undefined;
}

export default function ComposeContext(props: IComposeContext) {
  const { components = [], children } = props;

  return (
    <>
      {/* Using the reduceRight array method to iteratively combine the components in the components
      prop, starting from the rightmost component and working towards the left. It does this by
      using the Comp component as a wrapper for the accumulated value, acc, and passing acc as the
      children prop for Comp.  */}
      {components.reduceRight((acc, Comp: any) => {
        return <Comp>{acc}</Comp>;
      }, children)}
    </>
  );
}

// This is a component that allows you to compose multiple components together and render them in reverse order. It takes in an components prop, which is an array of functional components, and a children prop, which can be any React elements.

// The component uses the reduceRight array method to iteratively combine the components in the components prop, starting from the rightmost component and working towards the left. It does this by using the Comp component as a wrapper for the accumulated value, acc, and passing acc as the children prop for Comp.

// Finally, the composed component tree is returned within a <>...</> fragment, which allows multiple components to be returned without adding an extra DOM node.
