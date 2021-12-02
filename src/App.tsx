import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FilterType, RootStateType } from './types';
import {
  addTodolistAC,
  changeTodolistFilterAC,
  changeTodolistTitleAC,
  removeTodolistAC,
} from './redux/actions/todolists-actions';
import { AddItemForm } from './components/AddItemForm';
import { Todolist } from './components/Todolist';
import { Input } from 'components/Input';

export const App: FC = () => {
  const dispatch = useDispatch();

  const { todolists } = useSelector((state: RootStateType) => state);

  const onChangeFilter = (filterValue: FilterType, id: string) => {
    dispatch(changeTodolistFilterAC(id, filterValue));
  };

  const onChangeTitleTodolist = (newValue: string, todolistId: string) => {
    dispatch(changeTodolistTitleAC(todolistId, newValue));
  };

  const removeTodolist = (id: string) => dispatch(removeTodolistAC(id));

  const addTodolist = (title: string) => dispatch(addTodolistAC(title));

  return (
    <>
      <AddItemForm callback={addTodolist} />
      <Input size="xs" /> <br />
      <Input size="sm" /> <br />
      <Input size="md" />
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
