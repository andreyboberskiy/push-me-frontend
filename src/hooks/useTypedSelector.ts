import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootReducer } from 'store/reducers';

const useTypedSelector: TypedUseSelectorHook<RootReducer> = useSelector;

export default useTypedSelector;
