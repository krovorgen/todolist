import rootReducer from '../redux/root-reducer';
import { TodolistTask, TodolistType } from '../api';

export type FilterType = 'all' | 'active' | 'completed';

export type TodolistDataType = TodolistType & {
  filter: FilterType;
};

export interface AllTasksType {
  [key: string]: TodolistTask[];
}

export type RootStateType = ReturnType<typeof rootReducer>;
