import React from 'react';
import useWindowSize from '@rehooks/window-size';
import {path} from 'ramda';
import {Icon} from '@blueprintjs/core';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledIcon = styled(Icon).attrs((props) => ({
 icon: props.icon,
 iconSize: props.large ? 20 : 16,
}))`
  color: ${path(['theme', 'colors', 'primary'])};
`;

const Component = ({icon}) => {
 const {innerWidth} = useWindowSize();
 const large = innerWidth > 600 ? 1 : 0;
 return <StyledIcon large={large} icon={icon} />;
};

Component.propTypes = {icon: propTypes.string.isRequired};

export default Component;
