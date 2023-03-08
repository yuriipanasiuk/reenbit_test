import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/hooks';

import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Сharacters = lazy(() => import('../pages/Сharacters'));
const СharacterDetails = lazy(() => import('../pages/СharacterDetails'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    // dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<HomePage />} />
            <Route
              path="characters"
              element={
                <PrivateRoute component={Сharacters} redirectTo="/login" />
              }
            />
            <Route
              path="characters/:characterId"
              element={
                <PrivateRoute
                  component={СharacterDetails}
                  redirectTo="/login"
                />
              }
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
