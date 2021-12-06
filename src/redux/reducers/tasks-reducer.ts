import { AllTasksType, TodolistItemData } from '../../types';
import {
  ADD_TASK,
  CHANGE_STATUS,
  CHANGE_TASK_TEXT,
  REMOVE_TASK,
  TasksActionType,
} from '../actions/types/tasks-actions.type';
import { v1 } from 'uuid';
import { ADD_TODOLIST, REMOVE_TODOLIST } from '../actions/types/todolists-actions.type';

const initialState: AllTasksType = {};

export const tasksReducer = (state = initialState, action: TasksActionType): AllTasksType => {
  switch (action.type) {
    case ADD_TASK: {
      let newTask: TodolistItemData = {
        id: v1(),
        title: action.payload.inputValue,
        checked: false,
      };
      return {
        ...state,
        [action.payload.todolistId]: [...state[action.payload.todolistId], newTask],
      };
    }

    case REMOVE_TASK:
      return {
        ...state,
        [action.payload.todolistId]: [...state[action.payload.todolistId]].filter(
          (item) => item.id !== action.payload.taskId
        ),
      };

    case CHANGE_STATUS: {
      let todolistTasks = state[action.payload.todolistId];
      let task = todolistTasks.find((t) => t.id === action.payload.taskId);
      if (task) task.checked = action.payload.status;

      state[action.payload.todolistId] = [...todolistTasks];
      return { ...state };
    }

    case CHANGE_TASK_TEXT: {
      let todolistTasks = state[action.payload.todolistId];
      let task = todolistTasks.find((t) => t.id === action.payload.taskId);
      if (task) task.title = action.payload.newValue;

      state[action.payload.todolistId] = [...todolistTasks];
      return { ...state };
    }

    case ADD_TODOLIST: {
      return {
        ...state,
        [action.payload.todolistID]: [],
      };
    }

    case REMOVE_TODOLIST: {
      const stateCopy = { ...state };
      delete stateCopy[action.payload];
      return stateCopy;
    }

    default:
      return state;
  }
};
