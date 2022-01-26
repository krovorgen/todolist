import { FilterType } from '../../types';
import { TodolistsActionsType } from './types/todolists-actions.type';
import { TodolistType } from '../../api';

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
