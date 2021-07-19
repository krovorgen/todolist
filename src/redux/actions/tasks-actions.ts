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
  payload: { inputValue: inputValue, todolistID: todolistId },
});

export const removeTaskAC = (id: string, todolistId: string): RemoveTaskActionType => ({
  type: REMOVE_TASK,
  payload: { id: id, todolistID: todolistId },
});

export const changeStatusAC = (
  id: string,
  status: boolean,
  todolistId: string
): changeStatusActionType => ({
  type: CHANGE_STATUS,
  payload: { id: id, status: status, todolistID: todolistId },
});

export const changeTaskTextAC = (
  id: string,
  newValue: string,
  todolistId: string
): changeTaskTextActionType => ({
  type: CHANGE_TASK_TEXT,
  payload: { id: id, newValue: newValue, todolistID: todolistId },
});
