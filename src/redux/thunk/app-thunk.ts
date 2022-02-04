import { Dispatch } from 'redux';
import { api } from '../../api';
import { changeInitializedStatusAC } from '../actions/app-actions';
import { catchHandler } from '../../helpers/catchHandler';
import { toast } from 'react-toastify';
import { setLoggedStatusAC } from '../actions/auth-actions';

export const initializedTC = () => (dispatch: Dispatch) => {
  api
    .currentUser()
    .then(({ data }) => {
      if (data.resultCode !== 0) return toast.error(data.messages[0]);
      dispatch(setLoggedStatusAC(true));
    })
    .catch(catchHandler)
    .finally(() => dispatch(changeInitializedStatusAC(false)));
};
