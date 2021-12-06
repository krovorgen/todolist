import React, { ChangeEvent, FC, memo, useState } from 'react';

import { Input } from '../atoms/Input';

import styles from './style.module.scss';

export interface IEditableSpanPropsType {
  title: string;
  newEditableValue: (newValue: string) => void;
}

export const EditableSpan: FC<IEditableSpanPropsType> = memo(({ title, newEditableValue }) => {
  const [statusEditable, setStatusEditable] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const activeEditMode = () => {
    setStatusEditable((v) => !v);
    setInputValue(title);
  };
  console.log('EditableSpan');

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
          addClass={styles.input}
          value={inputValue}
          onChange={onChangeTitleHandler}
          onBlur={activeViewMode}
          autoFocus
          sizes="sm"
        />
      ) : (
        <span onDoubleClick={activeEditMode} className={styles.text}>
          {title}
        </span>
      )}
    </>
  );
});
