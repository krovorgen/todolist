import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isLogged: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedStatusAC(state, action: PayloadAction<boolean>) {
      state.isLogged = action.payload;
    },
  },
});

export const authReducer = slice.reducer;
export const { setLoggedStatusAC } = slice.actions;
