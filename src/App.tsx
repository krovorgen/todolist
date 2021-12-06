import React, { FC, useCallback } from 'react';
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

import styles from './styles.module.scss';

export const App: FC = () => {
  const dispatch = useDispatch();
  const { todolists } = useSelector((state: RootStateType) => state);

  const onChangeFilter = useCallback(
    (filterValue: FilterType, id: string) => {
      dispatch(changeTodolistFilterAC(id, filterValue));
    },
    [dispatch]
  );

  const onChangeTitleTodolist = useCallback(
    (newValue: string, todolistId: string) => {
      dispatch(changeTodolistTitleAC(todolistId, newValue));
    },
    [dispatch]
  );

  const removeTodolist = useCallback((id: string) => dispatch(removeTodolistAC(id)), [dispatch]);

  const addTodolist = useCallback((title: string) => dispatch(addTodolistAC(title)), [dispatch]);

  return (
    <div className={`container`}>
      <AddItemForm callback={addTodolist} addClass={styles.form} />
      <ul className={styles.list}>
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
      </ul>
    </div>
  );
};
