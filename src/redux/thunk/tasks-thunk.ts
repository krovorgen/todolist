import { Dispatch } from 'redux';
import { api } from '../../api';
import { setTaskAC } from '../actions/tasks-actions';

export const fetchTasksThunk = (todolistId: string) => (dispatch: Dispatch) => {
  api.getTodolistsTasks(todolistId).then(({ data }) => dispatch(setTaskAC(data.items, todolistId)));
};
