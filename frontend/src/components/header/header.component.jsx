import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { HeaderContainer, LogoContainer,MenuContainer, OptionLink } from './header.styles';

const Header = () => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo />
    </LogoContainer>
    <MenuContainer>
      <OptionLink to="/example1">
        Example1
      </OptionLink>
      <OptionLink to="/example2">
        Example2
      </OptionLink>
      <OptionLink to="/example3">
        Example3
      </OptionLink>
    </MenuContainer>
  </HeaderContainer>
);

export default Header;