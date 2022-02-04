import { AllTasksType } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodolistTask } from '../../api';
import { UpdateTaskModelType } from '../thunk/tasks-thunk';
import { addTodolistAC, removeTodolistAC, setTodolistAC } from './todolists-reducer';

const initialState: AllTasksType = {};

const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTaskAC(state, action: PayloadAction<{ tasks: TodolistTask[]; todolistId: string }>) {
      state[action.payload.todolistId] = action.payload.tasks;
    },
    addTaskAC(state, action: PayloadAction<TodolistTask>) {
      state[action.payload.todoListId].push(action.payload);
    },
    removeTaskAC(state, action: PayloadAction<{ taskId: string; todolistId: string }>) {
      const index = state[action.payload.todolistId].findIndex(
        (t) => t.id === action.payload.taskId
      );
      if (index !== -1) state[action.payload.todolistId].splice(index, 1);
    },
    updateTaskAC(
      state,
      action: PayloadAction<{ taskId: string; model: UpdateTaskModelType; todolistId: string }>
    ) {
      const task = state[action.payload.todolistId];
      const index = task.findIndex((t) => t.id === action.payload.taskId);
      if (index !== -1) {
        task[index] = {
          ...task[index],
          ...action.payload.model,
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setTodolistAC, (state, action) => {
      action.payload.forEach((tl) => {
        state[tl.id] = [];
      });
    });
    builder.addCase(removeTodolistAC, (state, action) => {
      delete state[action.payload];
    });
    builder.addCase(addTodolistAC, (state, action) => {
      state[action.payload.id] = [];
    });
  },
});

export const tasksReducer = slice.reducer;

export const { setTaskAC, addTaskAC, removeTaskAC, updateTaskAC } = slice.actions;

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
