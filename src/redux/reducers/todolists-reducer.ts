import { v1 } from 'uuid';

import { TodolistDataType } from '../../types';
import {
  ADD_TODOLIST,
  CHANGE_TODOLIST_FILTER,
  CHANGE_TODOLIST_TITLE,
  REMOVE_TODOLIST,
  TodolistsActionType,
} from '../actions/types/todolists-actions.type';

export const todolistsReducer = (
  state: TodolistDataType[],
  action: TodolistsActionType
): TodolistDataType[] => {
  switch (action.type) {
    case REMOVE_TODOLIST: {
      return state.filter((item) => item.id !== action.payload);
    }

    case ADD_TODOLIST: {
      let newTodolist: TodolistDataType = { id: v1(), title: action.payload, filter: 'all' };
      return [...state, newTodolist];
    }

    case CHANGE_TODOLIST_TITLE: {
      let todolist = state.find((item) => item.id === action.payload.id);
      if (todolist) {
        todolist.title = action.payload.title;
      }
      return [...state];
    }

    case CHANGE_TODOLIST_FILTER: {
      let todolist = state.find((item) => item.id === action.payload.id);
      if (todolist) {
        todolist.filter = action.payload.filter;
      }
      return [...state];
    }

    default:
      throw new Error("I don't understand this type");
  }
};
