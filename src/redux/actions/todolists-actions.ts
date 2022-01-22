import { FilterType } from '../../types';
import {
  AddTodolistActionType,
  RemoveTodolistActionType,
  ChangeTodolistFilterActionType,
  ChangeTodolistTitleActionType,
  TodolistsActionsType,
} from './types/todolists-actions.type';
import { v1 } from 'uuid';

export const removeTodolistAC = (todolistId: string): RemoveTodolistActionType => ({
  type: TodolistsActionsType.REMOVE_TODOLIST,
  payload: todolistId,
});

export const addTodolistAC = (newTodolistTitle: string): AddTodolistActionType => ({
  type: TodolistsActionsType.ADD_TODOLIST,
  payload: { newTodolistTitle, todolistID: v1() },
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
