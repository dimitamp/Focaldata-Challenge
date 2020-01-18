import React from 'react';
import styled from 'styled-components';
import {Box} from 'rebass';
import {layout} from 'styled-system';

const MainContainer = styled(Box).attrs(() => ({
  height: ['calc(100vh - 50px)', 'calc(100vh - 100px)'],
  width: '100%'
}))`
  ${layout};
  overflow-y:auto;
`;


export const Component = ({children}) => (
  <MainContainer>
    {children}
  </MainContainer>
);

export default Component;
