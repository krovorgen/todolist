import { FilterType } from '../../../types';

export enum TodolistsActionsType {
  ADD_TODOLIST = 'ADD_TODOLIST',
  REMOVE_TODOLIST = 'REMOVE_TODOLIST',
  CHANGE_TODOLIST_FILTER = 'CHANGE_TODOLIST_FILTER',
  CHANGE_TODOLIST_TITLE = 'CHANGE_TODOLIST_TITLE',
}

export type RemoveTodolistActionType = {
  type: TodolistsActionsType.REMOVE_TODOLIST;
  payload: string;
};

export type AddTodolistActionType = {
  type: TodolistsActionsType.ADD_TODOLIST;
  payload: { newTodolistTitle: string; todolistID: string };
};

export type ChangeTodolistTitleActionType = {
  type: TodolistsActionsType.CHANGE_TODOLIST_TITLE;
  payload: { id: string; title: string };
};

export type ChangeTodolistFilterActionType = {
  type: TodolistsActionsType.CHANGE_TODOLIST_FILTER;
  payload: { id: string; filter: FilterType };
};

export type TodolistsActionType =
  | RemoveTodolistActionType
  | AddTodolistActionType
  | ChangeTodolistTitleActionType
  | ChangeTodolistFilterActionType;
