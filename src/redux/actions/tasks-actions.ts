import {
  ADD_TASK,
  AddTaskActionType,
  CHANGE_STATUS,
  CHANGE_TASK_TEXT,
  changeStatusActionType,
  changeTaskTextActionType,
  REMOVE_TASK,
  RemoveTaskActionType,
} from './types/tasks-actions.type';

export const addTaskAC = (inputValue: string, todolistId: string): AddTaskActionType => ({
  type: ADD_TASK,
  payload: { inputValue, todolistId },
});

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => ({
  type: REMOVE_TASK,
  payload: { taskId, todolistId },
});

export const changeStatusAC = (
  taskId: string,
  status: boolean,
  todolistId: string
): changeStatusActionType => ({
  type: CHANGE_STATUS,
  payload: { taskId, status, todolistId },
});

export const changeTaskTextAC = (
  taskId: string,
  newValue: string,
  todolistId: string
): changeTaskTextActionType => ({
  type: CHANGE_TASK_TEXT,
  payload: { taskId, newValue, todolistId },
});
