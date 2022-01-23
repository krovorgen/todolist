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

import styles from '../style.module.scss';
import { TaskStatuses } from '../../../redux/actions/types/tasks-actions.type';
import { TodolistTask } from '../../../api';

export type TaskProps = {
  task: TodolistTask;
  todolistId: string;
};

export const Task: FC<TaskProps> = memo(({ task, todolistId }) => {
  const dispatch = useDispatch();

  const onRemoveHandler = () => dispatch(removeTaskAC(task.id, todolistId));

  const onChangeStatusHandler = (e?: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeStatusAC(
        task.id,
        e?.currentTarget.checked ? TaskStatuses.Completed : TaskStatuses.New,
        todolistId
      )
    );
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
        checked={task.status === TaskStatuses.Completed}
        onChange={onChangeStatusHandler}
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
