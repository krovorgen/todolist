import React, { useCallback } from 'react';

import LogOutMIcon from '@alfalab/icons-glyph/LogOutMIcon';

import styles from './LogoutButton.module.scss';
import { useDispatch } from 'react-redux';
import { logoutTC } from '../../redux/thunk/auth-thunk';

export const LogoutButton = () => {
  const dispatch = useDispatch();

  const logoutUser = useCallback(() => {
    dispatch(logoutTC());
  }, [dispatch]);
  return (
    <button className={styles.root} onClick={logoutUser}>
      <LogOutMIcon />
    </button>
  );
};
