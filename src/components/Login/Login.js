import { useDispatch } from 'react-redux';
import { setUser } from 'redux/authSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from 'components/Form';

const Login = ({ title, link, text, redirect }) => {
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
      .catch(e => {
        if (e.message === 'Firebase: Error (auth/wrong-password).') {
          return toast.error('Wrong password!');
        }
        if (e.message === 'Firebase: Error (auth/user-not-found).') {
          return toast.error('User not found!');
        }
      });
  };

  return (
    <>
      <Form
        title="Login"
        handleClick={handleLogin}
        formTitle={title}
        link={link}
        text={text}
        redirect={redirect}
      />
      <ToastContainer autoClose={3000} theme="light" />
    </>
  );
};

export default Login;
