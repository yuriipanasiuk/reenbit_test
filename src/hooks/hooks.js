import { useSelector } from 'react-redux';

import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectToken,
} from '../redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    token,
  };
};
