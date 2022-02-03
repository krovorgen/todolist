import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';

import { RootStateType } from './types';
import { Progress } from './components/Progress';
import { fetchTodolistsTC } from './redux/thunk/todolists-thunk';
import { Main } from './pages/Main';
import { Login } from './pages/Login';

export const App: FC = () => {
  const dispatch = useDispatch();
  const statusApp = useSelector((state: RootStateType) => state.app.status);

  useEffect(() => {
    dispatch(fetchTodolistsTC());
  }, [dispatch]);

  return (
    <>
      {statusApp === 'loading' ? <Progress /> : null}
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
