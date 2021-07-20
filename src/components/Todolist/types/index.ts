import { FilterType } from '../../../types';

export interface ITodolistProps {
  id: string;
  title: string;
  onChangeFilter: (filterValue: FilterType, id: string) => void;
  filter: FilterType;
  removeTodolist: (id: string) => void;
  onChangeTitleTodolist: (newValue: string, todolistId: string) => void;
}
