import { ActionsType, AppActionsType } from '../actions/app-actions';
import { RequestStatusType } from '../../types';

export type InitialStateType = {
  status: RequestStatusType;
};

const initialState: InitialStateType = {
  status: 'idle',
};

export const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case AppActionsType.SetStatus:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
