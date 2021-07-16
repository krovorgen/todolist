import React, { ChangeEvent, FC, useState, KeyboardEvent } from 'react';
import { ITodolistProps } from './types';

import styles from './style.module.scss';

const Todolist: FC<ITodolistProps> = ({
  title,
  todolistItemData,
  onRemoveTask,
  onChangeFilter,
  addTask,
  onChangeStatus,
  filter,
}) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  };

  const onAddTask = () => {
    if (newTaskTitle.trim() !== '') {
      addTask(newTaskTitle);
      setNewTaskTitle('');
    } else {
      setError('Invalid value');
      setNewTaskTitle('');
    }
  };

  const onEnterAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    e.key === 'Enter' && onAddTask();
  };

  const onAllClickHandler = () => onChangeFilter('all');
  const onActiveClickHandler = () => onChangeFilter('active');
  const onCompletedClickHandler = () => onChangeFilter('completed');

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          className={error !== null ? styles['error__input'] : ''}
          value={newTaskTitle}
          onChange={onChangeInputValue}
          onKeyPress={onEnterAddTask}
        />
        <button onClick={onAddTask}>+</button>
      </div>
      {error && <span className={styles['error__message']}>{error}</span>}
      <ul>
        {todolistItemData.map((todolist) => {
          const onRemoveHandler = () => onRemoveTask(todolist.id);
          const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onChangeStatus(todolist.id, e.currentTarget.checked);
          };
          return (
            <li key={todolist.id}>
              <input onChange={onChangeStatusHandler} type="checkbox" checked={todolist.checked} />
              <span className={todolist.checked ? styles['is-done'] : ''}>{todolist.title}</span>
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

export default Todolist;
