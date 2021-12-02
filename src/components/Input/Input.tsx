/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export type InputPropsType = React.HTMLAttributes<HTMLInputElement>;

export interface IInputProps extends InputPropsType {
  addClass?: string;
  size?: 'xs' | 'sm' | 'md';
}

export const Input: FC<IInputProps> = ({
  addClass,
  size = 'xs',
  children,
  ...props
}) => {
  const appearances = {
    [styles.xs]: size === 'xs',
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
  };

  return (
    <div className={styles.wrap}>
      <input className={classNames(styles.input, addClass, appearances)} {...props} />
    </div>
  );
};
