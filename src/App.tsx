import React, { FC, useState } from 'react';
import { v1 } from 'uuid';

import { Todolist } from './components';
import { AllTasksType, FilterType, TodolistDataType, TodolistItemData } from './types';

const App: FC = () => {
  let tid1 = v1();
  let tid2 = v1();
  let tid3 = v1();

  let [tasksData, setTasksData] = useState<AllTasksType>({
    [tid1]: [
      { id: v1(), title: 'HTML&CSS', checked: true },
      { id: v1(), title: 'JS', checked: true },
      { id: v1(), title: 'React', checked: false },
    ],
    [tid2]: [
      { id: v1(), title: 'HTML&CSS', checked: true },
      { id: v1(), title: 'JS', checked: true },
      { id: v1(), title: 'React', checked: false },
    ],
    [tid3]: [
      { id: v1(), title: 'HTML&CSS', checked: true },
      { id: v1(), title: 'JS', checked: true },
      { id: v1(), title: 'React', checked: false },
    ],
  });

  let [todolistData, setTodolistData] = useState<TodolistDataType[]>([
    { id: tid1, title: 'What', filter: 'all' },
    { id: tid2, title: 'What', filter: 'all' },
    { id: tid3, title: 'What', filter: 'all' },
  ]);

  const onRemoveTask = (id: string, todolistId: string) => {
    tasksData[todolistId] = tasksData[todolistId].filter((item) => item.id !== id);
    setTasksData({ ...tasksData });
  };

  const addTask = (inputValue: string, todolistId: string) => {
    let newTask: TodolistItemData = { id: v1(), title: inputValue, checked: false };
    tasksData[todolistId] = [...tasksData[todolistId], newTask];
    setTasksData({ ...tasksData });
  };

  const onChangeFilter = (filterValue: FilterType, id: string) => {
    let todolist = todolistData.find((item) => item.id === id);
    if (todolist) {
      todolist.filter = filterValue;
      setTodolistData([...todolistData]);
    }
  };

  const onChangeStatus = (id: string, status: boolean, todolistId: string) => {
    let task = tasksData[todolistId].find((item) => item.id === id);
    if (task) {
      task.checked = status;
      setTasksData({ ...tasksData });
    }
  };

  const removeTodolist = (id: string) => {
    setTodolistData([...todolistData.filter((item) => item.id !== id)]);
    delete tasksData[id];
    setTasksData({ ...tasksData });
  };

  return (
    <>
      {todolistData.map((todolist) => {
        let tasksForTodolist = tasksData[todolist.id];
        if (todolist.filter === 'active') {
          tasksForTodolist = tasksForTodolist.filter((item) => !item.checked);
        }
        if (todolist.filter === 'completed') {
          tasksForTodolist = tasksForTodolist.filter((item) => item.checked);
        }
        return (
          <Todolist
            key={todolist.id}
            id={todolist.id}
            title={todolist.title}
            todolistItemData={tasksForTodolist}
            onRemoveTask={onRemoveTask}
            onChangeFilter={onChangeFilter}
            addTask={addTask}
            onChangeStatus={onChangeStatus}
            filter={todolist.filter}
            removeTodolist={removeTodolist}
          />
        );
      })}
    </>
  );
};

export default App;
