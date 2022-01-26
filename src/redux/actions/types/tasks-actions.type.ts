import {
  AddTodolistActionType,
  RemoveTodolistActionType,
  SetTodolistActionType,
} from './todolists-actions.type';
import { TodolistTask } from '../../../api';
import { UpdateTaskModelType } from '../../thunk/tasks-thunk';

export enum TasksActionsType {
  REMOVE_TASK = 'REMOVE-TASK',
  ADD_TASK = 'ADD-TASK',
  SET_TASK = 'SET-TASK',
  CHANGE_STATUS = 'CHANGE-STATUS',
  UPDATE_TASK = 'UPDATE_TASK',
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

export type AddTaskAT = {
  type: TasksActionsType.ADD_TASK;
  payload: { task: TodolistTask };
};

export type SetTaskAT = {
  type: TasksActionsType.SET_TASK;
  payload: { tasks: TodolistTask[]; todolistId: string };
};

export type RemoveTaskAT = {
  type: TasksActionsType.REMOVE_TASK;
  payload: { taskId: string; todolistId: string };
};

export type UpdateTaskAT = {
  type: TasksActionsType.UPDATE_TASK;
  payload: { taskId: string; model: UpdateTaskModelType; todolistId: string };
};

export type TasksActionType =
  | RemoveTaskAT
  | SetTodolistActionType
  | AddTaskAT
  | UpdateTaskAT
  | AddTodolistActionType
  | SetTaskAT
  | RemoveTodolistActionType;
