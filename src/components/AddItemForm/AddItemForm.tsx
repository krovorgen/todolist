import React, { ChangeEvent, FC, KeyboardEvent, memo, useState } from 'react';
import cn from 'classnames';

import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

import styles from './styles.module.scss';

export type AddItemFormProps = {
  callback: (newTaskTitle: string) => void;
  addClass?: string;
};

type ErrorValueType = string | null;

export const AddItemForm: FC<AddItemFormProps> = memo(({ callback, addClass }) => {
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
    if (error !== null) setError(null);
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
});
