import { Dispatch } from 'redux';
import { api } from '../../api';
import { addTaskAC, removeTaskAC, setTaskAC, updateTaskAC } from '../actions/tasks-actions';
import { toast } from 'react-toastify';
import { RootStateType } from '../../types';
import { setStatusAppAC } from '../actions/app-actions';

export const fetchTasksTC = (todolistId: string) => (dispatch: Dispatch) => {
  dispatch(setStatusAppAC('loading'));
  api
    .getTodolistsTasks(todolistId)
    .then(({ data }) => {
      dispatch(setTaskAC(data.items, todolistId));
    })
    .finally(() => dispatch(setStatusAppAC('idle')));
};

export const deleteTaskTC = (todolistId: string, taskId: string) => (dispatch: Dispatch) => {
  dispatch(setStatusAppAC('loading'));
  api
    .deleteTodolistsTask(todolistId, taskId)
    .then(({ data }) => {
      if (data.resultCode !== 0) return toast.error(data.messages[0]);
      dispatch(removeTaskAC(taskId, todolistId));
      toast.success(`task was delete`);
    })
    .finally(() => dispatch(setStatusAppAC('idle')));
};

export const addTaskTC = (todolistId: string, title: string) => (dispatch: Dispatch) => {
  dispatch(setStatusAppAC('loading'));
  api
    .createTodolistsTasks(todolistId, title)
    .then(({ data }) => {
      if (data.resultCode !== 0) return toast.error(data.messages[0]);
      dispatch(addTaskAC(data.data.item));
      toast.success(`task ${title} was created`);
    })
    .finally(() => dispatch(setStatusAppAC('idle')));
};

export type UpdateTaskModelType = {
  title?: string;
  description?: string;
  status?: number;
  priority?: number;
  startDate?: Date | string;
  deadline?: Date | string;
};

export const updateTaskTC =
  (taskId: string, model: UpdateTaskModelType, todolistId: string) =>
  (dispatch: Dispatch, getState: () => RootStateType) => {
    dispatch(setStatusAppAC('loading'));
    const task = getState().tasks[todolistId].find((t) => t.id === taskId);

    const apiModel: UpdateTaskModelType = {
      deadline: task!.deadline,
      description: task!.description,
      priority: task!.priority,
      startDate: task!.startDate,
      title: task!.title,
      status: task!.status,
      ...model,
    };

    api
      .updateTaskTodolists(todolistId, taskId, apiModel)
      .then(({ data }) => {
        if (data.resultCode !== 0) return toast.error(data.messages[0]);
        dispatch(updateTaskAC(taskId, model, todolistId));
      })
      .finally(() => dispatch(setStatusAppAC('idle')));
  };
