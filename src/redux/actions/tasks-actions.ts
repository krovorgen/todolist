import {
  AddTaskActionType,
  changeStatusActionType,
  changeTaskTextActionType,
  RemoveTaskActionType,
  SetTaskActionType,
  TasksActionsType,
  TaskStatuses,
} from './types/tasks-actions.type';
import { TodolistTask } from '../../api';

export const setTaskAC = (tasks: TodolistTask[], todolistId: string): SetTaskActionType => ({
  type: TasksActionsType.SET_TASK,
  payload: { tasks, todolistId },
});

export const addTaskAC = (inputValue: string, todolistId: string): AddTaskActionType => ({
  type: TasksActionsType.ADD_TASK,
  payload: { inputValue, todolistId },
});

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => ({
  type: TasksActionsType.REMOVE_TASK,
  payload: { taskId, todolistId },
});

export const changeStatusAC = (
  taskId: string,
  status: TaskStatuses,
  todolistId: string
): changeStatusActionType => ({
  type: TasksActionsType.CHANGE_STATUS,
  payload: { taskId, status, todolistId },
});

export const changeTaskTextAC = (
  taskId: string,
  newValue: string,
  todolistId: string
): changeTaskTextActionType => ({
  type: TasksActionsType.CHANGE_TASK_TEXT,
  payload: { taskId, newValue, todolistId },
});
