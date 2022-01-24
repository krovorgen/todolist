import { Dispatch } from 'redux';
import { api } from '../../api';
import { addTaskAC, removeTaskAC, setTaskAC } from '../actions/tasks-actions';
import { toast } from 'react-toastify';

export const fetchTasksThunk = (todolistId: string) => (dispatch: Dispatch) => {
  api.getTodolistsTasks(todolistId).then(({ data }) => dispatch(setTaskAC(data.items, todolistId)));
};

export const deleteTaskTC = (todolistId: string, taskId: string) => (dispatch: Dispatch) => {
  api.deleteTodolistsTask(todolistId, taskId).then(() => {
    dispatch(removeTaskAC(taskId, todolistId));
    toast.success(`task was delete`);
  });
};

export const addTaskTC = (todolistId: string, title: string) => (dispatch: Dispatch) => {
  api.createTodolistsTasks(todolistId, title).then(({ data }) => {
    dispatch(addTaskAC(data.data.item));
    toast.success(`task ${title} was created`);
  });
};
