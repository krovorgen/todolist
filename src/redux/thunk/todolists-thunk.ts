import { Dispatch } from 'redux';
import { api } from '../../api';
import {
  addTodolistAC,
  changeTodolistTitleAC,
  removeTodolistAC,
  setTodolistAC,
} from '../actions/todolists-actions';
import { toast } from 'react-toastify';
import { SetStatusAppAC } from '../actions/app-actions';

export const fetchTodolistsTC = () => (dispatch: Dispatch) => {
  dispatch(SetStatusAppAC('loading'));
  api
    .getTodolists()
    .then(({ data }) => {
      dispatch(setTodolistAC(data));
    })
    .finally(() => dispatch(SetStatusAppAC('idle')));
};

export const deleteTodolistTC = (todolistId: string) => (dispatch: Dispatch) => {
  dispatch(SetStatusAppAC('loading'));
  api
    .deleteTodolists(todolistId)
    .then(({ data }) => {
      if (data.resultCode !== 0) return toast.error(data.messages[0]);
      dispatch(removeTodolistAC(todolistId));
    })
    .finally(() => dispatch(SetStatusAppAC('idle')));
};

export const addTodolistTC = (title: string) => (dispatch: Dispatch) => {
  dispatch(SetStatusAppAC('loading'));
  api
    .createTodolists(title)
    .then(({ data }) => {
      if (data.resultCode !== 0) return toast.error(data.messages[0]);
      dispatch(addTodolistAC(data.data.item));

      toast.success(`todolist ${title} was created`);
    })
    .finally(() => dispatch(SetStatusAppAC('idle')));
};

export const updateTitleTodolistTC =
  (todolistId: string, title: string) => (dispatch: Dispatch) => {
    dispatch(SetStatusAppAC('loading'));
    api
      .updateTitleTodolists(todolistId, title)
      .then(({ data }) => {
        if (data.resultCode !== 0) return toast.error(data.messages[0]);
        dispatch(changeTodolistTitleAC(todolistId, title));
      })
      .finally(() => dispatch(SetStatusAppAC('idle')));
  };
