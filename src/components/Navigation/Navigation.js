import { useAuth } from 'hooks/hooks';

import { StyledLink, Nav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <StyledLink to="/home">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/characters">Characters</StyledLink>}
    </Nav>
  );
};
