import SignUp from 'components/SignUp/SignUp';
import { Link } from 'react-router-dom';
const RegisterPage = () => {
  return (
    <div>
      <h1>Registration</h1>
      <SignUp />
      <p>
        Already have an account
        <Link to="/login">login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
