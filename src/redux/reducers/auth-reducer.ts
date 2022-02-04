import { ActionsType, AuthActionsType } from '../actions/auth-actions';

export type AuthStateType = {
  isLogged: boolean;
};

const initialState: AuthStateType = {
  isLogged: false,
};

export const authReducer = (state = initialState, action: ActionsType): AuthStateType => {
  switch (action.type) {
    case AuthActionsType.SetStatusLogged:
      return {
        ...state,
        isLogged: action.payload,
      };
    default:
      return state;
  }
};
