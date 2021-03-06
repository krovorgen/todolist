import axios from 'axios';
import { UpdateTaskModelType } from '../redux/thunk/tasks-thunk';

export type ResponseType<T = Object> = {
  messages: string[];
  resultCode: number;
  data: T;
};

export type TodolistType = {
  id: string;
  title: string;
  addedDate: Date;
  order: number;
};

export type TodolistTask = {
  description: string;
  title: string;
  status: number;
  priority: number;
  startDate?: Date | string;
  deadline?: Date | string;
  id: string;
  todoListId: string;
  order: number;
  addedDate: Date | string;
};

export type TodolistTasksType = {
  items: TodolistTask[];
  totalCount: number;
  error: string;
};

export type CreateTaskRT = {
  item: TodolistTask;
};

export type CreateTodolistRT = {
  item: TodolistType;
};

export type UpdateTodolistTitleRT = {
  data: Object;
  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
};

export type UpdateTaskType = {
  title: string;
  description: string;
  status: number;
  priority: number;
  startDate: Date | string;
  deadline: Date | string;
};

export type CurrentUserRT = {
  id: number;
  email: string;
  login: string;
};

export type LoginRT = {
  userId: string;
};

export type LoginDataResponse = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const instance = axios.create({
  withCredentials: true,
  headers: {
    'API-KEY': 'd07b19d9-3ad5-49ee-a955-03775b939f5e',
  },
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
});

export const api = {
  currentUser() {
    return instance.get<ResponseType<CurrentUserRT>>(`auth/me`);
  },
  login(data: LoginDataResponse) {
    return instance.post<ResponseType<LoginRT>>(`auth/login`, data);
  },
  logout() {
    return instance.delete<ResponseType>(`auth/login`);
  },
  getTodolists() {
    return instance.get<TodolistType[]>(`todo-lists`);
  },
  createTodolists(title: string) {
    return instance.post<ResponseType<CreateTodolistRT>>(`todo-lists`, {
      title,
    });
  },
  deleteTodolists(todolistId: string) {
    return instance.delete<ResponseType>(`todo-lists/${todolistId}`);
  },
  updateTitleTodolists(todolistId: string, title: string) {
    return instance.put<UpdateTodolistTitleRT>(`todo-lists/${todolistId}`, {
      title,
    });
  },
  getTodolistsTasks(todolistId: string) {
    return instance.get<TodolistTasksType>(`todo-lists/${todolistId}/tasks`);
  },
  createTodolistsTasks(todolistId: string, title: string) {
    return instance.post<ResponseType<CreateTaskRT>>(`todo-lists/${todolistId}/tasks`, { title });
  },
  deleteTodolistsTask(todolistId: string, taskId: string) {
    return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`);
  },
  updateTaskTodolists(todolistId: string, taskId: string, taskData: UpdateTaskModelType) {
    return instance.put<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`, taskData);
  },
};
