import React, { useState } from 'react';
import cn from 'classnames';
import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Input } from '@alfalab/core-components/input';
import { PasswordInput } from '@alfalab/core-components/password-input';
import { Typography } from '@alfalab/core-components/typography';
import { Checkbox } from '@alfalab/core-components/checkbox';
import { Button } from '@alfalab/core-components/button';
import { Tooltip } from '@alfalab/core-components/tooltip';

import { composeValidators, required } from '../../helpers/helpers/validators';
import { loginTC } from '../../redux/thunk/auth-thunk';
import { LoginDataResponse } from '../../api';
import { RootStateType } from '../../types';

import styles from './Login.module.scss';

export const Login = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state: RootStateType) => state.auth.isLogged);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const onSubmit = (formData: LoginDataResponse) => {
    dispatch(loginTC(formData));
  };

  if (isLogged) return <Navigate to="/" />;
  return (
    <div className={cn('container', styles.root)}>
      <div className={styles.wrap}>
        <Typography.Title className={styles.title} tag="h1">
          Login
        </Typography.Title>
        <Form onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field
                name="email"
                initialValue="free@samuraijs.com"
                validate={composeValidators(required)}
              >
                {(props) => (
                  <Input
                    {...props.input}
                    error={props.meta && props.meta.touched && props.meta.error}
                    className={cn(styles.mb16)}
                    type="text"
                    label="email"
                    block
                  />
                )}
              </Field>
              <Field name="password" initialValue="free" validate={composeValidators(required)}>
                {(props) => (
                  <PasswordInput
                    {...props.input}
                    error={props.meta && props.meta.touched && props.meta.error}
                    className={cn(styles.mb16)}
                    type="password"
                    passwordVisible={passwordVisible}
                    onPasswordVisibleChange={setPasswordVisible}
                    block
                  />
                )}
              </Field>
              <Field type="checkbox" name="rememberMe">
                {(props) => (
                  <Checkbox {...props.input} className={styles.mb16} label="Remember me" />
                )}
              </Field>
              <Button size="s" block view="primary" type="submit">
                LOGIN
              </Button>
            </form>
          )}
        </Form>
      </div>
      <Tooltip
        targetClassName={styles.tooltip}
        position="left"
        trigger="click"
        content={
          <div style={{ width: '215px' }}>
            login: free@samuraijs.com
            <br />
            password: free
          </div>
        }
        fallbackPlacements={['bottom', 'top']}
      >
        <div style={{ padding: '15px', border: '1px dashed rgba(0, 0, 0, 0.1)' }}>
          ???????????????? ????????
        </div>
      </Tooltip>
    </div>
  );
};
