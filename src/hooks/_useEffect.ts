import { DependencyList, useEffect } from 'react';

/* eslint no-underscore-dangle: 0 */
const _useEffect = (
  subscribe: () => void = () => {},
  deps: DependencyList = [],
  unsubscribe: () => void = () => {}
) =>
  useEffect(
    () => {
      subscribe();
      return () => unsubscribe();
    },
    // eslint-disable-next-line
    deps
  );

export default _useEffect;
