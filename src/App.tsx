import React, { useState } from 'react';
import { v1 } from 'uuid';

import { Todolist } from './components';
import { TodolistItemData } from './types';

const App = () => {
  const [tasksData, setTasksData] = useState<TodolistItemData[]>([
    { id: v1(), title: 'HTML&CSS', checked: true },
    { id: v1(), title: 'JS', checked: true },
    { id: v1(), title: 'React', checked: false },
  ]);

  const onRemoveTask = (id: string) => {
    setTasksData([...tasksData.filter((item) => item.id !== id)]);
  };

  return (
    <>
      <Todolist title={'What to learn'} todolistItemData={tasksData} onRemoveTask={onRemoveTask} />
    </>
  );
};

export default App;
