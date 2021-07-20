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

  const { todolists } = useSelector((state: RootStateType) => state);

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
        return (
          <Todolist
            key={todolist.id}
            id={todolist.id}
            title={todolist.title}
            onChangeFilter={onChangeFilter}
            filter={todolist.filter}
            removeTodolist={removeTodolist}
            onChangeTitleTodolist={onChangeTitleTodolist}
          />
        );
      })}
    </>
  );
};

export default App;
