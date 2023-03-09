import { useSelector } from 'react-redux';

import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import AuthNav from 'components/AuthNav';
import Container from 'components/Container';

import { Layout, StyledHeader } from './Header.styled';

import { selectIsLoggedIn } from 'redux/selectors';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <StyledHeader>
        <Container>
          <Layout>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Layout>
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
