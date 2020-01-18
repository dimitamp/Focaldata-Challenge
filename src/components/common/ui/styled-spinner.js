import {Spinner} from '@blueprintjs/core';
import styled from 'styled-components';
import propTypes from 'prop-types';


const Component = styled(Spinner).attrs( (props) => ({
 intent: props.intent,
 size: props.size,
 className: props.class
}))``;

export default Component;

Component.propTypes = {
 intent: propTypes.string,
 size: propTypes.oneOfType([propTypes.string, propTypes.number]),
 class: propTypes.string
};

Component.defaultProps = {
 intent: 'primary',
 size: 50,
 class: ''
};
