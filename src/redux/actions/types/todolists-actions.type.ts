import { FilterType } from '../../../types';
import { TodolistType } from '../../../api';

export enum TodolistsActionsType {
  SET_TODOLISTS = 'SET_TODOLISTS',
  ADD_TODOLIST = 'ADD_TODOLIST',
  REMOVE_TODOLIST = 'REMOVE_TODOLIST',
  CHANGE_TODOLIST_FILTER = 'CHANGE_TODOLIST_FILTER',
  CHANGE_TODOLIST_TITLE = 'CHANGE_TODOLIST_TITLE',
}

export type SetTodolistActionType = {
  type: TodolistsActionsType.SET_TODOLISTS;
  payload: TodolistType[];
};

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
  | SetTodolistActionType
  | RemoveTodolistActionType
  | AddTodolistActionType
  | ChangeTodolistTitleActionType
  | ChangeTodolistFilterActionType;
