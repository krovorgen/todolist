import { FilterType, TodolistItemData } from '../../../types';

export interface ITodolistProps {
  todolistItemData: TodolistItemData[];
  title: string;
  onRemoveTask: (id: string) => void;
  onChangeFilter: (filterValue: FilterType) => void;
  addTask: (inputValue: string) => void;
  onChangeStatus: (id: string, status: boolean) => void;
}
