import SignUp from 'components/SignUp/SignUp';

const RegisterPage = () => {
  return (
    <div>
      <SignUp
        title="Registration"
        link="Login"
        redirect="/login"
        text="Already have an account?"
      />
    </div>
  );
};

export default RegisterPage;
