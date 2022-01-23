import React, { FC, memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTaskAC } from '../../redux/actions/tasks-actions';
import { FilterType, RootStateType } from '../../types';
import { EditableSpan } from '../EditableSpan';
import { AddItemForm } from '../AddItemForm';
import { CloseMWhiteIcon } from '@alfalab/icons-classic/CloseMWhiteIcon';
import { Button } from '@alfalab/core-components/button';
import { Task } from './Task';

import styles from './style.module.scss';
import { toast } from 'react-toastify';
import { TaskStatuses } from '../../redux/actions/types/tasks-actions.type';
import { fetchTasksThunk } from '../../redux/thunk/tasks-thunk';

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
        toast.success(`task ${title} was created`);
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
      tasksForTodolist = tasksForTodolist.filter((item) => item.status !== TaskStatuses.Completed);
    }
    if (filter === 'completed') {
      tasksForTodolist = tasksForTodolist.filter((item) => item.status === TaskStatuses.Completed);
    }

    useEffect(() => {
      dispatch(fetchTasksThunk(id));
    }, [dispatch, id]);

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
        <AddItemForm
          callback={addTaskHandler}
          labelInput="Task title"
          addClass={styles.addTodolist}
        />
        <ul className={styles.items}>
          {tasksForTodolist.map((task) => {
            return <Task key={task.id} task={task} todolistId={id} />;
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
