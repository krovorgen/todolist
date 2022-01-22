import React, { ChangeEvent, FC, memo, useState } from 'react';

import { Input } from '@alfalab/core-components/input';
import { Typography } from '@alfalab/core-components/typography';

import styles from './style.module.scss';

export interface IEditableSpanPropsType {
  title: string;
  newEditableValue: (newValue: string) => void;
  inputSize?: 's' | 'm' | 'l' | 'xl';
}

export const EditableSpan: FC<IEditableSpanPropsType> = memo(
  ({ title, newEditableValue, inputSize = 's' }) => {
    const [statusEditable, setStatusEditable] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');

    const activeEditMode = () => {
      setStatusEditable((v) => !v);
      setInputValue(title);
    };

    const activeViewMode = () => {
      setStatusEditable((v) => !v);
      newEditableValue(inputValue);
    };

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value);
    };

    return (
      <>
        {statusEditable ? (
          <Input
            className={styles.input}
            value={inputValue}
            onChange={onChangeTitleHandler}
            onBlur={activeViewMode}
            autoFocus
            size={inputSize}
          />
        ) : (
          <Typography.Text onDoubleClick={activeEditMode} className={styles.text}>
            {title}
          </Typography.Text>
        )}
      </>
    );
  }
);
