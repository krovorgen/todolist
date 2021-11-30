import React, { ChangeEvent, FC, useState } from 'react';

export interface IEditableSpanPropsType {
  title: string;
  newEditableValue: (newValue: string) => void;
}

export const EditableSpan: FC<IEditableSpanPropsType> = ({ title, newEditableValue }) => {
  const [statusEditable, setStatusEditable] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const activeEditMode = () => {
    setStatusEditable(true);
    setInputValue(title);
  };

  const activeViewMode = () => {
    setStatusEditable(false);
    newEditableValue(inputValue);
  };

  const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  return (
    <>
      {statusEditable ? (
        <input
          value={inputValue}
          onChange={onChangeTitleHandler}
          onBlur={activeViewMode}
          autoFocus
        />
      ) : (
        <span onDoubleClick={activeEditMode}>{title}</span>
      )}
    </>
  );
};
