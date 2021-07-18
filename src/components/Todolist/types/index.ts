import { FilterType, TodolistItemData } from '../../../types';

export interface ITodolistProps {
  id: string;
  todolistItemData: TodolistItemData[];
  title: string;
  onRemoveTask: (id: string, todolistId: string) => void;
  onChangeFilter: (filterValue: FilterType, id: string) => void;
  addTask: (inputValue: string, todolistId: string) => void;
  onChangeStatus: (id: string, status: boolean, todolistId: string) => void;
  filter: FilterType;
  removeTodolist: (id: string) => void;
  onChangeTaskText: (id: string, newValue: string, todolistId: string) => void;
  onChangeTitleTodolist: (newValue: string, todolistId: string) => void;
}
