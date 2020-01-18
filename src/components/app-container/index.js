import React from 'react';
import styled from 'styled-components';
import {Box} from 'rebass';
import AppMain from '../app-main';
import AppHeader from '../app-header';

const AppContainer = styled(Box).attrs(() => ({bg: 'primary'}))``;

const  Component = ({children}) => (
  <AppContainer>
    <AppHeader />
    <AppMain>{children}</AppMain>
  </AppContainer>
);

export default Component;
