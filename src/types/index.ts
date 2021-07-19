import rootReducer from '../redux/root-reducer';

export type TodolistItemData = {
  id: string;
  title: string;
  checked: boolean;
};

export type FilterType = 'all' | 'active' | 'completed';

export type TodolistDataType = {
  id: string;
  title: string;
  filter: FilterType;
};

export interface AllTasksType {
  [key: string]: TodolistItemData[];
}

export type RootStateType = ReturnType<typeof rootReducer>;
