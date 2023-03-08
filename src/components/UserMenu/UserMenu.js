import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { Wraper, UserName, Button } from './UserMenu.styled';

import { logOut } from 'redux/authSlice';
import { useState } from 'react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState();

  const auth = getAuth();

  onAuthStateChanged(auth, user => {
    if (user) {
      const email = user.email;
      setUser(email);
    }
  });

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
