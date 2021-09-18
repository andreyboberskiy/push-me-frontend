import { useCallback, useState } from 'react';

const useFlagManager = (initialState: boolean = false) => {
  const [state, setState] = useState(initialState);

  const turnIn = useCallback(() => setState(true), []);
  const turnOff = useCallback(() => setState(false), []);
  const toggle = useCallback(() => setState((flag) => !flag), []);
  const set = useCallback((value) => setState(value), []);

  return { state, turnIn, turnOff, toggle, set };
};

export default useFlagManager;
