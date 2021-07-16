export type TodolistItemData = {
  id: string;
  title: string;
  checked: boolean;
};

export type FilterType = 'all' | 'active' | 'completed'