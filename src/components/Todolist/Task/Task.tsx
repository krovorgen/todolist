import React, { ChangeEvent, FC, memo, useCallback } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import { EditableSpan } from '../../EditableSpan';
import { Checkbox } from '@alfalab/core-components/checkbox';
import { Button } from '@alfalab/core-components/button';
import { CloseXsWhiteIcon } from '@alfalab/icons-classic/CloseXsWhiteIcon';
import {
  changeStatusAC,
  changeTaskTextAC,
  removeTaskAC,
} from '../../../redux/actions/tasks-actions';
import { TodolistItemData } from '../../../types';

import styles from '../style.module.scss';

export type TaskProps = {
  task: TodolistItemData;
  todolistId: string;
};

export const Task: FC<TaskProps> = memo(({ task, todolistId }) => {
  const dispatch = useDispatch();

  const onRemoveHandler = () => dispatch(removeTaskAC(task.id, todolistId));

  const onChangeStatusHandler = (e?: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    dispatch(changeStatusAC(task.id, e.currentTarget.checked, todolistId));
  };

  const newEditableValue = useCallback(
    (newValue: string) => {
      dispatch(changeTaskTextAC(task.id, newValue, todolistId));
    },
    [dispatch, task.id, todolistId]
  );

  return (
    <li className={cn(styles.item)}>
      <Checkbox
        onChange={onChangeStatusHandler}
        checked={task.checked}
        className={cn(styles.checkbox)}
      />
      <EditableSpan title={task.title} newEditableValue={newEditableValue} />
      <Button
        className={styles.deleteItem}
        onClick={onRemoveHandler}
        size="xxs"
        view="primary"
        leftAddons={<CloseXsWhiteIcon />}
      />
    </li>
  );
});
