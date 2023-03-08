import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks/hooks';

import { Title, StyledLink } from './HomePage.styled';

const HomePage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Helmet>
        <Title>Home</Title>
      </Helmet>
      {isLoggedIn ? (
        <Title>Chracters welcome page</Title>
      ) : (
        <div>
          <Title>
            To use the application "Characters" you should{' '}
            <StyledLink to="/register">register</StyledLink> or{' '}
            <StyledLink to="/login">log in</StyledLink>
          </Title>
        </div>
      )}
    </div>
  );
};

export default HomePage;
