import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks/hooks';

import Container from 'components/Container';
import { Title, StyledLink, Wraper } from './HomePage.styled';

const HomePage = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Wraper>
      <Container>
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
      </Container>
    </Wraper>
  );
};

export default HomePage;
