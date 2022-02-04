import { Dispatch } from 'redux';
import { api } from '../../api';

import { toast } from 'react-toastify';
import { catchHandler } from '../../helpers/catchHandler';
import { setStatusAppAC } from '../reducers/app-reducer';
import {
  addTodolistAC,
  changeTodolistLoadingAC,
  changeTodolistTitleAC,
  removeTodolistAC,
  setTodolistAC,
} from '../reducers/todolists-reducer';

export const fetchTodolistsTC = () => (dispatch: Dispatch) => {
  dispatch(setStatusAppAC('loading'));
  api
    .getTodolists()
    .then(({ data }) => {
      dispatch(setTodolistAC(data));
    })
    .catch(catchHandler)
    .finally(() => dispatch(setStatusAppAC('idle')));
};

export const deleteTodolistTC = (todolistId: string) => (dispatch: Dispatch) => {
  dispatch(setStatusAppAC('loading'));
  dispatch(changeTodolistLoadingAC({ todolistId, status: 'loading' }));

  api
    .deleteTodolists(todolistId)
    .then(({ data }) => {
      if (data.resultCode !== 0) return toast.error(data.messages[0]);
      dispatch(removeTodolistAC(todolistId));
    })
    .catch(catchHandler)
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
    .catch(catchHandler)
    .finally(() => dispatch(setStatusAppAC('idle')));
};

export const updateTitleTodolistTC =
  (todolistId: string, title: string) => (dispatch: Dispatch) => {
    dispatch(setStatusAppAC('loading'));
    api
      .updateTitleTodolists(todolistId, title)
      .then(({ data }) => {
        if (data.resultCode !== 0) return toast.error(data.messages[0]);
        dispatch(changeTodolistTitleAC({ todolistId, title }));
      })
      .catch(catchHandler)
      .finally(() => dispatch(setStatusAppAC('idle')));
  };
