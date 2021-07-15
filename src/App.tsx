import React from 'react';
import { v1 } from 'uuid';

import { Todolist } from './components';
import { TodolistItemData } from './types';

const App = () => {
  const todolistItemData: TodolistItemData[] = [
    { id: v1(), title: 'HTML&CSS', checked: true },
    { id: v1(), title: 'JS', checked: true },
    { id: v1(), title: 'React', checked: false },
  ];

  return (
    <>
      <Todolist title={'What to learn'} todolistItemData={todolistItemData} />
    </>
  );
};

export default App;
