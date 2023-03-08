import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/hooks';
import { Wraper, UserName, Button } from './UserMenu.styled';

import { logOut } from 'redux/authSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wraper>
      <UserName>
        Welcome,
        {user}
      </UserName>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Wraper>
  );
};
