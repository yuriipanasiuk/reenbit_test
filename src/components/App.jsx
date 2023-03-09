import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/hooks';
import { refreshUser } from 'redux/authSlice';

import SharedLayout from './SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import { RestrictedRoute } from './RestrictedRoute';

const Сharacters = lazy(() => import('../pages/Сharacters'));
const СharacterDetails = lazy(() => import('../pages/СharacterDetails'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing, token } = useAuth();

  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(refreshUser());
  }, [dispatch, token]);

  return (
    !isRefreshing && (
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<HomePage />} />
            <Route path="characters" element={<Сharacters />} />
            <Route
              path="characters/:characterId"
              element={<СharacterDetails />}
            />
            <Route
              path="register"
              element={
                <RestrictedRoute component={RegisterPage} redirectTo="/login" />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  component={LoginPage}
                  redirectTo="/characters"
                />
              }
            />
          </Route>
        </Routes>
      </div>
    )
  );
};
