import styled from 'styled-components';
import {path} from 'ramda';
import {fontSize} from 'styled-system';

const Component = styled.div.attrs( (props) => ({fontSize: props.fontSize}))`
  color: ${path(['theme', 'colors', 'primary'])};
  font-weight: 600;
  display: inline;
  ${fontSize};
`; 

Component.defaultProps = {fontSize: [2, 4]};

export default Component; 
