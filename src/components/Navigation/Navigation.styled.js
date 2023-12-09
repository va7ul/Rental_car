import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  font-weight: 700;
  font-size: 24px;

  &.active {
    color: #0b44cd;
  }
`;
