import styled from 'styled-components';
import {Button} from '@blueprintjs/core';
import {path} from 'ramda';
import {fontSize} from 'styled-system';
import propTypes from 'prop-types';

const Component = styled(Button)`
  background-image: none!important;
  color: ${props => path(['theme', 'buttons', props.appearance, 'color'])};
  background-color: ${props => path(['theme', 'buttons', props.appearance, 'backgroundColor'])};
  opacity: ${props => props.disabled ? 0.7 : 1};
  border:  ${props => path(['theme', 'buttons', props.appearance, 'border'])};
  ${fontSize};
`;

Component.propTypes = {
  appearance: propTypes.string,
  disabled: propTypes.bool,
  fontSize: propTypes.arrayOf(
    propTypes.oneOfType([
      propTypes.number,
      propTypes.string
  ]))
};

Component.defaultProps = {
  appearance: 'primary',
  fontSize: [2, 4],
  disabled: false
};

export default Component;
