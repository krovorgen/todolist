import { TasksActionsType } from './types/tasks-actions.type';
import { TodolistTask } from '../../api';
import { UpdateTaskModelType } from '../thunk/tasks-thunk';

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
