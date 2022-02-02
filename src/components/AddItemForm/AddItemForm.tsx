import React, { ChangeEvent, FC, KeyboardEvent, memo, useState } from 'react';
import cn from 'classnames';

import { Input } from '@alfalab/core-components/input';
import { Button } from '@alfalab/core-components/button';
import { PaymentPlusMWhiteIcon } from '@alfalab/icons-classic/PaymentPlusMWhiteIcon';

import styles from './styles.module.scss';

export type AddItemFormProps = {
  callback: (newTaskTitle: string) => void;
  addClass?: string;
  labelInput: string;
  disabled?: boolean;
};

type ErrorValueType = string | null;

export const AddItemForm: FC<AddItemFormProps> = memo(
  ({ callback, addClass, labelInput, disabled }) => {
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
          label={labelInput}
          disabled={disabled}
          size="s"
          className={styles.input}
        />
        <Button
          view="primary"
          onClick={onAddTask}
          disabled={disabled}
          size="s"
          leftAddons={<PaymentPlusMWhiteIcon />}
          className={styles.button}
        />
      </div>
    );
  }
);
