import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { IReducerStore } from 'store/reducers';

const useTypedSelector: TypedUseSelectorHook<IReducerStore> = useSelector;

export default useTypedSelector;
