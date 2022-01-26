import { addTodolistAC, removeTodolistAC, setTodolistAC } from '../todolists-actions';
import { addTaskAC, removeTaskAC, setTaskAC, updateTaskAC } from '../tasks-actions';

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
