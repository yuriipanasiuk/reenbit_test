import { useSelector } from 'react-redux';

import { Navigation } from 'components/Navigation/Navigation';
import { Layout, StyledHeader } from './Header.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { selectIsLoggedIn } from 'redux/selectors';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <StyledHeader>
        <Layout>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Layout>
      </StyledHeader>
    </>
  );
};

export default Header;
