import { RequestStatusType } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type InitialStateType = {
  status: RequestStatusType;
  initialized: boolean;
};

const initialState: InitialStateType = {
  status: 'idle',
  initialized: true,
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setStatusAppAC(state, action: PayloadAction<RequestStatusType>) {
      state.status = action.payload;
    },
    changeInitializedStatusAC(state, action: PayloadAction<boolean>) {
      state.initialized = action.payload;
    },
  },
});

export const appReducer = slice.reducer;
export const { setStatusAppAC, changeInitializedStatusAC } = slice.actions;
