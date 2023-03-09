import { useDispatch } from 'react-redux';
import { regUser } from 'redux/authSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from 'components/Form/Form';

const SignUp = ({ title, link, text, redirect }) => {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => dispatch(regUser()))
      .then(toast.success('Now you can log in!'))
      .catch(e => {
        if (e.message === 'Firebase: Error (auth/email-already-in-use).') {
          return toast.error('Email already in use!');
        }
      });
  };

  return (
    <>
      <Form
        title="Register"
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

export default SignUp;
