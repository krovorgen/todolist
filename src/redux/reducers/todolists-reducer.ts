import { TodolistDataType } from '../../types';
import { TodolistsActionsType, TodolistsActionType } from '../actions/todolists-actions';

const initialState: TodolistDataType[] = [];

export const todolistsReducer = (
  state = initialState,
  action: TodolistsActionType
): TodolistDataType[] => {
  switch (action.type) {
    case TodolistsActionsType.SET_TODOLISTS:
      return action.payload.map((tl) => ({
        ...tl,
        filter: 'all',
        loadingStatus: 'idle',
      }));
    case TodolistsActionsType.ADD_TODOLIST:
      return [
        ...state,
        {
          ...action.payload,
          filter: 'all',
          loadingStatus: 'idle',
        },
      ];
    case TodolistsActionsType.REMOVE_TODOLIST:
      return state.filter((item) => item.id !== action.payload);
    case TodolistsActionsType.CHANGE_TODOLIST_TITLE:
      return state.map((tl) =>
        tl.id === action.payload.id ? { ...tl, title: action.payload.title } : tl
      );
    case TodolistsActionsType.CHANGE_TODOLIST_FILTER:
      return state.map((tl) =>
        tl.id === action.payload.id ? { ...tl, filter: action.payload.filter } : tl
      );
    case TodolistsActionsType.CHANGE_TODOLIST_LOADING:
      return state.map((tl) =>
        tl.id === action.payload.id ? { ...tl, loadingStatus: action.payload.status } : tl
      );
    default:
      return state;
  }
};
