import React from 'react';
import Directory from '../../components/directory/directory.component';

import { MainWapper, HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <MainWapper>
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  </MainWapper>
);

export default HomePage;