import React, { ChangeEvent, FC, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

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
import { Checkbox } from '../atoms/Checkbox';

import styles from './style.module.scss';

export interface ITodolistProps {
  id: string;
  title: string;
  onChangeFilter: (filterValue: FilterType, id: string) => void;
  filter: FilterType;
  removeTodolist: (id: string) => void;
  onChangeTitleTodolist: (newValue: string, todolistId: string) => void;
}

export const Todolist: FC<ITodolistProps> = memo(
  ({ id, title, onChangeFilter, filter, removeTodolist, onChangeTitleTodolist }) => {
    const dispatch = useDispatch();

    const tasks = useSelector((state: RootStateType) => state.tasks[id]);

    const addTaskHandler = useCallback(
      (title: string) => {
        dispatch(addTaskAC(title, id));
      },
      [dispatch, id]
    );

    const onAllClickHandler = useCallback(() => onChangeFilter('all', id), [onChangeFilter, id]);
    const onActiveClickHandler = useCallback(
      () => onChangeFilter('active', id),
      [onChangeFilter, id]
    );
    const onCompletedClickHandler = useCallback(
      () => onChangeFilter('completed', id),
      [onChangeFilter, id]
    );

    const removeTodolistHandler = () => {
      removeTodolist(id);
    };

    const editTitleTodolist = useCallback(
      (newValue: string) => {
        onChangeTitleTodolist(newValue, id);
      },
      [onChangeTitleTodolist, id]
    );

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
          {tasksForTodolist.map((task) => {
            const onRemoveHandler = () => dispatch(removeTaskAC(task.id, id));
            const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
              dispatch(changeStatusAC(task.id, e.currentTarget.checked, id));
            };
            const newEditableValue = (newValue: string) => {
              dispatch(changeTaskTextAC(task.id, newValue, id));
            };
            return (
              <li className={cn(styles.item)} key={task.id}>
                <Checkbox
                  onChange={onChangeStatusHandler}
                  checked={task.checked}
                  addClass={cn(styles.checkbox, { [styles.checked]: task.checked })}
                >
                  <EditableSpan title={task.title} newEditableValue={newEditableValue} />
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
  }
);
