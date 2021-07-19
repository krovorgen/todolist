import { AddTodolistActionType, RemoveTodolistActionType } from './todolists-actions.type';

export const REMOVE_TASK = 'REMOVE-TASK';
export const ADD_TASK = 'ADD-TASK';
export const CHANGE_STATUS = 'CHANGE-STATUS';
export const CHANGE_TASK_TEXT = 'CHANGE-TASK-TEXT';

export type AddTaskActionType = {
  type: typeof ADD_TASK;
  payload: { inputValue: string; todolistID: string };
};

export type RemoveTaskActionType = {
  type: typeof REMOVE_TASK;
  payload: { id: string; todolistID: string };
};

export type changeStatusActionType = {
  type: typeof CHANGE_STATUS;
  payload: { id: string; status: boolean; todolistID: string };
};

export type changeTaskTextActionType = {
  type: typeof CHANGE_TASK_TEXT;
  payload: { id: string; newValue: string; todolistID: string };
};

export type TasksActionType =
  | RemoveTaskActionType
  | AddTaskActionType
  | changeStatusActionType
  | changeTaskTextActionType
  | AddTodolistActionType
  | RemoveTodolistActionType;
