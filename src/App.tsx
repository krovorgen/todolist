import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Todolist } from './components';
import { FilterType, RootStateType } from './types';
import AddItemForm from './components/AddItemForm';
import {
  addTaskAC,
  changeStatusAC,
  changeTaskTextAC,
  removeTaskAC,
} from './redux/actions/tasks-actions';
import {
  addTodolistAC,
  changeTodolistFilterAC,
  changeTodolistTitleAC,
  RemoveTodolistAC,
} from './redux/actions/todolists-actions';

const App: FC = () => {
  const dispatch = useDispatch();

  const { todolists, tasks } = useSelector((state: RootStateType) => state);

  const addTask = (inputValue: string, todolistId: string) => {
    dispatch(addTaskAC(inputValue, todolistId));
  };

  const removeTask = (id: string, todolistId: string) => {
    dispatch(removeTaskAC(id, todolistId));
  };

  const onChangeStatus = (id: string, status: boolean, todolistId: string) => {
    dispatch(changeStatusAC(id, status, todolistId));
  };

  const onChangeTaskText = (id: string, newValue: string, todolistId: string) => {
    dispatch(changeTaskTextAC(id, newValue, todolistId));
  };

  const onChangeFilter = (filterValue: FilterType, id: string) => {
    dispatch(changeTodolistFilterAC(id, filterValue));
  };

  const onChangeTitleTodolist = (newValue: string, todolistId: string) => {
    dispatch(changeTodolistTitleAC(todolistId, newValue));
  };

  const removeTodolist = (id: string) => dispatch(RemoveTodolistAC(id));

  const addTodolist = (title: string) => dispatch(addTodolistAC(title));

  return (
    <>
      <AddItemForm callback={addTodolist} />
      {todolists.map((todolist) => {
        let tasksForTodolist = tasks[todolist.id];
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
            removeTask={removeTask}
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
