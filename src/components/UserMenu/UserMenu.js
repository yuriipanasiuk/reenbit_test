import { useDispatch } from 'react-redux';

import { Wraper, UserName, Button, Link } from './UserMenu.styled';

import { logOut } from 'redux/authSlice';
import { useAuth } from 'hooks/hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Wraper>
      <UserName>Welcome, {user}</UserName>
      <Link to="/login">
        <Button type="button" onClick={handleLogout}>
          Log Out
        </Button>
      </Link>
    </Wraper>
  );
};
