import { StyledLink } from './Navigation.styled';

import { useAuth } from 'hooks/hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to="/home">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/characters">Characters</StyledLink>}
    </nav>
  );
};
