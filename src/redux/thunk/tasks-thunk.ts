import { Dispatch } from 'redux';
import { api } from '../../api';
import { addTaskAC, removeTaskAC, setTaskAC, updateTaskAC } from '../actions/tasks-actions';
import { toast } from 'react-toastify';
import { RootStateType } from '../../types';

export const fetchTasksTC = (todolistId: string) => (dispatch: Dispatch) => {
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

    api.updateTaskTodolists(todolistId, taskId, apiModel).then(() => {
      dispatch(updateTaskAC(taskId, model, todolistId));
    });
  };
