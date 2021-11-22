import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRootState } from '../root-reducer';

export interface ICounterState {
  value: number;
}

const initialState: ICounterState = {
  value: 0,
};

export const invokeDoubleApi = createAsyncThunk('counter/double', async (data: unknown, { getState }) => {
  const state = getState() as { counter: ICounterState };

  // TODO: call api

  return state.counter.value * 2;
});

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: {
      prepare(payload: number) {
        return { payload: payload > 0 ? payload : payload * -1 };
      },
      reducer(state, action: PayloadAction<number>) {
        state.value += action.payload;
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(invokeDoubleApi.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

// Selectors
export const selectValue = (state: IRootState): number => state.counter.value;

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
