import {
  AddTaskAT,
  RemoveTaskAT,
  SetTaskAT,
  TasksActionsType,
  UpdateTaskAT,
} from './types/tasks-actions.type';
import { TodolistTask } from '../../api';
import { UpdateTaskModelType } from '../thunk/tasks-thunk';

export const setTaskAC = (tasks: TodolistTask[], todolistId: string): SetTaskAT => ({
  type: TasksActionsType.SET_TASK,
  payload: { tasks, todolistId },
});

export const addTaskAC = (task: TodolistTask): AddTaskAT => ({
  type: TasksActionsType.ADD_TASK,
  payload: { task },
});

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskAT => ({
  type: TasksActionsType.REMOVE_TASK,
  payload: { taskId, todolistId },
});

export const updateTaskAC = (
  taskId: string,
  model: UpdateTaskModelType,
  todolistId: string
): UpdateTaskAT => ({
  type: TasksActionsType.UPDATE_TASK,
  payload: { taskId, model, todolistId },
});
