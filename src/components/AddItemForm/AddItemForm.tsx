import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

import styles from './styles.module.scss';
import cn from 'classnames';

interface IAddItemFormProps {
  callback: (newTaskTitle: string) => void;
  addClass?: string;
}

type ErrorValueType = string | null;

export const AddItemForm: FC<IAddItemFormProps> = ({ callback, addClass }) => {
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
    <div className={cn(styles.wrap, addClass)}>
      <Input
        error={error}
        onChange={onChangeInputValue}
        onKeyPress={onEnterAddTask}
        value={newTaskTitle}
        sizes="sm"
        addClass={styles.input}
      />
      <Button
        onClick={onAddTask}
        variant="iconOnly"
        sizes="sm"
        icon="plus"
        addClass={styles.button}
      />
    </div>
  );
};
