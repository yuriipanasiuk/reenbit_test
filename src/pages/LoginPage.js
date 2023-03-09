import Login from 'components/Login/Login';

const LoginPage = () => {
  return (
    <div>
      <Login
        title="Login"
        link="Register"
        redirect="/register"
        text="Don't have an account?"
      />
    </div>
  );
};

export default LoginPage;
