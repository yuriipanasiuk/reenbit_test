import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/hooks';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { isRefreshing } = useAuth();

  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
