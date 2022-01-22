import { TodolistDataType } from '../../types';
import { TodolistsActionsType, TodolistsActionType } from '../actions/types/todolists-actions.type';

const initialState: TodolistDataType[] = [];

export const todolistsReducer = (
  state = initialState,
  action: TodolistsActionType
): TodolistDataType[] => {
  switch (action.type) {
    case TodolistsActionsType.ADD_TODOLIST: {
      return [
        ...state,
        { id: action.payload.todolistID, title: action.payload.newTodolistTitle, filter: 'all' },
      ];
    }

    case TodolistsActionsType.REMOVE_TODOLIST: {
      return state.filter((item) => item.id !== action.payload);
    }

    case TodolistsActionsType.CHANGE_TODOLIST_TITLE: {
      let todolist = state.find((item) => item.id === action.payload.id);
      if (todolist) {
        todolist.title = action.payload.title;
      }
      return [...state];
    }

    case TodolistsActionsType.CHANGE_TODOLIST_FILTER: {
      let todolist = state.find((item) => item.id === action.payload.id);
      if (todolist) {
        todolist.filter = action.payload.filter;
      }
      return [...state];
    }

    default:
      return state;
  }
};
