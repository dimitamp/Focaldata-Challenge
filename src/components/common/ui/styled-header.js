import styled from 'styled-components';
import {path} from 'ramda';
import {fontSize} from 'styled-system';

const Component = styled.h2.attrs( (props) => ({fontSize: props.fontSize}))`
  width: 100%;
  text-align: center;
  color: ${path(['theme', 'colors', 'primary'])};
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  margin-bottom: 20;
  ${fontSize};
`; 

Component.defaultProps = {fontSize: [2, 4]};

export default Component; 
