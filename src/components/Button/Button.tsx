import React, { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

type ButtonPropsType = React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement>;

export interface IButtonProps extends ButtonPropsType {
  addClass?: string;
  size?: 'xs' | 'sm' | 'md';
  variant?: 'iconOnly';
}

export const Button: FC<IButtonProps> = ({
  addClass,
  size = 'xs',
  variant,
  children,
  ...props
}) => {
  const appearances = {
    [styles.xs]: size === 'xs',
    [styles.sm]: size === 'sm',
    [styles.md]: size === 'md',
    [styles.iconOnly]: variant === 'iconOnly',
  };

  return (
    <button className={cn(styles['button'], appearances, addClass)} {...props}>
      {children}
    </button>
  );
};
