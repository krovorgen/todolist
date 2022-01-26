import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { FilterType, RootStateType } from './types';
import { changeTodolistFilterAC } from './redux/actions/todolists-actions';
import { AddItemForm } from './components/AddItemForm';
import { Typography } from '@alfalab/core-components/typography';
import { Todolist } from './components/Todolist';
import {
  addTodolistTC,
  deleteTodolistTC,
  fetchTodolistsTC,
  updateTitleTodolistTC,
} from './redux/thunk/todolists-thunk';

import styles from './styles.module.scss';

export const App: FC = () => {
  const dispatch = useDispatch();
  const todolists = useSelector((state: RootStateType) => state.todolists);

  const onChangeFilter = useCallback(
    (filterValue: FilterType, id: string) => {
      dispatch(changeTodolistFilterAC(id, filterValue));
    },
    [dispatch]
  );

  const removeTodolist = useCallback(
    (todolistId: string) => {
      dispatch(deleteTodolistTC(todolistId));
    },
    [dispatch]
  );

  const addTodolist = useCallback(
    (title: string) => {
      dispatch(addTodolistTC(title));
    },
    [dispatch]
  );

  const changeTitleTodolist = useCallback(
    (newValue: string, todolistId: string) => {
      dispatch(updateTitleTodolistTC(todolistId, newValue));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchTodolistsTC());
  }, [dispatch]);

  return (
    <>
      <div className={`container`}>
        <Typography.Title tag="h1" className={styles.title}>
          Todolist
        </Typography.Title>
        <AddItemForm callback={addTodolist} labelInput="Todolist title" addClass={styles.form} />
        <ul className={styles.list}>
          {todolists.map((todolist) => {
            return (
              <Todolist
                key={todolist.id}
                todolistId={todolist.id}
                title={todolist.title}
                onChangeFilter={onChangeFilter}
                filter={todolist.filter}
                removeTodolist={removeTodolist}
                onChangeTitleTodolist={changeTitleTodolist}
              />
            );
          })}
        </ul>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
