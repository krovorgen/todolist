import React, { ChangeEvent, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addTaskAC,
  changeStatusAC,
  changeTaskTextAC,
  removeTaskAC,
} from '../../redux/actions/tasks-actions';
import { FilterType, RootStateType } from '../../types';
import { EditableSpan } from '../EditableSpan';
import { AddItemForm } from '../AddItemForm';

import styles from './style.module.scss';

export interface ITodolistProps {
  id: string;
  title: string;
  onChangeFilter: (filterValue: FilterType, id: string) => void;
  filter: FilterType;
  removeTodolist: (id: string) => void;
  onChangeTitleTodolist: (newValue: string, todolistId: string) => void;
}

export const Todolist: FC<ITodolistProps> = ({
  id,
  title,
  onChangeFilter,
  filter,
  removeTodolist,
  onChangeTitleTodolist,
}) => {
  const dispatch = useDispatch();

  const tasks = useSelector((state: RootStateType) => state.tasks[id]);

  const addTaskHandler = (title: string) => {
    dispatch(addTaskAC(title, id));
  };

  const onAllClickHandler = () => onChangeFilter('all', id);
  const onActiveClickHandler = () => onChangeFilter('active', id);
  const onCompletedClickHandler = () => onChangeFilter('completed', id);

  const removeTodolistHandler = () => {
    removeTodolist(id);
  };

  const editTitleTodolist = (newValue: string) => {
    onChangeTitleTodolist(newValue, id);
  };

  let tasksForTodolist = tasks;
  if (filter === 'active') {
    tasksForTodolist = tasksForTodolist.filter((item) => !item.checked);
  }
  if (filter === 'completed') {
    tasksForTodolist = tasksForTodolist.filter((item) => item.checked);
  }

  return (
    <div>
      <h3>
        <EditableSpan title={title} newEditableValue={editTitleTodolist} />{' '}
        <button onClick={removeTodolistHandler}>x</button>
      </h3>

      <AddItemForm callback={addTaskHandler} />
      <ul>
        {tasksForTodolist.map((todolist) => {
          const onRemoveHandler = () => dispatch(removeTaskAC(todolist.id, id));
          const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeStatusAC(todolist.id, e.currentTarget.checked, id));
          };
          const newEditableValue = (newValue: string) => {
            dispatch(changeTaskTextAC(todolist.id, newValue, id));
          };
          return (
            <li key={todolist.id} className={todolist.checked ? styles['is-done'] : ''}>
              <input onChange={onChangeStatusHandler} type="checkbox" checked={todolist.checked} />
              <EditableSpan title={todolist.title} newEditableValue={newEditableValue} />
              <button onClick={onRemoveHandler}>x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button
          onClick={onAllClickHandler}
          className={filter === 'all' ? styles['button-filter--active'] : ''}
        >
          All
        </button>
        <button
          onClick={onActiveClickHandler}
          className={filter === 'active' ? styles['button-filter--active'] : ''}
        >
          Active
        </button>
        <button
          onClick={onCompletedClickHandler}
          className={filter === 'completed' ? styles['button-filter--active'] : ''}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
