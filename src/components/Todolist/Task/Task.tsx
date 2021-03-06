import React, { ChangeEvent, FC, memo, useCallback } from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';

import { EditableSpan } from '../../EditableSpan';
import { Checkbox } from '@alfalab/core-components/checkbox';
import { Button } from '@alfalab/core-components/button';
import { TodolistTask } from '../../../api';
import { deleteTaskTC, updateTaskTC } from '../../../redux/thunk/tasks-thunk';
import { CloseXsWhiteIcon } from '@alfalab/icons-classic/CloseXsWhiteIcon';
import { TaskStatuses } from '../../../redux/reducers/tasks-reducer';

import styles from '../style.module.scss';

export type TaskProps = {
  task: TodolistTask;
  todolistId: string;
};

export const Task: FC<TaskProps> = memo(({ task, todolistId }) => {
  const dispatch = useDispatch();

  const removeTask = useCallback(() => {
    dispatch(deleteTaskTC(todolistId, task.id));
  }, [dispatch, task.id, todolistId]);

  const changeStatusTask = useCallback(
    (e?: ChangeEvent<HTMLInputElement>) => {
      dispatch(
        updateTaskTC(
          task.id,
          { status: e?.currentTarget.checked ? TaskStatuses.Completed : TaskStatuses.New },
          todolistId
        )
      );
    },
    [dispatch, task.id, todolistId]
  );

  const newEditableValue = useCallback(
    (newValue: string) => {
      dispatch(updateTaskTC(task.id, { title: newValue }, todolistId));
    },
    [dispatch, task.id, todolistId]
  );
  return (
    <li className={cn(styles.item)}>
      <Checkbox
        checked={task.status === TaskStatuses.Completed}
        onChange={changeStatusTask}
        className={cn(styles.checkbox)}
      />
      <EditableSpan title={task.title} newEditableValue={newEditableValue} />
      <Button
        className={styles.deleteItem}
        onClick={removeTask}
        size="xxs"
        view="primary"
        leftAddons={<CloseXsWhiteIcon />}
      />
    </li>
  );
});
