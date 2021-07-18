import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import { ErrorValueType, IAddItemFormProps } from './types';

import styles from '../Todolist/style.module.scss';

const AddItemForm: FC<IAddItemFormProps> = ({ callback }) => {
  const [error, setError] = useState<ErrorValueType>(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.currentTarget.value);
  };

  const onAddTask = () => {
    if (newTaskTitle.trim() !== '') {
      callback(newTaskTitle);
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

  return (
    <>
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
    </>
  );
};

export default AddItemForm;
