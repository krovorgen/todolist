import React, { useCallback, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { AddItemForm } from '../../components/AddItemForm';
import { Todolist } from '../../components/Todolist';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../types';
import { addTodolistTC, fetchTodolistsTC } from '../../redux/thunk/todolists-thunk';
import { Typography } from '@alfalab/core-components/typography';

import styles from './Main.module.scss';
import { LogoutButton } from '../../components/LogoutButton';

export const Main = () => {
  const dispatch = useDispatch();
  const todolists = useSelector((state: RootStateType) => state.todolists);
  const isLogged = useSelector((state: RootStateType) => state.auth.isLogged);
  const addTodolist = useCallback(
    (title: string) => {
      dispatch(addTodolistTC(title));
    },
    [dispatch]
  );

  useEffect(() => {
    if (!isLogged) return;
    dispatch(fetchTodolistsTC());
  }, [dispatch, isLogged]);

  if (!isLogged) return <Navigate to="/login" />;

  return (
    <div className="container">
      <Typography.Title tag="h1" className={styles.title}>
        Todolist
      </Typography.Title>
      <AddItemForm callback={addTodolist} labelInput="Todolist title" addClass={styles.form} />
      <ul className={styles.list}>
        {todolists.map((todolist) => {
          return <Todolist key={todolist.id} todolist={todolist} />;
        })}
      </ul>
      <LogoutButton />
    </div>
  );
};
