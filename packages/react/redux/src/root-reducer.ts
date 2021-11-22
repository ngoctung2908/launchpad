import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';

import counterSlice, { ICounterState } from './reducers/counter-slice';

const rootReducer = combineReducers({
  counter: counterSlice as Reducer<ICounterState, AnyAction>,
});

export type IRootState = ReturnType<typeof rootReducer>;
export default rootReducer;
