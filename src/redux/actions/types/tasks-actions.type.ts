import {
  AddTodolistActionType,
  RemoveTodolistActionType,
  SetTodolistActionType,
} from './todolists-actions.type';
import { TodolistTask } from '../../../api';

export enum TasksActionsType {
  REMOVE_TASK = 'REMOVE-TASK',
  ADD_TASK = 'ADD-TASK',
  SET_TASK = 'SET-TASK',
  CHANGE_STATUS = 'CHANGE-STATUS',
  CHANGE_TASK_TEXT = 'CHANGE-TASK-TEXT',
}

export enum TaskStatuses {
  New,
  InProgress,
  Completed,
  Draft,
}

export enum TaskPriorities {
  Low = 0,
  Middle = 1,
  Hi = 2,
  Urgently = 3,
  Later = 4,
}

export type AddTaskActionType = {
  type: TasksActionsType.ADD_TASK;
  payload: { task: TodolistTask };
};

export type SetTaskActionType = {
  type: TasksActionsType.SET_TASK;
  payload: { tasks: TodolistTask[]; todolistId: string };
};

export type RemoveTaskActionType = {
  type: TasksActionsType.REMOVE_TASK;
  payload: { taskId: string; todolistId: string };
};

export type changeStatusActionType = {
  type: TasksActionsType.CHANGE_STATUS;
  payload: { taskId: string; status: TaskStatuses; todolistId: string };
};

export type changeTaskTextActionType = {
  type: TasksActionsType.CHANGE_TASK_TEXT;
  payload: { taskId: string; newValue: string; todolistId: string };
};

export type TasksActionType =
  | RemoveTaskActionType
  | SetTodolistActionType
  | AddTaskActionType
  | changeStatusActionType
  | changeTaskTextActionType
  | AddTodolistActionType
  | SetTaskActionType
  | RemoveTodolistActionType;
