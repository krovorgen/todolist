import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

import styles from './style.module.scss';
import cn from 'classnames';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type SuperCheckboxPropsType = DefaultInputPropsType & {
  onChangeChecked?: (checked: boolean) => void;
  spanClassName?: string;
  addClass?: string;
};

export const Checkbox: React.FC<SuperCheckboxPropsType> = ({
  type,
  onChange,
  onChangeChecked,
  className,
  spanClassName,
  children,
  addClass,
  ...restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeChecked && onChangeChecked(e.currentTarget.checked);
    onChange && onChange(e);
  };

  return (
    <label className={cn(styles['checkbox'], addClass)}>
      <input
        className={`${styles['checkbox__input']} visually-hidden`}
        type={'checkbox'}
        onChange={onChangeCallback}
        {...restProps}
      />
      {children && <span className={styles['checkbox__text']}>{children}</span>}
    </label>
  );
};
