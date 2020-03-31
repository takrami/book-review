import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const LogoContainer = styled(Link)`
  padding: 64px 32px;
`; 

export const MenuContainer = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  padding: 1em;
  margin: 1em;
`;