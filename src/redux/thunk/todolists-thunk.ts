import { Dispatch } from 'redux';
import { api } from '../../api';
import { setTodolistAC } from '../actions/todolists-actions';

export const fetchTodolistsThunk = () => (dispatch: Dispatch) => {
  api.getTodolists().then(({ data }) => dispatch(setTodolistAC(data)));
};
