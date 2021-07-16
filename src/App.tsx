import React, { FC, useState } from 'react';
import { v1 } from 'uuid';

import { Todolist } from './components';
import { FilterType, TodolistItemData } from './types';

const App: FC = () => {
  const [tasksData, setTasksData] = useState<TodolistItemData[]>([
    { id: v1(), title: 'HTML&CSS', checked: true },
    { id: v1(), title: 'JS', checked: true },
    { id: v1(), title: 'React', checked: false },
  ]);
  const [filter, setFilter] = useState<FilterType>('all');

  const onRemoveTask = (id: string) => {
    setTasksData([...tasksData.filter((item) => item.id !== id)]);
  };

  const addTask = (inputValue: string) => {
    let newTask: TodolistItemData = { id: v1(), title: inputValue, checked: false };
    setTasksData([...tasksData, newTask]);
  };

  const onChangeFilter = (filterValue: FilterType) => {
    setFilter(filterValue);
  };
  let tasksForTodolist = tasksData;
  if (filter === 'active') {
    tasksForTodolist = tasksData.filter((item) => !item.checked);
  }
  if (filter === 'completed') {
    tasksForTodolist = tasksData.filter((item) => item.checked);
  }

  return (
    <>
      <Todolist
        title={'What to learn'}
        todolistItemData={tasksForTodolist}
        onRemoveTask={onRemoveTask}
        onChangeFilter={onChangeFilter}
        addTask={addTask}
      />
    </>
  );
};

export default App;
