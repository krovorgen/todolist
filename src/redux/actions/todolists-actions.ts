import { FilterType } from '../../types';
import {
  AddTodolistActionType,
  ChangeTodolistFilterActionType,
  ChangeTodolistTitleActionType,
  RemoveTodolistActionType,
  SetTodolistActionType,
  TodolistsActionsType,
} from './types/todolists-actions.type';
import { TodolistType } from '../../api';

export const setTodolistAC = (todolist: TodolistType[]): SetTodolistActionType => ({
  type: TodolistsActionsType.SET_TODOLISTS,
  payload: todolist,
});

export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => ({
  type: TodolistsActionsType.REMOVE_TODOLIST,
  payload: todolistId,
});

export const addTodolistAC = (todolist: TodolistType): AddTodolistActionType => ({
  type: TodolistsActionsType.ADD_TODOLIST,
  payload: todolist,
});

export const changeTodolistTitleAC = (
  todolistID: string,
  newTodolistTitle: string
): ChangeTodolistTitleActionType => ({
  type: TodolistsActionsType.CHANGE_TODOLIST_TITLE,
  payload: {
    id: todolistID,
    title: newTodolistTitle,
  },
});

export const changeTodolistFilterAC = (
  todolistID: string,
  newFilter: FilterType
): ChangeTodolistFilterActionType => ({
  type: TodolistsActionsType.CHANGE_TODOLIST_FILTER,
  payload: {
    id: todolistID,
    filter: newFilter,
  },
});
