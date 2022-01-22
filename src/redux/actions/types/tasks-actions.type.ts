import { AddTodolistActionType, RemoveTodolistActionType } from './todolists-actions.type';

export enum TasksActionsType {
  REMOVE_TASK = 'REMOVE-TASK',
  ADD_TASK = 'ADD-TASK',
  CHANGE_STATUS = 'CHANGE-STATUS',
  CHANGE_TASK_TEXT = 'CHANGE-TASK-TEXT',
}

export type AddTaskActionType = {
  type: TasksActionsType.ADD_TASK;
  payload: { inputValue: string; todolistId: string };
};

export type RemoveTaskActionType = {
  type: TasksActionsType.REMOVE_TASK;
  payload: { taskId: string; todolistId: string };
};

export type changeStatusActionType = {
  type: TasksActionsType.CHANGE_STATUS;
  payload: { taskId: string; status: boolean; todolistId: string };
};

export type changeTaskTextActionType = {
  type: TasksActionsType.CHANGE_TASK_TEXT;
  payload: { taskId: string; newValue: string; todolistId: string };
};

export type TasksActionType =
  | RemoveTaskActionType
  | AddTaskActionType
  | changeStatusActionType
  | changeTaskTextActionType
  | AddTodolistActionType
  | RemoveTodolistActionType;
