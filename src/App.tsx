import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Typography } from '@alfalab/core-components/typography';

import { RootStateType } from './types';
import { AddItemForm } from './components/AddItemForm';
import { Todolist } from './components/Todolist';
import { Progress } from './components/Progress';
import { addTodolistTC, fetchTodolistsTC } from './redux/thunk/todolists-thunk';

import styles from './styles.module.scss';

export const App: FC = () => {
  const dispatch = useDispatch();
  const todolists = useSelector((state: RootStateType) => state.todolists);
  const statusApp = useSelector((state: RootStateType) => state.app.status);

  const addTodolist = useCallback(
    (title: string) => {
      dispatch(addTodolistTC(title));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchTodolistsTC());
  }, [dispatch]);

  return (
    <>
      {statusApp === 'loading' ? <Progress /> : null}
      <div className={`container`}>
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
      <ToastContainer
        position="bottom-left"
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
