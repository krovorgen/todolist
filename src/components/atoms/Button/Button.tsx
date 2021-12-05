import React, { FC } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

type ButtonPropsType = React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement>;

export interface IButtonProps extends ButtonPropsType {
  addClass?: string;
  sizes?: 'xs' | 'sm' | 'md';
  active?: boolean;
  variant?: 'iconOnly';
}

export const Button: FC<IButtonProps> = ({
  addClass,
  sizes = 'xs',
  variant,
  active,
  children,
  ...props
}) => {
  const appearances = {
    [styles.xs]: sizes === 'xs',
    [styles.sm]: sizes === 'sm',
    [styles.md]: sizes === 'md',
    [styles.iconOnly]: variant === 'iconOnly',
    [styles.active]: active,
  };

  return (
    <button className={cn(styles['button'], appearances, addClass)} {...props}>
      {children}
    </button>
  );
};
