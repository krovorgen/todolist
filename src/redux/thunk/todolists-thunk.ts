import { Dispatch } from 'redux';
import { api } from '../../api';
import {
  addTodolistAC,
  changeTodolistTitleAC,
  removeTodolistAC,
  setTodolistAC,
} from '../actions/todolists-actions';
import { toast } from 'react-toastify';

export const fetchTodolistsTC = () => (dispatch: Dispatch) => {
  api.getTodolists().then(({ data }) => dispatch(setTodolistAC(data)));
};

export const deleteTodolistTC = (todolistId: string) => (dispatch: Dispatch) => {
  api.deleteTodolists(todolistId).then(() => {
    dispatch(removeTodolistAC(todolistId));
  });
};

export const addTodolistTC = (title: string) => (dispatch: Dispatch) => {
  api.createTodolists(title).then(({ data }) => {
    dispatch(addTodolistAC(data.data.item));
    toast.success(`todolist ${title} was created`);
  });
};

export const updateTitleTodolistTC =
  (todolistId: string, title: string) => (dispatch: Dispatch) => {
    api.updateTitleTodolists(todolistId, title).then(() => {
      dispatch(changeTodolistTitleAC(todolistId, title));
    });
  };
