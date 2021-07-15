import { TodolistItemData } from '../../../types';

export interface ITodolistProps {
  todolistItemData: TodolistItemData[];
  title: string;
  onRemoveTask: (id: string) => void;
}
