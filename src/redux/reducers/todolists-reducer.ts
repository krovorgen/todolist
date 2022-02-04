import { FilterType, RequestStatusType, TodolistDataType } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodolistType } from '../../api';

const initialState: TodolistDataType[] = [];

const slice = createSlice({
  name: 'todolists',
  initialState,
  reducers: {
    setTodolistAC(state, action: PayloadAction<TodolistType[]>) {
      return action.payload.map((tl) => ({
        ...tl,
        filter: 'all',
        loadingStatus: 'idle',
      }));
    },
    removeTodolistAC(state, action: PayloadAction<string>) {
      const index = state.findIndex((tl) => tl.id === action.payload);
      if (index !== -1) state.splice(index, 1);
    },
    addTodolistAC(state, action: PayloadAction<TodolistType>) {
      state.push({
        ...action.payload,
        filter: 'all',
        loadingStatus: 'idle',
      });
    },
    changeTodolistTitleAC(state, action: PayloadAction<{ todolistId: string; title: string }>) {
      const index = state.findIndex((tl) => tl.id === action.payload.todolistId);
      if (index !== -1) state[index].title = action.payload.title;
    },
    changeTodolistLoadingAC(
      state,
      action: PayloadAction<{ todolistId: string; status: RequestStatusType }>
    ) {
      const index = state.findIndex((tl) => tl.id === action.payload.todolistId);
      if (index !== -1) state[index].loadingStatus = action.payload.status;
    },
    changeTodolistFilterAC(
      state,
      action: PayloadAction<{ todolistId: string; newFilter: FilterType }>
    ) {
      const index = state.findIndex((tl) => tl.id === action.payload.todolistId);
      if (index !== -1) state[index].filter = action.payload.newFilter;
    },
  },
});
export const todolistsReducer = slice.reducer;
export const {
  setTodolistAC,
  removeTodolistAC,
  addTodolistAC,
  changeTodolistTitleAC,
  changeTodolistLoadingAC,
  changeTodolistFilterAC,
} = slice.actions;
