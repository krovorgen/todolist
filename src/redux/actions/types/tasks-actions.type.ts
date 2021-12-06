import { AddTodolistActionType, RemoveTodolistActionType } from './todolists-actions.type';

export const REMOVE_TASK = 'REMOVE-TASK';
export const ADD_TASK = 'ADD-TASK';
export const CHANGE_STATUS = 'CHANGE-STATUS';
export const CHANGE_TASK_TEXT = 'CHANGE-TASK-TEXT';

export type AddTaskActionType = {
  type: typeof ADD_TASK;
  payload: { inputValue: string; todolistId: string };
};

export type RemoveTaskActionType = {
  type: typeof REMOVE_TASK;
  payload: { taskId: string; todolistId: string };
};

export type changeStatusActionType = {
  type: typeof CHANGE_STATUS;
  payload: { taskId: string; status: boolean; todolistId: string };
};

export type changeTaskTextActionType = {
  type: typeof CHANGE_TASK_TEXT;
  payload: { taskId: string; newValue: string; todolistId: string };
};

export type TasksActionType =
  | RemoveTaskActionType
  | AddTaskActionType
  | changeStatusActionType
  | changeTaskTextActionType
  | AddTodolistActionType
  | RemoveTodolistActionType;
