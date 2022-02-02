import { TodolistTask } from '../../api';
import { UpdateTaskModelType } from '../thunk/tasks-thunk';
import { addTodolistAC, removeTodolistAC, setTodolistAC } from './todolists-actions';

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

export type TasksActionType =
  | ReturnType<typeof setTaskAC>
  | ReturnType<typeof addTaskAC>
  | ReturnType<typeof removeTaskAC>
  | ReturnType<typeof updateTaskAC>
  | ReturnType<typeof setTodolistAC>
  | ReturnType<typeof removeTodolistAC>
  | ReturnType<typeof addTodolistAC>;

export const setTaskAC = (tasks: TodolistTask[], todolistId: string) =>
  ({
    type: TasksActionsType.SET_TASK,
    payload: { tasks, todolistId },
  } as const);

export const addTaskAC = (task: TodolistTask) =>
  ({
    type: TasksActionsType.ADD_TASK,
    payload: { task },
  } as const);

export const removeTaskAC = (taskId: string, todolistId: string) =>
  ({
    type: TasksActionsType.REMOVE_TASK,
    payload: { taskId, todolistId },
  } as const);

export const updateTaskAC = (taskId: string, model: UpdateTaskModelType, todolistId: string) =>
  ({
    type: TasksActionsType.UPDATE_TASK,
    payload: { taskId, model, todolistId },
  } as const);
