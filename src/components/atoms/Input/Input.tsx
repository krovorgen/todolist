import React, { DetailedHTMLProps, FC, InputHTMLAttributes, useState } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

export type InputElementPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface IInputProps {
  addClass?: string;
  sizes?: 'xs' | 'sm' | 'md';
  error?: string | null;
}

export const Input: FC<IInputProps & InputElementPropsType> = ({
  addClass,
  sizes = 'xs',
  error,
  children,
  ...props
}) => {
  const [focusInput, setFocusInput] = useState<boolean>(false);
  const appearances = {
    [styles.xs]: sizes === 'xs',
    [styles.sm]: sizes === 'sm',
    [styles.md]: sizes === 'md',
  };

  const focusHandler = () => setFocusInput((v) => !v);

  return (
    <div className={cn(styles.box, addClass)}>
      <div className={cn(styles.wrap, { [styles.active]: focusInput, [styles.error]: error })}>
        <input className={cn(styles.input, appearances)} onFocus={focusHandler} {...props} />
      </div>
      {error ? <p className={styles.textError}>{error}</p> : null}
    </div>
  );
};
