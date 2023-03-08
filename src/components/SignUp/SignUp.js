import { useDispatch } from 'react-redux';
import { setUser } from 'redux/authSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

import Form from 'components/Form/Form';

const SignUp = () => {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) =>
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        )
      )
      .catch(e => console.log(e));
  };

  return <Form title="sin in" handleClick={handleLogin} />;
};

export default SignUp;
