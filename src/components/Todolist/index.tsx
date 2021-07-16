import React, { ChangeEvent, FC, useState, KeyboardEvent } from 'react';
import { ITodolistProps } from './types';

const Todolist: FC<ITodolistProps> = ({
  title,
  todolistItemData,
  onRemoveTask,
  onChangeFilter,
  addTask,
}) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  };

  const onAddTask = () => {
    addTask(newTaskTitle);
    setNewTaskTitle('');
  };

  const onEnterAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
    e.key === 'Enter' && onAddTask();
  };

  const onAllClickHandler = () => onChangeFilter('all');
  const onActiveClickHandler = () => onChangeFilter('active');
  const onCompletedClickHandler = () => onChangeFilter('completed');

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input value={newTaskTitle} onChange={onChangeInputValue} onKeyPress={onEnterAddTask} />
        <button onClick={onAddTask}>+</button>
      </div>
      <ul>
        {todolistItemData.map((todolist) => {
          const onRemoveHandler = () => onRemoveTask(todolist.id);
          return (
            <li key={todolist.id}>
              <input
                onClick={() => console.log(todolist.id)}
                type="checkbox"
                checked={todolist.checked}
              />
              <span>{todolist.title}</span>
              <button onClick={onRemoveHandler}>x</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={onAllClickHandler}>All</button>
        <button onClick={onActiveClickHandler}>Active</button>
        <button onClick={onCompletedClickHandler}>Completed</button>
      </div>
    </div>
  );
};

export default Todolist;
