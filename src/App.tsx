import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import { FilterType, RootStateType } from './types';
import {
  addTodolistAC,
  changeTodolistFilterAC,
  changeTodolistTitleAC,
  removeTodolistAC,
} from './redux/actions/todolists-actions';
import { AddItemForm } from './components/AddItemForm';
import { Typography } from '@alfalab/core-components/typography';
import { Todolist } from './components/Todolist';
import { fetchTodolistsThunk } from './redux/thunk/todolists-thunk';

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

  const addTodolist = useCallback(
    (title: string) => {
      dispatch(addTodolistAC(title));
      toast.success(`todolist ${title} was created`);
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchTodolistsThunk());
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
