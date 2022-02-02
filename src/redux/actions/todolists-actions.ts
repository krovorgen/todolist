import { FilterType, RequestStatusType } from '../../types';
import { TodolistType } from '../../api';

export enum TodolistsActionsType {
  SET_TODOLISTS = 'SET_TODOLISTS',
  ADD_TODOLIST = 'ADD_TODOLIST',
  REMOVE_TODOLIST = 'REMOVE_TODOLIST',
  CHANGE_TODOLIST_FILTER = 'CHANGE_TODOLIST_FILTER',
  CHANGE_TODOLIST_TITLE = 'CHANGE_TODOLIST_TITLE',
  CHANGE_TODOLIST_LOADING = 'CHANGE_TODOLIST_LOADING',
}

export type TodolistsActionType =
  | ReturnType<typeof setTodolistAC>
  | ReturnType<typeof removeTodolistAC>
  | ReturnType<typeof addTodolistAC>
  | ReturnType<typeof changeTodolistTitleAC>
  | ReturnType<typeof changeTodolistLoadingAC>
  | ReturnType<typeof changeTodolistFilterAC>;

export const setTodolistAC = (todolist: TodolistType[]) =>
  ({
    type: TodolistsActionsType.SET_TODOLISTS,
    payload: todolist,
  } as const);

export const removeTodolistAC = (todolistId: string) =>
  ({
    type: TodolistsActionsType.REMOVE_TODOLIST,
    payload: todolistId,
  } as const);

export const addTodolistAC = (todolist: TodolistType) =>
  ({
    type: TodolistsActionsType.ADD_TODOLIST,
    payload: todolist,
  } as const);

export const changeTodolistTitleAC = (todolistID: string, newTodolistTitle: string) =>
  ({
    type: TodolistsActionsType.CHANGE_TODOLIST_TITLE,
    payload: {
      id: todolistID,
      title: newTodolistTitle,
    },
  } as const);

export const changeTodolistFilterAC = (todolistID: string, newFilter: FilterType) =>
  ({
    type: TodolistsActionsType.CHANGE_TODOLIST_FILTER,
    payload: {
      id: todolistID,
      filter: newFilter,
    },
  } as const);

export const changeTodolistLoadingAC = (todolistID: string, status: RequestStatusType) =>
  ({
    type: TodolistsActionsType.CHANGE_TODOLIST_LOADING,
    payload: {
      id: todolistID,
      status,
    },
  } as const);
