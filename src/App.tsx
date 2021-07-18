import React, { FC, useState } from 'react';
import { v1 } from 'uuid';

import { Todolist } from './components';
import { AllTasksType, FilterType, TodolistDataType, TodolistItemData } from './types';
import AddItemForm from './components/AddItemForm';

const App: FC = () => {
  let [tasksData, setTasksData] = useState<AllTasksType>({});

  let [todolistData, setTodolistData] = useState<TodolistDataType[]>([]);

  console.log('tasksData', tasksData);
  console.log('todolistData', todolistData);

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

  const onChangeTaskText = (id: string, newValue: string, todolistId: string) => {
    let task = tasksData[todolistId].find((item) => item.id === id);
    if (task) {
      task.title = newValue;
      setTasksData({ ...tasksData });
    }
  };

  const onChangeTitleTodolist = (newValue: string, todolistId: string) => {
    let todolist = todolistData.find((item) => item.id === todolistId);
    if (todolist) {
      todolist.title = newValue;
      setTodolistData([...todolistData]);
    }
  };

  const removeTodolist = (id: string) => {
    setTodolistData([...todolistData.filter((item) => item.id !== id)]);
    delete tasksData[id];
    setTasksData({ ...tasksData });
  };

  const addTodolist = (title: string) => {
    let newTodolist: TodolistDataType = { id: v1(), title: title, filter: 'all' };
    setTodolistData([...todolistData, newTodolist]);
    setTasksData({ ...tasksData, [newTodolist.id]: [] });
  };

  return (
    <>
      <AddItemForm callback={addTodolist} />
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
            onChangeTaskText={onChangeTaskText}
            onChangeTitleTodolist={onChangeTitleTodolist}
          />
        );
      })}
    </>
  );
};

export default App;
