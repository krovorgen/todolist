import {
  addTodolistAC,
  changeTodolistFilterAC,
  changeTodolistTitleAC,
  removeTodolistAC,
  setTodolistAC,
} from '../todolists-actions';

export enum TodolistsActionsType {
  SET_TODOLISTS = 'SET_TODOLISTS',
  ADD_TODOLIST = 'ADD_TODOLIST',
  REMOVE_TODOLIST = 'REMOVE_TODOLIST',
  CHANGE_TODOLIST_FILTER = 'CHANGE_TODOLIST_FILTER',
  CHANGE_TODOLIST_TITLE = 'CHANGE_TODOLIST_TITLE',
}

export type TodolistsActionType =
  | ReturnType<typeof setTodolistAC>
  | ReturnType<typeof removeTodolistAC>
  | ReturnType<typeof addTodolistAC>
  | ReturnType<typeof changeTodolistTitleAC>
  | ReturnType<typeof changeTodolistFilterAC>;
