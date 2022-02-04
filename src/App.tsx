import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';

import { RootStateType } from './types';
import { Progress } from './components/Progress';
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { initializedTC } from './redux/thunk/app-thunk';
import { Preloader } from './components/Preloader';

export const App: FC = () => {
  const dispatch = useDispatch();
  const { status, initialized } = useSelector((state: RootStateType) => state.app);

  useEffect(() => {
    dispatch(initializedTC());
  }, [dispatch]);

  if (initialized) return <Preloader />;

  return (
    <>
      {status === 'loading' ? <Progress /> : null}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};
