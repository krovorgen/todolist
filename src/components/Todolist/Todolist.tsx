import React, { FC, memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterType, RootStateType } from '../../types';
import { EditableSpan } from '../EditableSpan';
import { AddItemForm } from '../AddItemForm';
import { CloseMWhiteIcon } from '@alfalab/icons-classic/CloseMWhiteIcon';
import { Button } from '@alfalab/core-components/button';
import { Task } from './Task';

import styles from './style.module.scss';
import { TaskStatuses } from '../../redux/actions/types/tasks-actions.type';
import { addTaskTC, fetchTasksTC } from '../../redux/thunk/tasks-thunk';

export interface ITodolistProps {
  todolistId: string;
  title: string;
  onChangeFilter: (filterValue: FilterType, id: string) => void;
  filter: FilterType;
  removeTodolist: (id: string) => void;
  onChangeTitleTodolist: (newValue: string, todolistId: string) => void;
}

export const Todolist: FC<ITodolistProps> = memo(
  ({ todolistId, title, onChangeFilter, filter, removeTodolist, onChangeTitleTodolist }) => {
    const dispatch = useDispatch();

    const tasks = useSelector((state: RootStateType) => state.tasks[todolistId]);

    const addTask = useCallback(
      (title: string) => {
        dispatch(addTaskTC(todolistId, title));
      },
      [dispatch, todolistId]
    );

    const onAllClickHandler = useCallback(
      () => onChangeFilter('all', todolistId),
      [onChangeFilter, todolistId]
    );
    const onActiveClickHandler = useCallback(
      () => onChangeFilter('active', todolistId),
      [onChangeFilter, todolistId]
    );
    const onCompletedClickHandler = useCallback(
      () => onChangeFilter('completed', todolistId),
      [onChangeFilter, todolistId]
    );

    const removeTodolistHandler = useCallback(() => {
      removeTodolist(todolistId);
    }, [todolistId, removeTodolist]);

    const editTitleTodolist = useCallback(
      (newValue: string) => {
        onChangeTitleTodolist(newValue, todolistId);
      },
      [onChangeTitleTodolist, todolistId]
    );

    let tasksForTodolist = tasks;

    if (filter === 'active') {
      tasksForTodolist = tasksForTodolist.filter((item) => item.status !== TaskStatuses.Completed);
    }
    if (filter === 'completed') {
      tasksForTodolist = tasksForTodolist.filter((item) => item.status === TaskStatuses.Completed);
    }

    useEffect(() => {
      dispatch(fetchTasksTC(todolistId));
    }, [dispatch, todolistId]);

    return (
      <li className={styles.todolist}>
        <div className={styles.head}>
          <EditableSpan title={title} newEditableValue={editTitleTodolist} />
          <Button
            onClick={removeTodolistHandler}
            view="primary"
            leftAddons={<CloseMWhiteIcon />}
            size="s"
          />
        </div>
        <AddItemForm callback={addTask} labelInput="Task title" addClass={styles.addTodolist} />
        <ul className={styles.items}>
          {tasksForTodolist.map((task) => {
            return <Task key={task.id} task={task} todolistId={todolistId} />;
          })}
        </ul>
        {tasksForTodolist.length !== 0 && (
          <div className={styles.navigation}>
            <Button
              onClick={onAllClickHandler}
              size="xs"
              view={filter === 'all' ? 'primary' : 'secondary'}
            >
              All
            </Button>
            <Button
              onClick={onActiveClickHandler}
              size="xs"
              view={filter === 'active' ? 'primary' : 'secondary'}
            >
              Active
            </Button>
            <Button
              onClick={onCompletedClickHandler}
              size="xs"
              view={filter === 'completed' ? 'primary' : 'secondary'}
            >
              Completed
            </Button>
          </div>
        )}
      </li>
    );
  }
);
