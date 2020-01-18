import {Box} from 'rebass';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {space} from 'styled-system';

const Component = styled(Box).attrs( () => ({padding: [2, 3, 4]}))`
  display: flex;
  flex: 1;
  min-height: 100%;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  flex-direction: ${props => props.flexDirection};
  ${space}
`;

Component.propTypes = {
  justifyContent: propTypes.string,
  alignItems: propTypes.string,
  flexDirection: propTypes.string
};

Component.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row'
};

export default Component;
