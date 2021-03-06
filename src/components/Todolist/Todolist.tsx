import React, { FC, memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CloseMWhiteIcon } from '@alfalab/icons-classic/CloseMWhiteIcon';
import { Button } from '@alfalab/core-components/button';

import { FilterType, RootStateType, TodolistDataType } from '../../types';
import { EditableSpan } from '../EditableSpan';
import { AddItemForm } from '../AddItemForm';
import { addTaskTC, fetchTasksTC } from '../../redux/thunk/tasks-thunk';
import { deleteTodolistTC, updateTitleTodolistTC } from '../../redux/thunk/todolists-thunk';
import { Task } from './Task';

import styles from './style.module.scss';
import { changeTodolistFilterAC } from '../../redux/reducers/todolists-reducer';
import { TaskStatuses } from '../../redux/reducers/tasks-reducer';

export interface ITodolistProps {
  todolist: TodolistDataType;
}

export const Todolist: FC<ITodolistProps> = memo(({ todolist }) => {
  const { id: todolistId, title, filter, loadingStatus } = todolist;
  const dispatch = useDispatch();

  const tasks = useSelector((state: RootStateType) => state.tasks[todolistId]);

  const removeTodolist = useCallback(() => {
    dispatch(deleteTodolistTC(todolistId));
  }, [dispatch, todolistId]);

  const changeTitleTodolist = useCallback(
    (newValue: string) => {
      dispatch(updateTitleTodolistTC(todolistId, newValue));
    },
    [dispatch, todolistId]
  );

  const addTask = useCallback(
    (title: string) => {
      dispatch(addTaskTC(todolistId, title));
    },
    [dispatch, todolistId]
  );

  const onChangeFilter = useCallback(
    (filterValue: FilterType) => {
      dispatch(changeTodolistFilterAC({ todolistId, newFilter: filterValue }));
    },
    [dispatch, todolistId]
  );

  const onAllClickHandler = useCallback(() => onChangeFilter('all'), [onChangeFilter]);
  const onActiveClickHandler = useCallback(() => onChangeFilter('active'), [onChangeFilter]);
  const onCompletedClickHandler = useCallback(() => onChangeFilter('completed'), [onChangeFilter]);

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
        <EditableSpan title={title} newEditableValue={changeTitleTodolist} />
        <Button
          onClick={removeTodolist}
          view="primary"
          disabled={loadingStatus === 'loading'}
          leftAddons={<CloseMWhiteIcon />}
          size="s"
        />
      </div>
      <AddItemForm
        callback={addTask}
        disabled={loadingStatus === 'loading'}
        labelInput="Task title"
        addClass={styles.addTodolist}
      />
      <ul className={styles.items}>
        {tasksForTodolist.map((task) => (
          <Task key={task.id} task={task} todolistId={todolistId} />
        ))}
      </ul>
      {tasks.length !== 0 && (
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
});
