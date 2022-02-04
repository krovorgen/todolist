import { Dispatch } from 'redux';
import { api, LoginDataResponse } from '../../api';
import { catchHandler } from '../../helpers/catchHandler';
import { toast } from 'react-toastify';
import { setLoggedStatusAC } from '../reducers/auth-reducer';
import { setStatusAppAC } from '../reducers/app-reducer';

export const loginTC = (data: LoginDataResponse) => (dispatch: Dispatch) => {
  dispatch(setStatusAppAC('loading'));
  api
    .login(data)
    .then(({ data }) => {
      if (data.resultCode !== 0) return toast.error(data.messages[0]);
      dispatch(setLoggedStatusAC(true));
    })
    .catch(catchHandler)
    .finally(() => dispatch(setStatusAppAC('idle')));
};

export const logoutTC = () => (dispatch: Dispatch) => {
  dispatch(setStatusAppAC('loading'));
  api
    .logout()
    .then(({ data }) => {
      if (data.resultCode !== 0) return toast.error(data.messages[0]);
      dispatch(setLoggedStatusAC(false));
    })
    .catch(catchHandler)
    .finally(() => dispatch(setStatusAppAC('idle')));
};
