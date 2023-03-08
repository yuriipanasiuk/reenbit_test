import { useDispatch } from 'react-redux';
import { setUser } from 'redux/authSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import Form from 'components/Form/Form';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) =>
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            isLoggedIn: true,
          })
        )
      )
      .catch(e => console.log(e));
  };

  return <Form title="sin in" handleClick={handleLogin} />;
};

export default Login;
