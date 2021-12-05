import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import { Input } from '../Input';
import { Button } from '../Button';

import styles from './styles.module.scss';

interface IAddItemFormProps {
  callback: (newTaskTitle: string) => void;
}

type ErrorValueType = string | null;

export const AddItemForm: FC<IAddItemFormProps> = ({ callback }) => {
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
    <div className={styles.wrap}>
      <Input
        error={error}
        onChange={onChangeInputValue}
        onKeyPress={onEnterAddTask}
        value={newTaskTitle}
        sizes="sm"
        addClass={styles.input}
      />
      <Button onClick={onAddTask} variant="iconOnly" sizes="sm" addClass={styles.button}>
        +
      </Button>
    </div>
  );
};
