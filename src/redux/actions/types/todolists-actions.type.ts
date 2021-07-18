import { FilterType } from '../../../types';

export const REMOVE_TODOLIST = 'REMOVE-TODOLIST';
export const ADD_TODOLIST = 'ADD-TODOLIST';
export const CHANGE_TODOLIST_TITLE = 'CHANGE-TODOLIST-TITLE';
export const CHANGE_TODOLIST_FILTER = 'CHANGE-TODOLIST-FILTER';

export type RemoveTodolistActionType = {
  type: typeof REMOVE_TODOLIST;
  payload: string;
};

export type AddTodolistActionType = {
  type: typeof ADD_TODOLIST;
  payload: string;
};

export type ChangeTodolistTitleActionType = {
  type: typeof CHANGE_TODOLIST_TITLE;
  payload: { id: string; title: string };
};

export type ChangeTodolistFilterActionType = {
  type: typeof CHANGE_TODOLIST_FILTER;
  payload: { id: string; filter: FilterType };
};

export type TodolistsActionType =
  | RemoveTodolistActionType
  | AddTodolistActionType
  | ChangeTodolistTitleActionType
  | ChangeTodolistFilterActionType;
