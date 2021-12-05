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
import { Button } from '../atoms/Button';

import styles from './style.module.scss';
import { Checkbox } from '../atoms/Checkbox';
import cn from 'classnames';

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
    <li className={styles.todolist}>
      <div className={styles.head}>
        <EditableSpan title={title} newEditableValue={editTitleTodolist} />
        <Button onClick={removeTodolistHandler} variant="iconOnly" icon="cross" sizes="sm" />
      </div>
      <AddItemForm callback={addTaskHandler} addClass={styles.addTodolist} />
      <ul className={styles.items}>
        {tasksForTodolist.map((todolist) => {
          const onRemoveHandler = () => dispatch(removeTaskAC(todolist.id, id));
          const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeStatusAC(todolist.id, e.currentTarget.checked, id));
          };
          const newEditableValue = (newValue: string) => {
            dispatch(changeTaskTextAC(todolist.id, newValue, id));
          };
          return (
            <li className={cn(styles.item)} key={todolist.id}>
              <Checkbox
                onChange={onChangeStatusHandler}
                checked={todolist.checked}
                addClass={cn(styles.checkbox, { [styles.checked]: todolist.checked })}
              >
                <EditableSpan title={todolist.title} newEditableValue={newEditableValue} />
              </Checkbox>
              <Button
                addClass={styles.deleteItem}
                onClick={onRemoveHandler}
                variant="iconOnly"
                icon="cross"
              />
            </li>
          );
        })}
      </ul>
      <div className={styles.navigation}>
        <Button onClick={onAllClickHandler} sizes="sm" active={filter === 'all'}>
          All
        </Button>
        <Button onClick={onActiveClickHandler} sizes="sm" active={filter === 'active'}>
          Active
        </Button>
        <Button onClick={onCompletedClickHandler} sizes="sm" active={filter === 'completed'}>
          Completed
        </Button>
      </div>
    </li>
  );
};
