import {Card, Elevation} from '@blueprintjs/core';
import styled from 'styled-components';
import {space} from 'styled-system';

const Component = styled(Card).attrs(props => ({
  elevation: props.elevation,
  interactive: props.interactive,
  p: [2, 3]
}))`
  border-radius: 20px;
  ${space}
`;

Component.defaultProps = {elevation: Elevation.THREE};

export default Component;
