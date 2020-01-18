import React from 'react';
import {Text} from '@blueprintjs/core';
import styled from 'styled-components';
import {path} from 'ramda';
import {
fontSize, layout, space
} from 'styled-system';
import {Flex} from 'rebass';

const Header = styled(Flex).attrs(() => ({
  height: ['50px', '100px'],
  flex: 1,
  alignItems: 'center'
  }))`
  ${layout};
`;

const BrandIcon = styled.img.attrs({
  src: require('../../../assets/donkey.png'),
  alt: 'poll icon',
  height: ['30px', '60px'],
  ml: [3, 4]
  })`
  object-fit: cover;
  ${layout};
  ${space}
`;

const AppName = styled(Text).attrs(() => ({fontSize: [3, 7], ml: [1, 2]}))`
  color: ${path(['theme', 'colors', 'secondary'])};
  ${fontSize};
  ${space};
  font-weight: 1000;
`;

const Component = () => {
  return (
    <Header>
      <BrandIcon />
      <AppName>
       | Survey-donkey
      </AppName>
    </Header>
  );
};


export default Component
;
