import React, { useCallback } from 'react';
import { AddItemForm } from '../../components/AddItemForm';
import { Todolist } from '../../components/Todolist';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '../../types';
import { addTodolistTC } from '../../redux/thunk/todolists-thunk';
import { Typography } from '@alfalab/core-components/typography';

import styles from './Main.module.scss';

export const Main = () => {
  const dispatch = useDispatch();
  const todolists = useSelector((state: RootStateType) => state.todolists);

  const addTodolist = useCallback(
    (title: string) => {
      dispatch(addTodolistTC(title));
    },
    [dispatch]
  );
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
    </div>
  );
};
