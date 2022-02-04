import { ActionsType, AppActionsType } from '../actions/app-actions';
import { RequestStatusType } from '../../types';

export type InitialStateType = {
  status: RequestStatusType;
  initialized: boolean;
};

const initialState: InitialStateType = {
  status: 'idle',
  initialized: true,
};

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case AppActionsType.SetStatus:
      return { ...state, status: action.payload };
    case AppActionsType.SetInitialized:
      return { ...state, initialized: action.payload };
    default:
      return state;
  }
};
