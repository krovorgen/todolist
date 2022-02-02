import { Dispatch } from 'redux';
import { api } from '../../api';
import {
  addTodolistAC,
  changeTodolistLoadingAC,
  changeTodolistTitleAC,
  removeTodolistAC,
  setTodolistAC,
} from '../actions/todolists-actions';
import { toast } from 'react-toastify';
import { setStatusAppAC } from '../actions/app-actions';

export const fetchTodolistsTC = () => (dispatch: Dispatch) => {
  dispatch(setStatusAppAC('loading'));
  api
    .getTodolists()
    .then(({ data }) => {
      dispatch(setTodolistAC(data));
    })
    .finally(() => dispatch(setStatusAppAC('idle')));
};

export const deleteTodolistTC = (todolistId: string) => (dispatch: Dispatch) => {
  dispatch(setStatusAppAC('loading'));
  dispatch(changeTodolistLoadingAC(todolistId, 'loading'));

  api
    .deleteTodolists(todolistId)
    .then(({ data }) => {
      if (data.resultCode !== 0) return toast.error(data.messages[0]);
      dispatch(removeTodolistAC(todolistId));
    })
    .finally(() => dispatch(setStatusAppAC('idle')));
};

export const addTodolistTC = (title: string) => (dispatch: Dispatch) => {
  dispatch(setStatusAppAC('loading'));
  api
    .createTodolists(title)
    .then(({ data }) => {
      if (data.resultCode !== 0) return toast.error(data.messages[0]);
      dispatch(addTodolistAC(data.data.item));

      toast.success(`todolist ${title} was created`);
    })
    .finally(() => dispatch(setStatusAppAC('idle')));
};

export const updateTitleTodolistTC =
  (todolistId: string, title: string) => (dispatch: Dispatch) => {
    dispatch(setStatusAppAC('loading'));
    api
      .updateTitleTodolists(todolistId, title)
      .then(({ data }) => {
        if (data.resultCode !== 0) return toast.error(data.messages[0]);
        dispatch(changeTodolistTitleAC(todolistId, title));
      })
      .finally(() => dispatch(setStatusAppAC('idle')));
  };
