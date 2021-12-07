import React, { ChangeEvent, FC, useCallback } from 'react';
import cn from 'classnames';

import { Checkbox } from '../../atoms/Checkbox';
import { EditableSpan } from '../../EditableSpan';
import { Button } from '../../atoms/Button';
import {
  changeStatusAC,
  changeTaskTextAC,
  removeTaskAC,
} from '../../../redux/actions/tasks-actions';
import { useDispatch } from 'react-redux';
import { TodolistItemData } from '../../../types';

import styles from '../style.module.scss';

type TaskProps = {
  task: TodolistItemData;
  todolistId: string;
};

export const Task: FC<TaskProps> = ({ task, todolistId }) => {
  const dispatch = useDispatch();

  const onRemoveHandler = () => dispatch(removeTaskAC(task.id, todolistId));

  const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStatusAC(task.id, e.currentTarget.checked, todolistId));
  };

  const newEditableValue = useCallback(
    (newValue: string) => {
      dispatch(changeTaskTextAC(task.id, newValue, todolistId));
    },
    [dispatch, task.id, todolistId]
  );
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
};
