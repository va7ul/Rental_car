import { List, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <header>
      <nav>
        <List>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/catalog">Catalog</StyledLink>
          </li>
          <li>
            <StyledLink to="/favorites">Favorites</StyledLink>
          </li>
        </List>
      </nav>
      <hr />
    </header>
  );
};
