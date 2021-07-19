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

export const tasksReducer = (state: AllTasksType, action: TasksActionType): AllTasksType => {
  switch (action.type) {
    case ADD_TASK: {
      let newTask: TodolistItemData = {
        id: v1(),
        title: action.payload.inputValue,
        checked: false,
      };
      return {
        ...state,
        [action.payload.todolistID]: [...state[action.payload.todolistID], newTask],
      };
    }

    case REMOVE_TASK:
      return {
        ...state,
        [action.payload.todolistID]: state[action.payload.todolistID].filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case CHANGE_STATUS: {
      let task = state[action.payload.todolistID].find((item) => item.id === action.payload.id);
      if (task) {
        task.checked = action.payload.status;
      }
      return { ...state };
    }

    case CHANGE_TASK_TEXT: {
      let task = state[action.payload.todolistID].find((item) => item.id === action.payload.id);
      if (task) {
        task.title = action.payload.newValue;
      }
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
      throw new Error("I don't understand this type");
  }
};
