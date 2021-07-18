import React, { ChangeEvent, FC } from 'react';

import { ITodolistProps } from './types';
import AddItemForm from '../AddItemForm';

import styles from './style.module.scss';
import EditableSpan from '../EditableSpan';

const Todolist: FC<ITodolistProps> = ({
  id,
  title,
  todolistItemData,
  onRemoveTask,
  onChangeFilter,
  addTask,
  onChangeStatus,
  filter,
  removeTodolist,
  onChangeTaskText,
  onChangeTitleTodolist,
}) => {
  const onAllClickHandler = () => onChangeFilter('all', id);
  const onActiveClickHandler = () => onChangeFilter('active', id);
  const onCompletedClickHandler = () => onChangeFilter('completed', id);

  const removeTodolistHandler = () => {
    removeTodolist(id);
  };

  const addTaskHandler = (title: string) => {
    addTask(title, id);
  };

  const editTitleTodolist = (newValue: string) => {
    onChangeTitleTodolist(newValue, id);
  };

  return (
    <div>
      <h3>
        <EditableSpan title={title} newEditableValue={editTitleTodolist} />{' '}
        <button onClick={removeTodolistHandler}>x</button>
      </h3>

      <AddItemForm callback={addTaskHandler} />
      <ul>
        {todolistItemData.map((todolist) => {
          const onRemoveHandler = () => onRemoveTask(todolist.id, id);
          const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
            onChangeStatus(todolist.id, e.currentTarget.checked, id);
          };
          const newEditableValue = (newValue: string) => {
            onChangeTaskText(todolist.id, newValue, id);
          };
          return (
            <li key={todolist.id} className={todolist.checked ? styles['is-done'] : ''}>
              <input onChange={onChangeStatusHandler} type="checkbox" checked={todolist.checked} />
              <EditableSpan title={todolist.title} newEditableValue={newEditableValue} />
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
