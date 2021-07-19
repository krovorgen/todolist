import { FilterType } from '../../types';
import {
  ADD_TODOLIST,
  REMOVE_TODOLIST,
  CHANGE_TODOLIST_FILTER,
  CHANGE_TODOLIST_TITLE,
  AddTodolistActionType,
  RemoveTodolistActionType,
  ChangeTodolistFilterActionType,
  ChangeTodolistTitleActionType,
} from './types/todolists-actions.type';
import { v1 } from 'uuid';

export const RemoveTodolistAC = (todolistId: string): RemoveTodolistActionType => ({
  type: REMOVE_TODOLIST,
  payload: todolistId,
});

export const addTodolistAC = (newTodolistTitle: string): AddTodolistActionType => ({
  type: ADD_TODOLIST,
  payload: { newTodolistTitle: newTodolistTitle, todolistID: v1() },
});

export const changeTodolistTitleAC = (
  todolistID: string,
  newTodolistTitle: string
): ChangeTodolistTitleActionType => ({
  type: CHANGE_TODOLIST_TITLE,
  payload: {
    id: todolistID,
    title: newTodolistTitle,
  },
});

export const changeTodolistFilterAC = (
  todolistID: string,
  newFilter: FilterType
): ChangeTodolistFilterActionType => ({
  type: CHANGE_TODOLIST_FILTER,
  payload: {
    id: todolistID,
    filter: newFilter,
  },
});
