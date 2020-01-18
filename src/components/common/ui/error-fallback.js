import React from 'react';
import {Text} from '@blueprintjs/core';
import styled from 'styled-components';
import {path} from 'ramda';
import {fontSize} from 'styled-system';


const ErrorText = styled(Text).attrs(() => ({fontSize: [2, 4]}))`
   ${fontSize};
   color: ${path(['theme', 'colors', 'danger'])}
`;

const Component = () => (
  <ErrorText>Oops, something went wrong...</ErrorText>
);

export default Component
;
